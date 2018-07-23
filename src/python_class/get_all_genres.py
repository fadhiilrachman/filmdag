# -*- coding: utf-8 -*-
import json
import tmdbsimple as tmdb
tmdb.API_KEY = '46464f02eb02dcb9ea5b04c3f5b31958'
genres = tmdb.Genres()
response = genres.movie_list(language='en')

send=json.dumps(response['genres'])
print(send)