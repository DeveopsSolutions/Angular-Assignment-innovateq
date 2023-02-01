import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { TableColumn } from '../core/models/tableColumn.model';
import { Comments } from '../core/models/comments.model';
import { PostserviceService } from '../core/services/postservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-route',
  templateUrl: './post-route.component.html',
  styleUrls: ['./post-route.component.scss']
})
export class PostRouteComponent{
  selectedId:string;
  constructor(private _posttservice:PostserviceService,private router:ActivatedRoute){}
  postlist: any[];
  postTableColumns: TableColumn[];
  title='Post Comments';
  ngOnInit(): void {
    this.selectedId = this.router.snapshot.paramMap.get('id');
    this.getPostById();
  }
  getPostById():any{
    this.initializeColumns();
   this._posttservice.getByPosts(this.selectedId).subscribe(result=>{
      if(result){
       return this.postlist=result;
  
      }
    })
  } 
  getrowDetails(post:any){
    console.log(post);
   }
  removeOrder(order: any) {
    this.postlist = this.postlist.filter(item => item.id !== order.id);
  }
  
  sortData(sortParameters: Sort) {
    const keyName = sortParameters.active;
    if (sortParameters.direction === 'asc') {
      this.postlist = this.postlist.sort((a: any, b: any) => a[keyName].localeCompare(b[keyName]));
    } else if (sortParameters.direction === 'desc') {
      this.postlist = this.postlist.sort((a: any, b: any) => b[keyName].localeCompare(a[keyName]));
    } else {
      return this.postlist = this.getPostById();
    }
  }
  
  initializeColumns(): void {
    this.postTableColumns = [
      {
        name: 'Id',
        dataKey: 'id',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Name',
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
        name: 'details',
        dataKey: 'body',
        position: 'left',
        isSortable: true
      },
    ];
  }
  
  }
  