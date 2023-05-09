import { Component } from '@angular/core';
import { IComment } from 'src/app/interfaces/icomment';
import { CommentsService } from 'src/app/services/comments.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  // pagination

    first: number = 0;
    rows: number = 10;
    visible: boolean = false;

  constructor(private commentsService: CommentsService){}


    showDialog() {
        this.visible = true;
    }

    hideDialog() {
        this.visible = false;
    }

    comment:IComment = {
      author:{firstName:"",lastName:""},
      date:new Date(),
      body:"",
    };

    addComment() {
      console.log(this.comment);
      this.commentsService.postComment(this.comment);
      this.visible = false;
    }

    onPageChange(event:any) {
        this.first = event.first;
        this.rows = event.rows;
    }


    // like , dislike , save

    isLiked:boolean = false;
    isDisliked:boolean = false;
    isSaved:boolean = false;

    onClick(){
      
    }
}
