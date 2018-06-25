# -*- coding: utf-8 -*-
import json
import tmdbsimple as tmdb
tmdb.API_KEY = '5f8e77cffdf729efe6cb173496ddf5f1'
movie = tmdb.Movies()
response = movie.popular(page='1', language='id')

send=json.dumps(response['results'])
print(send)