import { PostListComponent } from './components/post-list/post-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneraListComponent } from './components/genera-list/genera-list.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {path : "post-list", component: PostListComponent},
  {path : "genera-list", component: GeneraListComponent},
  {path: '', redirectTo: 'genera-list', pathMatch: 'full'},
  {path : "create-post", component: CreatePostComponent},
  {path : "post", component: PostComponent}

]
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
