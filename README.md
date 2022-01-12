# lockject

Locked Javascript objects.

### Why?
No real reason. This is pretty much useless. I just thought it would be an interesting concept to make and so I am.

### Usage
Install
```sh
npm install @arynthernium/lockject
```
Import (ES6)/Require (CommonJS)
```js
// ES6
import { Locked } from '@arynthernium/lockject';
// CommonJS
const { Locked } = require('@arynthernium/lockject');
```
Usage
```js
const o = new Locked({ five: 5 }, 'key');
// returns a new instance of Locked containing the object

o.unlock('key');
// returns { five: 5 }
```

Both arguments can be anything of any type, and will be stored in private class fields.