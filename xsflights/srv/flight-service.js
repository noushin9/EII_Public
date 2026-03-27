const cds = require('@sap/cds')

module.exports = class FlightsService extends cds.ApplicationService { init() {

  const { Connections, Airlines, Airports, Flights, Supplements } = cds.entities('FlightsService')

 
  this.after ('READ', Flights, async () => {
    console.log('Hi I am Rohithnaik S I am from Turuvekere of Tumakuru District, Karnataka I completed my Engineering in Malnad College of Engineering, Hassan Currently I am learning Cloud Application Programming. My Interest lies in Artificial Intelligence and Full stack application development')
  })

   this.after ('READ', Connections, async () => {
    console.log('Hi I am Rohithnaik S I am from Turuvekere of Tumakuru District, Karnataka I completed my Engineering in Malnad College of Engineering, Hassan Currently I am learning Cloud Application Programming. My Interest lies in Artificial Intelligence and Full stack application development')
  })

   this.after ('READ', Airlines, async () => {
    console.log('Hi I am Rohithnaik S I am from Turuvekere of Tumakuru District, Karnataka I completed my Engineering in Malnad College of Engineering, Hassan Currently I am learning Cloud Application Programming. My Interest lies in Artificial Intelligence and Full stack application development')
  })
  
   this.after ('READ', Airports, async () => {
    console.log('Hi I am Rohithnaik S I am from Turuvekere of Tumakuru District, Karnataka I completed my Engineering in Malnad College of Engineering, Hassan Currently I am learning Cloud Application Programming. My Interest lies in Artificial Intelligence and Full stack application development')
  })

   this.after ('READ', Supplements, async () => {
    console.log('Hi I am Rohithnaik S I am from Turuvekere of Tumakuru District, Karnataka I completed my Engineering in Malnad College of Engineering, Hassan Currently I am learning Cloud Application Programming. My Interest lies in Artificial Intelligence and Full stack application development')
  })
   this.on('READ', Flights, async () => {
    console.log('Hi I am Rohithnaik S I am from Turuvekere of Tumakuru District, Karnataka I completed my Engineering in Malnad College of Engineering, Hassan Currently I am learning Cloud Application Programming. My Interest lies in Artificial Intelligence and Full stack application development');
    
   })
   this.on('READ', Connections, async () =>{
    console.log('Hi I am Rohithnaik S I am from Turuvekere of Tumakuru District, Karnataka I completed my Engineering in Malnad College of Engineering, Hassan Currently I am learning Cloud Application Programming. My Interest lies in Artificial Intelligence and Full stack application development');
   })
   this.on('READ', Airlines, async () =>{
    console.log('Hi I am Rohithnaik S I am from Turuvekere of Tumakuru District, Karnataka I completed my Engineering in Malnad College of Engineering, Hassan Currently I am learning Cloud Application Programming. My Interest lies in Artificial Intelligence and Full stack application development');
    
   })
   this.on('READ', Airports, async()=>{
    console.log('Hi I am Rohithnaik S I am from Turuvekere of Tumakuru District, Karnataka I completed my Engineering in Malnad College of Engineering, Hassan Currently I am learning Cloud Application Programming. My Interest lies in Artificial Intelligence and Full stack application development')
   })
   this.on('READ', Supplements, async()=>{
    console.log('Hi I am Rohithnaik S I am from Turuvekere of Tumakuru District, Karnataka I completed my Engineering in Malnad College of Engineering, Hassan Currently I am learning Cloud Application Programming. My Interest lies in Artificial Intelligence and Full stack application development')
   })
  return super.init()
}}
