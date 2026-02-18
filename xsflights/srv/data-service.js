const cds = require('@sap/cds')

module.exports = class data extends cds.ApplicationService { init() {

  const { Flights, Airlines, Airports, Supplements } = cds.entities('sap.capire.flights.data')

  this.before (['CREATE', 'UPDATE'], Flights, async (req) => {
    console.log('Before CREATE/UPDATE Flights', req.data)
  })
  this.after ('READ', Flights, async (flights, req) => {
    console.log('After READ Flights', flights)
  })
  this.before (['CREATE', 'UPDATE'], Airlines, async (req) => {
    console.log('Before CREATE/UPDATE Airlines', req.data)
  })
  this.after ('READ', Airlines, async (airlines, req) => {
    console.log('After READ Airlines', airlines)
  })
  this.before (['CREATE', 'UPDATE'], Airports, async (req) => {
    console.log('Before CREATE/UPDATE Airports', req.data)
  })
  this.after ('READ', Airports, async (airports, req) => {
    console.log('After READ Airports', airports)
  })
  this.before (['CREATE', 'UPDATE'], Supplements, async (req) => {
    console.log('Before CREATE/UPDATE Supplements', req.data)
  })
  this.after ('READ', Supplements, async (supplements, req) => {
    console.log('After READ Supplements', supplements)
  })


  return super.init()
}}
