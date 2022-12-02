import { Component } from '@angular/core';
import Movie from './models/Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filmes: Movie[] = [
    {nome: 'a', assistido: false, comentario:''},
    {nome: 'b', assistido: false, comentario:''},
    {nome: 'c', assistido: false, comentario:''},
    {nome: 'd', assistido: false, comentario:''}
  ];
}
