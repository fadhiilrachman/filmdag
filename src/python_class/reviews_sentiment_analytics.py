# -*- coding: utf-8 -*-
# reviews_sentiment_analytics.py
import json, sys
import tmdbsimple as tmdb
from textblob import TextBlob
tmdb.API_KEY = '46464f02eb02dcb9ea5b04c3f5b31958'

if len(sys.argv) > 1:
	data_json = {}
	pilihan = sys.argv[1]
	movie = tmdb.Movies(pilihan)
	data = movie.reviews()
	data_json['review_count'] = data['total_results']
	data_json['reviews'] = []
	sent_pos = []
	sent_neg = []
	sent_neu = []
	full_rating = 0
	for r in data['results']:
		data_json1 = {}
		data_json1['author'] = r['author']
		data_json1['content'] = r['content']
		blob = TextBlob(r['content'])
		if float(blob.sentiment.polarity) >= 0.1:
			data_json1['sentiment'] = 'positive'
			sent_pos.append(data_json1['content'])
		elif float(blob.sentiment.polarity) <= -0.1:
			data_json1['sentiment'] = 'negative'
			sent_neg.append(data_json1['content'])
		else:
			data_json1['sentiment'] = 'neutral'
			sent_neu.append(data_json1['content'])
		data_json1['polarity'] = float(blob.sentiment.polarity) * 10
		full_rating = full_rating + float(blob.sentiment.polarity) * 10
		data_json['reviews'].append( data_json1 )

	data_json['pos'] = len(sent_pos)
	data_json['neg'] = len(sent_neg)
	data_json['neu'] = len(sent_neu)
	if data['total_results'] > 0:
		data_json['full_rating'] = full_rating / int(data['total_results'])
	else:
		data_json['full_rating'] = 0
	print( json.dumps(data_json) )
else:
	err = {'error': 'Movie ID tidak ditemukan', 'code': 404}
	print( json.dumps(err) )