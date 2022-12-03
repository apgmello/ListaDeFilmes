import { Component, Input, OnInit } from '@angular/core';
import Movie from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  displayedColumns: string[] = ['nome', 'comentario','assistido'];
  @Input() listaFilmes: Movie[] = [];
  ngOnInit() {
    //this.listaFilmes = [
      //{nome: 'd', assistido: true, comentario:''},
      //{nome: 'e', assistido: true, comentario:''},
    //];
  }
}