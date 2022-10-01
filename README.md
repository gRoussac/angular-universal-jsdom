Reproduction of issue of https://github.com/jsdom/jsdom/issues/3042

```
ERROR in ./node_modules/jsdom/lib/jsdom/utils.js
Module not found: Error: Can't resolve 'canvas' in '/node_modules/jsdom/lib/jsdom'
```

```
const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf( /*#__PURE__*/_wrapAsyncGenerator(function* () {})).prototype);
                                      ^
TypeError: Cannot convert undefined or null to object
```

```
Error [ERR_REQUIRE_ESM]: require() of ES Module /srv/www/angular-universal-jsdom/node_modules/@angular/common/fesm2015/common.mjs not supported.
```

Related issues 

https://github.com/angular/angular-cli/issues/21735

https://github.com/Automattic/node-canvas/issues/1314

https://github.com/kkomelin/isomorphic-dompurify/pull/36


## Development server

Run `npm run dev:ssr` for a dev server. 


Compiled successfully.
error pops up at /angular-universal-jsdom/server/main.js:145316

