import { Component, OnInit } from '@angular/core';

interface Movie {
  id: number;
  title: string;
  obs: string;
  rating: number;
  toWatchNext: boolean;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor() { }

  ngOnInit() {
  }

}
