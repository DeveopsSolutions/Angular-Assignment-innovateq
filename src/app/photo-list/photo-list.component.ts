import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { TableColumn } from '../core/models/tableColumn.model';
import { Comments } from '../core/models/comments.model';
import { PhotosserviceService } from '../core/services/photosservice.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  constructor(private _photoservice:PhotosserviceService ){}
photolist: any[];
photoTableColumns: TableColumn[];
title='Posts';
ngOnInit(): void {
  this.getPosts();
}
getPosts():any{
  this.initializeColumns();
 this._photoservice.getPhotos().subscribe(result=>{
    if(result){
     return this.photolist=result;

    }
  })
} 
removeOrder(order: any) {
  this.photolist = this.photolist.filter(item => item.id !== order.id);
}

sortData(sortParameters: Sort) {
  const keyName = sortParameters.active;
  if (sortParameters.direction === 'asc') {
    this.photolist = this.photolist.sort((a: any, b: any) => a[keyName].localeCompare(b[keyName]));
  } else if (sortParameters.direction === 'desc') {
    this.photolist = this.photolist.sort((a: any, b: any) => b[keyName].localeCompare(a[keyName]));
  } else {
    return this.photolist = this.getPosts();
  }
}

initializeColumns(): void {
  this.photoTableColumns = [
    {
      name: 'Album Id',
      dataKey: 'albumId',
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
      name: 'Image',
      dataKey: 'thumbnailUrl',
      position: 'left',
      isSortable: true
    },
  ];
}

}
