import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { IFundingLevel } from 'src/app/interfaces/ifunding-level';
import { FundingService } from 'src/app/services/funding.service';

@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrls: ['./funding.component.scss']
})
export class FundingComponent {

  fundingLevels: IFundingLevel[] = [];
  

  constructor(private fundingService:FundingService) {}

  ngOnInit(): void {
    this.fundingLevels = this.fundingService.getFundingLevels();
  }

  
}
