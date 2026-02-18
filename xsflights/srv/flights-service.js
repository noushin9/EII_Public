const cds = require('@sap/cds')

module.exports = class FlightsService extends cds.ApplicationService { init() {

  const { Connections, Airlines, Airports, Flights, Supplements, SupplementTypes } = cds.entities('FlightsService')

  
  this.after ('READ', Flights, async () => {
    console.log('my name is Anil Kumar Reddy Challa , i am from Nellore AP-Andhra Pradesh ')
  })

  this.after ('READ', Airlines, async () => {
    console.log(' i completed my graduation in 2024 from yogi vemana university')
  })
  
  
  this.after ('READ', Connections, async () => {
    console.log('i joined brainbox as a EII consultant')
  })
  

  this.after ('READ', Airports, async () => {
    console.log('i am learning CAP (cloud application programming)')
  })
 
 
  this.after ('READ', Supplements, async () => {
    console.log('i love playing cricket')
  })

  this.after ('READ', SupplementTypes, async () =>{
    console.log('Thank you')
  })

  this.on ('READ', Flights, async () =>{
    console.log('flight is going from india to germany')
  })

  this.on ('READ', Airports, async () =>{
    console.log('i am in the airport for the first time')
  })

  this.on ('READ', Connections, async ()=>{
    console.log('i am connecting airlines and airports ...')
  })

  this.on ('READ', Supplements, async ()=>{
    console.log('i am suplement ')
  })


  return super.init()
}}
