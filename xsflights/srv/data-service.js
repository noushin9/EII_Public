const cds = require('@sap/cds')

module.exports = class data extends cds.ApplicationService { init() {

  const { Flights, Airlines, Airports, Supplements } = cds.entities('sap.capire.flights.data')




  return super.init()
}}
