# -*- coding: utf-8 -*-
# reviews_sentiment_analytics.py
import json, sys
import tmdbsimple as tmdb
from textblob import TextBlob
tmdb.API_KEY = '5f8e77cffdf729efe6cb173496ddf5f1'

if len(sys.argv) > 1:
	data_json = {}
	pilihan = sys.argv[1]
	movie = tmdb.Movies(pilihan)
	data = movie.reviews()
	data_json['review_count'] = data['total_results']
	data_json['reviews'] = {}
	for r in data['results']:
		data_json1 = {}
		data_json1['author'] = r['author']
		data_json1['content'] = r['content']
		blob = TextBlob(r['content'])
		data_json1['sentiment'] = blob.sentiment
		data_json1['polarity'] = blob.sentiment.polarity
		data_json1['subjectivity'] = blob.sentiment.subjectivity
		data_json['reviews'].update( data_json1 )
	print( json.dumps(data_json) )
else:
	err = {'error': 'Movie ID tidak ditemukan', 'code': 404}
	print( json.dumps(err) )