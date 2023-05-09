import { Component } from '@angular/core';
import { IComment } from 'src/app/interfaces/icomment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent {

  comments:IComment[] = [];

  

}
