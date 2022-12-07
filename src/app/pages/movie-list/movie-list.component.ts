import { Component, Input, OnInit } from '@angular/core';
import Movie from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  displayedColumns: string[] = [
    'nome',
    'comentario',
    'assistido',
    'editar',
    'data',
  ];
  @Input() listaFilmes: Movie[] = [];
  ngOnInit() {
    this.listaFilmes = [
      {
        nome: 'O lar das crianças peculiares',
        assistido: true,
        comentario: 'Peculiar',
        data: new Date(),
        editar: true,
      },
      {
        nome: 'O Troll da Montanha',
        assistido: true,
        comentario: 'Elevado',
        data: new Date(),
        editar: true,
      },
      {
        nome: 'Gênio Indomável',
        assistido: false,
        comentario: '',
        data: new Date(),
        editar: false,
      },
    ];
  }
}
//ideia: sempre que o usuário der click no assistido vai pra uma tela de edição que ele coloca
//comentário e um data nova. Verificar como fazer isso.
