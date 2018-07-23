# -*- coding: utf-8 -*-
import json
import tmdbsimple as tmdb
tmdb.API_KEY = '46464f02eb02dcb9ea5b04c3f5b31958'

genres = tmdb.Genres()
response_genre = genres.movie_list(language='en')

movie = tmdb.Movies()
response_movie = movie.now_playing()

result_genres=response_genre['genres']
result_movie=response_movie['results']

arr_mov=[]
for m in response_movie['results'][:24]:
    new_arr_mov={}
    arr=[]
    for g in m['genre_ids']:
        d_genre = [genre for genre in result_genres if genre['id'] == g]
        for d in d_genre:
            arr.append(d)
    new_arr_mov.update(m)
    new_arr_mov.update({'genre_ids': arr})
    arr_mov.append(new_arr_mov)
print( json.dumps(arr_mov) )