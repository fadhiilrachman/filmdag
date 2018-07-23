# -*- coding: utf-8 -*-
import json, sys
import tmdbsimple as tmdb
tmdb.API_KEY = '46464f02eb02dcb9ea5b04c3f5b31958'

if len(sys.argv) > 1:
	pilihan = sys.argv[1]
	movie = tmdb.Movies(pilihan)
	data = movie.info()
	print( json.dumps(data) )
else:
	err = {'error': 'Movie ID tidak ditemukan', 'code': 404}
	print( json.dumps(err) )