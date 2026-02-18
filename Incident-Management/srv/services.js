const cds = require('@sap/cds')
const { data } = require('@sap/cds/lib/dbs/cds-deploy')
const { SELECT } = require('@sap/cds/lib/ql/cds-ql')

module.exports = class ProcessorService extends cds.ApplicationService { init() {

  const { Incidents, Customers } = cds.entities('ProcessorService')

  this.before ('UPDATE', Incidents, async (req)=>{
    this.changeInStatus(req.data)
  })

  this.before ('CREATE', Incidents, async (req)=>{
    await this.onUpdate(req)
  })

  return super.init()
}

changeInStatus(data){
  let urgency = data.title?.match(/urgent/i)
  if (urgency){
    data.status_code = 'H'
  } else {
    data.status_code = 'M'
  }
}

async onUpdate(req){
  let closed = await SELECT.one(1).from(req.subject).where `status.code = 'C'`
  if(closed) req.reject(400, `Can't modify a closed incident`)
}

}

