Package.describe({
  summary: 'A multi-transport async logging library for node.js. "CHILL WINSTON! ... I put it in the logs."'
});

Npm.depends({
    "winston": "0.7.1"
});

Package.on_use(function (api, where){
	if(api.export){
    	api.use('winston', 'server');
     	api.export('Winston', 'server');
  	}
  	api.add_files('winston.js', 'server');
});