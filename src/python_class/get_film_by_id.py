# -*- coding: utf-8 -*-
import json, sys
import tmdbsimple as tmdb
tmdb.API_KEY = '5f8e77cffdf729efe6cb173496ddf5f1'

if len(sys.argv) > 1:
	pilihan = sys.argv[1]
	movie = tmdb.Movies(pilihan)
	data = movie.info()
	print( json.dumps(data) )
else:
	err = {'error': 'Movie ID tidak ditemukan', 'code': 404}
	print( json.dumps(err) )