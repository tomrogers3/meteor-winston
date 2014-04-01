Meteor-Winston
===============
A wrapper around the [winston](https://github.com/flatiron/winston.git) logging package for use with [Meteorite](https://github.com/oortcloud/meteorite) on top of [Meteor](http://meteor.com).

## Install
```sh
mrt add winston
```

## Usage

The winston logging module is exposed as:

```js
var winston = Winston;
```

See the winston [documentation](https://github.com/flatiron/winston.git) for more details.

## Transports:

* [meteor-winston-loggly] (https://github.com/tomrogers3/meteor-winston-loggly)
* [meteor-winston-airbrake] (https://github.com/tomrogers3/meteor-winston-airbrake)

## Other logging packages

* [meteor-trail](https://github.com/tbknl/meteor-trail) and [meteor-trail-monitor](https://github.com/tbknl/meteor-trail-monitor) - native Meteor pluggable logging module, with console monitoring of logs from server and multiple clients
