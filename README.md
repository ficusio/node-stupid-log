Logging utility for Node.js/io.js. Logs to stderr.

Designed to be as simple as possible. No:

* dependencies;
* log level control;
* colors;
* log servers.

Supports:

* named logs;
* four levels: default, warn, error, TODO.


## Installation

```bash
$ npm install stupid-log
```

## Usage

Top-level log:

```js
var log = require('stupid-log');

log('obj:', { x: 1 });
// obj: { x: 1 }

log.warn('obj:', { x: 1 });
// {WARN} obj: { x: 1 }

log.error('obj:', { x: 1 });
// {ERROR} obj: { x: 1 }

log.TODO('handle this case properly');
// {TODO} handle this case properly
```

Named log:

```js
var log = require('stupid-log').for('component');

log('obj:', { x: 1 });
// [component] obj: { x: 1 }

log.warn('obj:', { x: 1 });
// [component] {WARN} obj: { x: 1 }

log.error('obj:', { x: 1 });
// [component] {ERROR} obj: { x: 1 }

log.TODO('handle this case properly');
// [component] {TODO} handle this case properly
```

As separate functions (ES6 syntax):

```js
const log = require('stupid-log').for('component'),
  {warn, error, TODO} = log;

log('obj:', { x: 1 });
warn('obj:', { x: 1 });
error('obj:', { x: 1 });
TODO('handle this case properly');
```