# -*- coding: utf-8 -*-
import tmdbsimple as tmdb
tmdb.API_KEY = '5f8e77cffdf729efe6cb173496ddf5f1'
DISCOVER_YEAR = 2018
discover = tmdb.Discover()
response = discover.movie(page=1, year=DISCOVER_YEAR)
# for i in response['results']:
#     print(i['title'])

movie = tmdb.Movies()
response = movie.now_playing()
for i in response['results']:
    print(i['original_title'])
    print(i['poster_path'])
    print(i['overview'])
    print(i['id'])
    print(i['genre_ids'])

genres = tmdb.Genres()
response = genres.movie_list(language='id')
# for i in response['genres']:
#     print(i['name'])

genres.id = '28'
response = genres.movies(page='1',language='id')
# for i in response['results']:
#     print(i['title'])