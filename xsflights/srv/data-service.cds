using { sap, sap.capire.flights as my } from '../db/schema';

@hcql @rest @odata 
service sap.capire.flights.data {

    @readonly entity Flights as projection on my.Flights {
        key flight.ID, flight.{*} excluding {ID},
        key date , *, 
        maximum_seats - occupied_seats as free_seats : Integer,
    } excluding { flight}; 

    @readonly entity Airlines as projection on my.Airlines;
    @readonly entity Airports as projection on my.Airports;
    @readonly entity Supplements as projection on my.Supplements;
}

annotate sap.common.Currencies with @cds.autoexpose:false;
annotate sap.common.Countries with @cds.autoexpose:false;
annotate sap.common.Languages with @cds.autoexpose:false;



