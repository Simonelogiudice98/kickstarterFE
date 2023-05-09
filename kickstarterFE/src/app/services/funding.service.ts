import { Injectable } from '@angular/core';
import { IFundingLevel } from '../interfaces/ifunding-level';

@Injectable({
  providedIn: 'root'
})
export class FundingService {

  private fundingLevels: IFundingLevel[] = [
    {
      description: 'Funding Level 1',
      minContribution: 20,
      reward: {
        unit: 0,
        photo: true,
        acknowledgement: false,
        description: 'Image of the product',
        minContribution: 20
      }
    },
    {
      description: 'Funding Level 2',
      minContribution: 50,
      reward: {
        unit: 1,
        photo: true,
        acknowledgement: false,
        description: 'Image + 1 unit of the product',
        minContribution: 50
      }
    },
    {
      description: 'Funding Level 3',
      minContribution: 100,
      reward: {
        unit: 2,
        photo: true,
        acknowledgement: true,
        description: 'Image + 2 units of the product + acknowledgement',
        minContribution: 100
      }
    }
  ];

  fundingLevelChoose:IFundingLevel[] = [];

  constructor() { }

  getFundingLevels(): IFundingLevel[] {
    return this.fundingLevels;
  }

  addToCart(fundingLevel:IFundingLevel){
    this.fundingLevelChoose.push(fundingLevel);
  }

  getChoosedLevels(){
    return this.fundingLevelChoose;
  }
 
}
