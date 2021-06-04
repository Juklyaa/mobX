import { makeAutoObservable, action, observable, autorun, computed } from 'mobx';

const getRandomArbitrary = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
}

const airLine = ['Emirates', 'Sky Up', 'Air Berlin', 'MAU', 'Air Malta', 'Ryan air'];

class PlaneTicket {
  departureCity ='Kharkiv'
  arrivalCity = 'Paris'
  departureDate = new Date()
  returnDate = new Date()
  passengerAdult = 1
  passengerChildren = 0
  tickets = []

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }
  
  setDepartureCity (city) {
    this.departureCity = city;
  }
  setArrivalCity (city) {
    this.arrivalCity = city;
  }

  setDepartureDate (date) {
    this.departureDate = date;
  }
  setReturnDate (date) {
    this.returnDate = date;
  }

  isRouteChosen () {
    return this.departureCity && this.arrivalCity;
  }

  areDataSame () {
    return this.getStringDepartureDate() === this.getStringReturnDate();
  }

  getStringDepartureDate () {
    const d = this.departureDate;
    return d.getDate() + "-" + (d.getMonth()) + "-" + d.getFullYear();
  }

  getStringReturnDate () {
    const d = this.returnDate;
    return d.getDate() + "-" + (d.getMonth()) + "-" + d.getFullYear();
  }

  getUrlRequest () {
    return `https://polar-hollows-24549.herokuapp.com/get_tickets?departureCity=${this.departureCity}&arrivalCity=${this.arrivalCity}&departureDate=${this.getStringDepartureDate()}&returnDate=${this.getStringReturnDate()}&passengerAdult=${this.passengerAdult}&passengerChildren=${this.passengerChildren}`
  }

  searchTicket () {
    const isEnoughDataForSearching = 
      this.isRouteChosen() &&
      !this.areDataSame() &&
      this.passengerAdult >= 1

    if(isEnoughDataForSearching) {
      const url = this.getUrlRequest();
      
      fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const tickets = data.body;
        console.log(tickets);
        this.setTickets(tickets);
      });
    }
  }

  setTickets = action(
    'SET TICKETS',
    function(responseApi){
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
      this.tickets = tickets;
    }
  )

  report() {
    if (!this.isRouteChosen()){
      return 'You should select city';
    } else if(this.areDataSame()){
      return 'Something wrong with date. Are you sure you want to came back in the same data?'
    } else if(this.passengerAdult < 1){
      return 'Who travels?'
    } else return 'We have enough data'
  }
}

export const myPlaneTicket = new PlaneTicket();

autorun(() => console.log(myPlaneTicket.departureCity, ' -----  ', myPlaneTicket.departureDate))

export const state = observable({ value:  10});

export const increment = action(state => {
    state.value++
    state.value++
});
