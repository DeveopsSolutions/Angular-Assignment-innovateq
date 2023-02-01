import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import{SharedModule} from './shared/shared/shared.module'
import { AppComponent } from './app.component';
import { SidenavComponentComponent } from './/layout/sidenav-component/sidenav-component.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserserviceService } from './core/services/userservice.service';
import { PostserviceService } from './core/services/postservice.service';
import { CommentsserviceService } from './core/services/commentsservice.service';
import { PhotosserviceService } from './core/services/photosservice.service';
import { AlbumsserviceService } from './core/services/albumsservice.service';
import { WebApiService } from './core/services/web-api.service';
import { HttpClientModule } from '@angular/common/http';
import { DataPropertyGetterPipePipe } from './shared/pipes/data-property-getter-pipe.pipe';
import { AlbumListComponent } from './album-list/album-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { UserRouteComponent } from './user-route/user-route.component';
import { PostRouteComponent } from './post-route/post-route.component';
import { AddUserComponent } from './add-user/add-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponentComponent,
    UserListComponent,
    AlbumListComponent,
    PostListComponent,
    PhotoListComponent,
    CommentListComponent,
    UserRouteComponent,
    PostRouteComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports:[
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [WebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
