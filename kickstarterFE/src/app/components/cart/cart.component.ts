import { Component } from '@angular/core';
import { IFundingLevel } from 'src/app/interfaces/ifunding-level';
import { FundingService } from 'src/app/services/funding.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  products!: IFundingLevel[];

    constructor(private fundingService:FundingService) {}

    ngOnInit() {
       this.products = this.fundingService.getChoosedLevels();

    }

  
}
