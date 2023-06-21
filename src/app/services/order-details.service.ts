import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  reservasDetails: Array<any> = [
    {
      id: 1,
      ReservasName: "Sexta a Domingo - Até 5 Pessoas",
      reservasDetails: "Sexta a Domingo - Até 5 Pessoas",
      reservasPrice: 990,
      reservasImg: "assets/img/4c5d94c4-982e-44d8-aee3-adefa3523bec.jpg"
    },
    {
      id: 2,
      ReservasName: "Sexta a Domingo - Até 12 Pessoas",
      reservasDetails: "Sexta a Domingo - Até 12 Pessoas",
      reservasPrice: 1200,
      reservasImg: "assets/img/125d3e03-7ff4-43b6-8258-8e20ef554873.jpg"
    },
    {
      id: 3,
      ReservasName: "Sexta a Domingo - Até 15 Pessoas",
      reservasDetails: "Sexta a Domingo - Até 15 Pessoas",
      reservasPrice: 1400,
      reservasImg: "assets/img/b863e97a-6708-44b7-a102-b8363415d5a1.jpg"
    },
    {
      id: 4,
      ReservasName: "Sexta a Domingo - Até 20 Pessoas",
      reservasDetails: "Sexta a Domingo - Até 20 Pessoas",
      reservasPrice: 1700,
      reservasImg: "assets/img/ff411a91-f9e1-4d50-bddf-f56c6d1f799b.jpg"
    },
    {
      id: 5,
      ReservasName: "Segunda a Quinta - Até 05 Pessoas",
      reservasDetails: "Segunda a Quinta - Até 05 Pessoas",
      reservasPrice: 700,
      reservasImg: "assets/img/e54ab33c-cd64-4572-99dd-59fb22e781ba.jpg"
    },
    {
      id: 6,
      ReservasName: "Segunda a Quinta - Até 12 Pessoas",
      reservasDetails: "Segunda a Quinta - Até 12 Pessoas",
      reservasPrice: 750,
      reservasImg: "assets/img/5e6b09ff-ae69-4417-a9bf-7a6205f7e0a1.jpg"
    },
    {
      id: 7,
      ReservasName: "Segunda a Quinta - Até 15 Pessoas",
      reservasDetails: "Segunda a Quinta - Até 15 Pessoas",
      reservasPrice: 800,
      reservasImg: "assets/img/9d70bb3e-1830-4ae8-91ac-71ea1c637712.jpg"
    },
    {
      id: 8,
      ReservasName: "Segunda a Quinta - Até 20 Pessoas",
      reservasDetails: "Segunda a Quinta - Até 20 Pessoas",
      reservasPrice: 850,
      reservasImg: "assets/img/d54acf43-08ea-4756-9341-c2b12358956d.jpg"
    },
  ]
}