import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from './../services/movie.service';
import { Movie } from './../movies/movies.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  // movie:Movie = {
  //   title: '',
  //   duration: 0,
  //   genero: '',
  //   description: ''
  // };

  movie:Movie;

  constructor(private activatedRoute:ActivatedRoute, private movieService:MovieService) {
    this.activatedRoute.params.subscribe(p => {
      console.log('Recibi el param: idMovie = '+p.idMovie);
      this.getMovie(p.idMovie)
    })
  }

  ngOnInit(): void {
  }

  getMovie(id:number) {
    this.movieService.getMovieById(id).then(response => {
      console.log('Movie: ', response);
      this.movie = response;
    }).catch(err => {
      console.error('No se completo la transferencia');
    })
  }

}
