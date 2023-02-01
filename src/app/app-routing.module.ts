import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{UserListComponent} from '../app/user-list/user-list.component'
import { AlbumListComponent } from './album-list/album-list.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostRouteComponent } from './post-route/post-route.component';
import { UserRouteComponent } from './user-route/user-route.component';

const routes: Routes = [
  {path: '', redirectTo: 'album-list', pathMatch: 'full'},
  {path:'album-list',component:AlbumListComponent},
  {path:'user-list',component:UserListComponent},
  {path:'comment-list',component:CommentListComponent},
  {path:'post-list',component:PostListComponent},
  {path:'photo-list',component:PhotoListComponent},
  {path:'user/:id',component:UserRouteComponent},
  {path:'post/:id',component:PostRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
