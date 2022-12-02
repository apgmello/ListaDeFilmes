import { Component, Input } from '@angular/core';
import Movie from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  displayedColumns: string[] = ['nome', 'comentario','assistido'];
  @Input() listaFilmes: Movie[] = [
    // {nome: 'd', assistido: true, comentario:''},
    // {nome: 'e', assistido: true, comentario:''},
  ];
}