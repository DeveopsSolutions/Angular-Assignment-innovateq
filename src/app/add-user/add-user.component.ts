import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent
  implements OnInit {
  public breakpoint: number; // Breakpoint observer code
  public adduser: FormGroup;
  wasFormChanged = false;

  constructor(
    private fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.adduser = new FormGroup({
      id : new FormControl(),
      name : new FormControl(),
      username : new FormControl(),
      email : new FormControl(),
      address : new FormGroup({
      door : new FormControl(),
      street : new FormControl(),
      city : new FormControl()
      })
       
    })
  }

  public onAddCus(): void {
    this.markAsDirty(this.adduser);
  }

 

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
  }

}