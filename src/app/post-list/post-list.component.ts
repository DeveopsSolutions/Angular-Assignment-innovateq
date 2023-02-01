import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { TableColumn } from '../core/models/tableColumn.model';
import { Comments } from '../core/models/comments.model';
import { PostserviceService } from '../core/services/postservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

constructor(private _posttservice:PostserviceService,private router:Router ){}
postlist: any[];
postTableColumns: TableColumn[];
title='Posts';
ngOnInit(): void {
  this.getPosts();
}
getPosts():any{
  this.initializeColumns();
 this._posttservice.getPosts().subscribe(result=>{
    if(result){
     return this.postlist=result;

    }
  })
} 
removeOrder(order: any) {
  this.postlist = this.postlist.filter(item => item.id !== order.id);
}
getrowDetails(post:any){
  const id=post['id'];
  this.router.navigate(['/post/',  id]);
 console.log(post);
}
sortData(sortParameters: Sort) {
  const keyName = sortParameters.active;
  if (sortParameters.direction === 'asc') {
    this.postlist = this.postlist.sort((a: any, b: any) => a[keyName].localeCompare(b[keyName]));
  } else if (sortParameters.direction === 'desc') {
    this.postlist = this.postlist.sort((a: any, b: any) => b[keyName].localeCompare(a[keyName]));
  } else {
    return this.postlist = this.getPosts();
  }
}

initializeColumns(): void {
  this.postTableColumns = [
    {
      name: 'User Id',
      dataKey: 'userId',
      position: 'left',
      isSortable: true
    },
    {
      name: 'Title',
      dataKey: 'title',
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
