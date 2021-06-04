import { makeAutoObservable, action, observable, autorun, computed } from 'mobx';

class Cart {
  myTicket = []

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  setMyTicket (ticket) {
    this.myTicket.push(ticket);
  }
}

export const myCart = new Cart();