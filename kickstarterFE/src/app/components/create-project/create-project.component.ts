import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import { animate, transition, trigger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CreateProjectService } from 'src/app/services/create-project.service';
import { BehaviorSubject } from 'rxjs';
import { StepOneComponent } from './step-one/step-one.component';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  providers: [MessageService],
  styleUrls:['./create-project.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('toastAnimation', [
      transition(':enter, :leave', [
        animate('0.2s ease-in-out')
      ])
    ])
  ]
})
export class CreateProjectComponent { 
    steps: MenuItem[] = [];
    activeIndex: number = 0;
    currentRoute!:string;
    projectDataOne: any = {};

  
  constructor(private messageService: MessageService , public route: ActivatedRoute, private router: Router, private createProjectService: CreateProjectService) {
    this.setActiveIndex();
  }
  
  ngOnInit() {
    this.setActiveIndex();
    this.currentRoute = this.route.snapshot.url[0].path;
    
      this.steps = [{
              label: 'Step 1',
              routerLink:'/create-project/step-1',
          },
          {
              label: 'Step 2',
              routerLink:'/create-project/step-2', 
          },
          {
              label: 'Step 3',
              routerLink:'/create-project/step-3',
          },
        ]};  
        
    //    set step1 onInit
        
    private setActiveIndex(): boolean {
        const step = this.route.snapshot.firstChild?.routeConfig?.path;
        if (step === 'step1') {
          this.activeIndex = 0;
        } else if (step === 'step2') {
          this.activeIndex = 1;
        } else if (step === 'step3') {
          this.activeIndex = 2;
        } else {
          return false;
        }
        return true;
      }

      // back and next

      goBack() {
        if (this.activeIndex > 0) {
          this.activeIndex--;
          const prevStepUrl = `/create-project/step-${this.activeIndex + 1}`;
          this.router.navigateByUrl(prevStepUrl);
          this.displayMessage();
        }
      }
      
      goNext() {
        if (this.activeIndex < this.steps.length - 1) {
          this.activeIndex++;
          const nextStepUrl = `/create-project/step-${this.activeIndex + 1}`;
          this.router.navigateByUrl(nextStepUrl);
          this.displayMessage();   
          this.createProjectService.isStepValid = false;
        }
               
      }

      isNextButtonDisabled() {
        return !this.createProjectService.isStepValid;
      }

      // message 

      displayMessage() {
        switch (this.activeIndex) {
          case 0:
            this.messageService.add({severity:'success', summary:'name, descryption & goal', detail: 'Step 1 message'});
            break;
          case 1:
            this.messageService.add({severity:'success', summary:'image & project duration', detail: 'Step 2 message'});
            break;
          case 2:
            this.messageService.add({severity:'success', summary:'Overview', detail: 'Step 3 message'});
            break;
          default:
            break;
        }
      }

}
