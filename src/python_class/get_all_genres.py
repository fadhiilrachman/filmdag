# -*- coding: utf-8 -*-
import json
import tmdbsimple as tmdb
tmdb.API_KEY = '5f8e77cffdf729efe6cb173496ddf5f1'
genres = tmdb.Genres()
response = genres.movie_list(language='en')

send=json.dumps(response['genres'])
print(send)