import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { IStepOneData } from 'src/app/interfaces/istep-one-data';
import { CreateProjectService } from 'src/app/services/create-project.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent {

  stepOneData:IStepOneData = {
    title: "",
    description: "",
    category:{name:''}
  }

  categories:any[] = [];

  stepOneForm!: FormGroup;

  constructor(private createProjectService: CreateProjectService, private formBuilder: FormBuilder){}

  ngOnInit() {
    this.stepOneForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: [null,[Validators.required]]
    });

    this.categories = [
      {name:"Arts"},
      {name:"Comics"},
      {name:"Movies"},
      {name:"Games"},
      {name:"Food"},
    ]

    this.stepOneForm.valueChanges.subscribe(values => {
      if (this.stepOneForm.valid) {
        console.log('Step one form is valid');
        const stepOneData: IStepOneData = {
          title: values.title,
          description: values.description,
          category: { name: values.category.name },
        };
        console.log('Step one data:', stepOneData);
        this.createProjectService.updateStepOneData(stepOneData);
        this.createProjectService.setStepValid();
      }
    });
  }

  validateCategory(control: FormControl) {
    const selectedCategory = control.value;
    if (selectedCategory === null || selectedCategory === undefined || selectedCategory.name === '') {
      return { required: true };
    }
    return null;
  }

  updateStepOneData(){
    this.createProjectService.updateStepOneData(this.stepOneData);
  }

}
