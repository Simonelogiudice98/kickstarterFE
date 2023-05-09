import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICardData } from '../interfaces/icard-data';

@Injectable({
  providedIn: 'root'
})
export class PaymentsMethodService {


  cardData: ICardData = {
    cardNumber: 0,
    cardName: "",
    expiration: "",
    cvv: 0,
    postalCode: 0,
    country: "",
    state: "",
    city: "",
    address: ""
  };

  constructor(private http:HttpClient) { }


  saveCardData(data: ICardData){
    this.cardData = data;
    console.log(this.cardData);  
  }

  

}
