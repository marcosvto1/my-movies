import { Component, OnInit } from '@angular/core';
import { Movie } from './../../shared/movie.model';
import { MovieService } from './../../shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getAll().subscribe(
      (result) => {
        this.movies = result;
      },
      (error) => {}
    );
  }

}
