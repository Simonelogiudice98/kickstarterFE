import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ICardData } from 'src/app/interfaces/icard-data';

@Component({
  selector: 'app-payments-method',
  templateUrl: './payments-method.component.html',
  styleUrls: ['./payments-method.component.scss']
})
export class PaymentsMethodComponent {

  cardForm: FormGroup;
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

  constructor(private formBuilder: FormBuilder) {

    this.cardForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      cardName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,}')]],
      expiration: ["", [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])/[0-9]{2}$')]],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3,4}')]],
      postalCode: ['', [Validators.required, Validators.maxLength(5), Validators.pattern('[0-9]{5}')]],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    this.cardData.cardNumber = this.cardForm.value.cardNumber;
    this.cardData.cardName = this.cardForm.value.cardName;
    this.cardData.expiration = this.cardForm.value.expiration;
    this.cardData.cvv = this.cardForm.value.cvv;
    this.cardData.postalCode = this.cardForm.value.postalCode;
    this.cardData.country = this.cardForm.value.country;
    this.cardData.state = this.cardForm.value.state;
    this.cardData.city = this.cardForm.value.city;
    this.cardData.address = this.cardForm.value.address;
  }
}
