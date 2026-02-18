using { sap.capire.flights } from './schema';

annotate flights.Connections with {
  ID          @title: '{i18n>Flight}';
  airline     @title: '{i18n>Airline}';
  origin      @title: '{i18n>Origin}';
  destination @title: '{i18n>Destination}';
  departure   @title: '{i18n>Departure}';
  arrival     @title: '{i18n>Arrival}';
  distance    @title: '{i18n>Distance}';
}

annotate flights.Flights with {
  flight         @title: '{i18n>Fight}';
  date           @title: '{i18n>FlightDate}';
  aircraft       @title: '{i18n>PlaneType}';
  price          @title: '{i18n>FlightPrice}';
  currency      @title: '{i18n>Currency}' ;
  maximum_seats  @title: '{i18n>MaximumSeats}';
  occupied_seats @title: '{i18n>OccupiedSeats}';
}

annotate flights.Airlines with {
   ID  @title: '{i18n>Flight}';
  name @title : '{i18n>Flight Name}';
  icon @title : '{i18n>Icon}';
  currency @title : '{i18n>Currency}';
}

annotate flights.Airports with {
   ID  @title: '{i18n>Flight}';
  name @title : '{i18n>Airport Name}';
  city @title : '{i18n>City}';
  country @title : '{i18n>Country}';
};

annotate flights.Supplements with {
  ID  @title: '{i18n>Flight}';
  type @title : '{i18n>Supplement Type}';
  descr @title : '{i18n>Supplement Description}';
  price @title : '{i18n>Supplement Price}';
  currency @title : '{i18n>Currency}';

};

annotate flights.SupplementTypes with {
  code @title : '{i18n>Code}';
  descr @title : '{i18n> Description}';
};

