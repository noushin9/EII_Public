using { FlightsService } from '../srv/flights-service';

annotate FlightsService.Connections with @UI.LineItem: [
  { Value: ID },
  { Value: (airline.ID)},
  { Value: (origin.ID )},
  { Value: (destination.ID) },
  { Value: departure },
  { Value: arrival },
  { Value: distance }
];

annotate FlightsService.Flights with @UI.LineItem: [
  { Value: (flight.ID) },
  { Value: date },
  { Value: aircraft },
  { Value: price },
  { Value: (currency.code) },
  { Value: maximum_seats },
  { Value: occupied_seats }
];

annotate FlightsService.Airlines with @UI.LineItem  : [
  { Value: ID },
  { Value: name },
  { Value: icon },
  { Value: (currency.code) }
];

annotate FlightsService.Airports with @UI.LineItem  : [
    {Value: ID},
    {Value: name},
    {Value: city },
    {Value: (country.code) },    
];

annotate FlightsService.Supplements with @UI.LineItem  : [
    {Value: ID},
    {Value: (type.code)},
    {Value:  descr},
    {Value: price  },
    {Value: (currency.code)}, 
];

annotate FlightsService.SupplementTypes with @UI.LineItem  : [
    {Value: code},
    {Value:  descr},
    {Value: name },
    
];