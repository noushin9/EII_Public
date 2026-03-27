const cds = require('@sap/cds');
const { SELECT } = require('@sap/cds/lib/ql/cds-ql');

module.exports = class ProcessorService extends cds.ApplicationService { init() {
  this.before('CREATE', 'Incidents', async (req) => {
    this.changeinStatusBasedonUrgency(req.data);
  });

  this.before('UPDATE', 'Incidents', async(req) =>{
    this.onUpdate(req.data);
  });

  return super.init()
}
changeinStatusBasedonUrgency(data){
  let urgency = data.title?.match(/urgent/i);
  if (urgency){
    data.status_code = 'H';
  } else {
    data.status_code = 'M';
  }
}
async onUpdate(req) {
  let closed = await SELECT.one(1) .from(req.subject) .where `status.code='c'`
  if(closed) req.reject `Can't modify the closed Incident!`
}
}
