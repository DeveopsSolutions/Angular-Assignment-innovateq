import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AddUserComponent } from '../add-user/add-user.component';
import { TableColumn } from '../core/models/tableColumn.model';
import { User } from '../core/models/user.model';
import { UserserviceService } from '../core/services/userservice.service';
import { UserRouteComponent } from '../user-route/user-route.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  constructor(private _userservice:UserserviceService,private router:Router,public dialog: MatDialog ){}
  userslist: any[];
  userTableColumns: TableColumn[];
  title='Users';
  selectedId:string;
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers():any{
    this.initializeColumns();
   this._userservice.getUsers().subscribe(result=>{
      if(result){
       return this.userslist=result;

      }
    })
  } 
  getrowDetails(user:any){
    const id=user['id'];
    this.selectedId=id;
    // this.router.navigate(['/user/',  id]);
   console.log(user);
  this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(UserRouteComponent,{
      width: '1050px',disableClose: true ,height:'400px',
      data: {id: this.selectedId}
    });
}
  removeOrder(order: any) {
    this.userslist = this.userslist.filter(item => item.id !== order.id);
  }

  sortData(sortParameters: Sort) {
    const keyName = sortParameters.active;
    if (sortParameters.direction === 'asc') {
      this.userslist = this.userslist.sort((a: any, b: any) => a[keyName].localeCompare(b[keyName]));
    } else if (sortParameters.direction === 'desc') {
      this.userslist = this.userslist.sort((a: any, b: any) => b[keyName].localeCompare(a[keyName]));
    } else {
      return this.userslist = this.getUsers();
    }
  }
  
  initializeColumns(): void {
    this.userTableColumns = [
      {
        name: 'Name',
        dataKey: 'name',
        position: 'left',
        isSortable: true
      },
      {
        name: 'User Name',
        dataKey: 'username',
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
        name: 'Phone',
        dataKey: 'phone',
        position: 'left',
        isSortable: true
      },
    ];
  }

}
