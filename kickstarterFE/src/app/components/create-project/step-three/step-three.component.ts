import { Component } from '@angular/core';
import { IProjectData } from 'src/app/interfaces/iproject-data';
import { CreateProjectService } from 'src/app/services/create-project.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent {

  allStepData!: IProjectData;

  constructor(private createProjectService: CreateProjectService) {}

  ngOnInit() {
    this.createProjectService.getProjectData().subscribe(
      projectData => {
        this.allStepData = projectData;
        console.log(this.allStepData);
      }
    );
  }

  onSubmit(){
    this.createProjectService.createProject();
  }
}
