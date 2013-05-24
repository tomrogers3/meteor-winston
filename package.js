Package.describe({
  summary: 'Winston (wrapped for Meteor). A multi-transport async logging library for node.js. "CHILL WINSTON! ... I put it in the logs."'
});

Npm.depends({
    "winston": "0.7.1"
});

Package.on_use(function (api, where) {
  api.add_files('winston.js', 'server');
});
