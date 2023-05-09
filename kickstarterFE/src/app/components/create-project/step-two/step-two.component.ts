import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators , FormControl} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { IStepTwoData } from 'src/app/interfaces/istep-two-data';
import { CreateProjectService } from 'src/app/services/create-project.service';


@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {

  stepTwoData:IStepTwoData = {
    endDate:new Date(),
    goal: 0,
    imageUrl: ""
  }
 
  stepTwoForm: FormGroup;
  

  goalValidator(control:any) {
    if (control.value && control.value < 100) {
      return { 'minValue': true };
    }
    return null;
  }

  constructor(private createProjectService : CreateProjectService , private formBuilder: FormBuilder) {
    this.stepTwoForm = this.formBuilder.group({
      goal: ['', [Validators.required, this.goalValidator]],
      endDate: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
    this.stepTwoForm.valueChanges.subscribe((formData: IStepTwoData) => {
      if(this.stepTwoForm.valid){
        console.log('Step two form is valid');
        this.stepTwoData = formData;
        const stepOneData: IStepTwoData = {
          endDate: this.stepTwoData.endDate,
          goal: this.stepTwoData.goal,
          imageUrl: this.stepTwoData.imageUrl,
        };
        this.createProjectService.updateStepTwoData(this.stepTwoData);
        this.createProjectService.setStepValid();
      }
    });
  }

  ngOnInit() {}

  updateStepTwoData(){
    this.createProjectService.updateStepTwoData(this.stepTwoData);
  }

  
}
