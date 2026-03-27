using { FlightsService } from '../srv/flight-service';

annotate FlightsService.Connections with @UI.LineItem: [
  { Value: ID },
  { Value: (airline.ID) },
  { Value: (origin.ID) },
  { Value: (destination.ID) },
  { Value: departure },
  { Value: arrival },
  { Value: distance }
];

annotate FlightsService.Flights with @UI.LineItem: [
  { Value: (flights.ID) },
  { Value: date },
  { Value: aircraft },
  { Value: price },
  { Value: (currency.code) },
  { Value: maximum_seats },
  { Value: occupied_seats }
];