var Twitter = require('twitter');

var q = encodeURIComponent('りんな');

var result = {};

var resultCount = 0;

function get(params) {

	var client;
	var num = Math.floor( Math.random() * 6);
	switch(num) {
		case 0:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;
		case 1:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;
		case 2:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;
		case 3:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;
		case 4:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;

		default:
			client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
	}


	client.get('search/tweets.json' + params, {}, function(error, tweets, response) {
		var n = 99999999999999999999;
		if (!error) {
			var data = tweets.statuses;
			if (data.length <= 0) {
				console.log('OK! ' + resultCount + '件');
				return;
			}
			for (var i = 0; i < data.length; i++) {
				resultCount++;
				console.log(data[i].created_at + '\t' + data[i].id_str + '\t' + data[i].user.screen_name + '\t' + data[i].user.id_str + '\t' + data[i].user.followers_count + '\t' + data[i].user.friends_count + '\t' + data[i].user.statuses_count + '\thttps://twitter.com/' + data[i].user.screen_name + '/status/' + data[i].id_str);
				result[data[i].user.screen_name] = data[i].user.followers_count;
			n = data[i].id_str;
			}
			var nextParams = tweets.search_metadata.next_results;
			if (!nextParams) {
				console.log('OK ' + resultCount + '件');
				return;
			}
			get(nextParams);
		} else {
			console.log('error');
			console.log(tweets);
		}
	});
}

console.log('created_at	id\tscreen_name\tuser_id\tfollowers_count\tfriends_count\tstatuses_count');
var params = "?q=" + q + "&count=100";
get(params);
