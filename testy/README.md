Short instructions for coverage:
===================================

```
npm install esprima-moz
npm install coverjs
npm install escodegen

rm -rf fakey && mkdir -p fakey/lib && cp -r data doc test package.json fakey && ~/gits/CoverJS/bin/coverjs
( cfx test --pkgdir=fakey  ) 2>&1 | less
node coveritall.js  > coverage.html
open coverage.html
```


Also, you will need to patch your Addon-SDK, or follow   gregglind/addon-sdk#coverage

https://github.com/mozilla/addon-sdk/pull/624
