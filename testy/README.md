Short instructions for coverage:
===================================

```
npm install esprima-moz
npm install coverjs
npm install escodegen
```

You will need to patch your Addon-SDK, or follow   `gregglind/addon-sdk#coverage`

   https://github.com/mozilla/addon-sdk/pull/624


Then, from inside the addon directory you are interested in testing:

1.  symlink in the CoverJS directory  (because it is used by `coveritall.js`)
2.

    ```
    rm -rf fakey && mkdir -p fakey/lib && cp -r data doc test package.json fakey && coverjs -o fakey/lib `find lib -name '*js'`
    ( cfx test --pkgdir=fakey  ) 2>&1 | less
    node coveritall.js  > coverage.html
    open coverage.html
    ```


