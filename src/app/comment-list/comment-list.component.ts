import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { TableColumn } from '../core/models/tableColumn.model';
import { Comments } from '../core/models/comments.model';
import { CommentsserviceService } from '../core/services/commentsservice.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent {
  
constructor(private _commentservice:CommentsserviceService ){}
commentslist: any[];
commentTableColumns: TableColumn[];
title='Comments';
ngOnInit(): void {
  this.getComments();
}
getComments():any{
  this.initializeColumns();
 this._commentservice.getComments().subscribe(result=>{
    if(result){
     return this.commentslist=result;

    }
  })
} 
removeOrder(order: any) {
  this.commentslist = this.commentslist.filter(item => item.id !== order.id);
}

sortData(sortParameters: Sort) {
  const keyName = sortParameters.active;
  if (sortParameters.direction === 'asc') {
    this.commentslist = this.commentslist.sort((a: any, b: any) => a[keyName].localeCompare(b[keyName]));
  } else if (sortParameters.direction === 'desc') {
    this.commentslist = this.commentslist.sort((a: any, b: any) => b[keyName].localeCompare(a[keyName]));
  } else {
    return this.commentslist = this.getComments();
  }
}

initializeColumns(): void {
  this.commentTableColumns = [
    {
      name: 'PostId',
      dataKey: 'postId',
      position: 'left',
      isSortable: true
    },
    {
      name: 'Comment Name',
      dataKey: 'name',
      position: 'left',
      isSortable: true
    },
    {
      name: 'Email',
      dataKey: 'email',
      position: 'left',
      isSortable: true
    },
    {
      name: 'Id',
      dataKey: 'id',
      position: 'left',
      isSortable: true
    },
    {
      name: 'details',
      dataKey: 'body',
      position: 'left',
      isSortable: true
    },
  ];
}

}
