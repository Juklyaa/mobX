import { action, observable, autorun } from 'mobx';

const getRandomArbitrary = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
}

const airLine = ['Emirates', 'Sky Up', 'Air Berlin', 'MAU', 'Air Malta', 'Ryan air'];

const airPlaneTicket = {
  departureCity: 'Kharkiv',
  arrivalCity: 'Paris',
  departureDate: new Date(),
  returnDate: new Date(),
  passengerAdult: 1,
  passengerChildren: 0,

  waitForResponse: false,

  get routeChosen () {
    return !!this.departureCity && !!this.arrivalCity;
  },

  get stringDepartureDate () {
    const d = this.departureDate;
    return d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
  },

  get stringReturnDate () {
    const d = this.returnDate;
    return d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
  },

  getTicket(responseApi) {
    const countTickets = getRandomArbitrary(2, 10);
    let tickets = [];
    for(let i=0; i++; i <countTickets){
      tickets.push(responseApi);
      tickets[0].price = responseApi.price * Math.random();
    }
    console.log(tickets);
    return {};
  },

  report() {
    if (!this.routeChosen){
      return 'You should select city';
    } else if(this.stringDepartureDate === this.stringReturnDate){
      return 'Something wrong with date'
    } else if(this.passengerAdult < 1){
      return 'Who travels?'
    } else return 'We have enough data'
  },

  setDepartureCity: action(
    'SET DEPARTURE CITY',
    function (city) {
      this.departureCity = city;
    }
  ),

  setArrivalCity: action(
    'SET ARRIVE CITY',
    function (city) {
      this.arrivalCity = city;
    }
  ),

  setDepartureDate: action(
    'SET DEPARTURE DATE',
    function (date) {
      this.departureDate = date;
    }
  ),

  setReturnDate: action(
    'SET RETURN DATE',
    function (city) {
      this.returnDate = city;
    }
  ),

  setWaitForResponse: action(
    'SET waitForResponse',
    function (waitForResponse) {
      this.waitForResponse = waitForResponse;
    }
  ),

  setTickets: action(
    'SET TICKETS',
    function(responseApi){
      console.log(responseApi)
      const countTickets = getRandomArbitrary(2, 10);
      let tickets = [];
      tickets.length = countTickets;
      const { price, count } = responseApi;
      for (let i = 0; i < countTickets; i++) {
        tickets[i] = {
          ...responseApi,
          price: getRandomArbitrary(price * (i+2), price * (i+7)),
          count: getRandomArbitrary(count * (i), count + (i * 20)),
          airLine: airLine[getRandomArbitrary(0, airLine.length)],
          route:getRandomArbitrary(1000, 9999)
        };
      }
      console.log(tickets);
      this.tickets = tickets;
    }
  )
};

export const createAirPlaneTicket = () => observable(airPlaneTicket);


export const state = observable({ value:  10});

export const increment = action(state => {
    state.value++
    state.value++
});


