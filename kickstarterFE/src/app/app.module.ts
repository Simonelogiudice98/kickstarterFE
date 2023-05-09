import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepOneComponent } from './components/create-project/step-one/step-one.component';
import { StepTwoComponent } from './components/create-project/step-two/step-two.component';
import { StepThreeComponent } from './components/create-project/step-three/step-three.component';
import {CalendarModule} from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentComponent } from './components/comments-list/comment/comment.component';
import { AccordionModule } from 'primeng/accordion';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { FundingComponent } from './components/funding/funding.component';
import { PaymentsMethodComponent } from './components/payments-method/payments-method.component';
import { DataViewModule } from 'primeng/dataview';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    RegisterComponent,
    CreateProjectComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    CommentsListComponent,
    CommentComponent,
    FundingComponent,
    PaymentsMethodComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginatorModule,
    ButtonModule,
    FormsModule,
    StepsModule,
    ToastModule,
    BrowserAnimationsModule,
    CalendarModule,
    FileUploadModule,
    HttpClientModule,
    AccordionModule,
    RadioButtonModule,
    DialogModule,
    ReactiveFormsModule,
    CommonModule,
    AvatarModule,
    DataViewModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
