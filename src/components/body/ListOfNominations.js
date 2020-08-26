import React, { Component } from 'react';
import Movie from './Movie';
const pp = [
	{
		Title: 'Cars',
		Year: '2006',
		imdbID: 'tt0317219',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg'
	},
	{
		Title: 'Cars 2',
		Year: '2011',
		imdbID: 'tt1216475',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_SX300.jpg'
	},
	{
		Title: 'Cars 3',
		Year: '2017',
		imdbID: 'tt3606752',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@._V1_SX300.jpg'
	},
	{
		Title: 'Riding in Cars with Boys',
		Year: '2001',
		imdbID: 'tt0200027',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BOGM5MzU5NTgtMmJjZC00Y2E2LThhZGQtMGE5YzUxZTgwZDdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
	},
	{
		Title: 'Used Cars',
		Year: '1980',
		imdbID: 'tt0081698',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMTAzOTBhNTAtMzY5MS00YjcwLWIzYWItNWI1NzQ4YjcxY2E2XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg'
	},
	{
		Title: 'Comedians in Cars Getting Coffee',
		Year: '2012–',
		imdbID: 'tt2314952',
		Type: 'series',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMWExMDNjMGYtNDcwYy00ZmY4LTliY2UtYWNiNjY4NDY2MTBkXkEyXkFqcGdeQXVyMzU3MTc5OTE@._V1_SX300.jpg'
	},
	{
		Title: 'Cars of the Revolution',
		Year: '2008',
		imdbID: 'tt1282139',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BZmE3NGIzZmEtZTBhNi00ZDYzLWJmZjItZWRmMmYzYzVmNTViXkEyXkFqcGdeQXVyMjExNjgyMTc@._V1_SX300.jpg'
	},
	{
		Title: 'Old Men in New Cars: In China They Eat Dogs II',
		Year: '2002',
		imdbID: 'tt0246692',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTY0MDc5NzYxOV5BMl5BanBnXkFtZTcwNjAxODAzMQ@@._V1_SX300.jpg'
	},
	{
		Title: 'The Cars That Ate Paris',
		Year: '1974',
		imdbID: 'tt0071282',
		Type: 'movie',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BNTVmOTdmYTktY2JmNi00YzJmLWJjNGItMjNmOWM1MDM0MjZiL2ltYWdlXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_SX300.jpg'
	},
	{
		Title: 'Counting Cars',
		Year: '2012–',
		imdbID: 'tt2338096',
		Type: 'series',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BOGYxOTM2MjgtZWFlOC00Y2UwLWI3MzItMWMyNjY0YWY5NmEyXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg'
	}
];
export default class AddNomations extends Component {
	render() {
		return (
			<div className="main-m">
				<h2>My Nomations</h2>
				<div className="movie-con">
					{pp.map((d) => <Movie data={d} onButton={() => {}} buttonText="Remove Nomination" color="#f00" />)}
				</div>
			</div>
		);
	}
}