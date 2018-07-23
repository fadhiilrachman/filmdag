# -*- coding: utf-8 -*-
import json
import tmdbsimple as tmdb
tmdb.API_KEY = '46464f02eb02dcb9ea5b04c3f5b31958'
movie = tmdb.Movies()
response = movie.popular(page='1', language='id')

send=json.dumps(response['results'])
print(send)