import { MovieInputsComponent } from './pages/movie-inputs/movie-inputs.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: MovieListComponent },
  { path: 'create', component: MovieInputsComponent },
  //cd{ path:"", redirectTo: "list", pathMatch: "full" },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
