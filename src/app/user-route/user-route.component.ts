import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { TableColumn } from '../core/models/tableColumn.model';
import { User } from '../core/models/user.model';
import { UserserviceService } from '../core/services/userservice.service';

@Component({
  selector: 'app-user-route',
  templateUrl: './user-route.component.html',
  styleUrls: ['./user-route.component.scss']
})
export class UserRouteComponent implements OnInit {
  constructor(private _userservice: UserserviceService, private route: ActivatedRoute,private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {id:string},public dialog: MatDialog,private router:Router) { }
  public breakpoint: number;
  userslist: any[];
  user:User;
  userTableColumns: TableColumn[];
  selectedId: string
  title = 'Users';
  public adduser: FormGroup;
  wasFormChanged = false;
  ngOnInit(): void {
    this.adduser = this.fb.group({
      id :[''],
      name : [''],
      username :[''],
      email : [''],
      phone:[''],
      website:[''],
      address:[''],
      company:['']
    })
    this.selectedId =this.data.id;
    this.getUserById(this.selectedId);
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2;
  }
  getUserById(id: string): any {
    this.initializeColumns();

    this._userservice.getUserById(id).subscribe(result => {
      if (result) {
        // this.user.username=result.username
        // this.user.email=result.email
        // this.user.name=result.name
        // this.user.id=result.Id
        // this.user.phone=result.phone
        this.adduser.setValue(result);

      }
    })
  }
  getrowDetails(user:any){
   console.log(user);
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
      return this.userslist = this.getUserById(this.selectedId);
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
  openDialog(){
    this.dialog.closeAll();
    this.router.navigate(['/users-list']);
  }

}
