Coverage in Your Addon-SDK Addon!
===================================

1. Get `CoverJS`, `esprima`, `escodegen`

```
npm install git://github.com/gregglind/CoverJS.git#moz  # installs moz-aware dependencies [1]

```

2.  Patch your Addon-SDK (https://github.com/mozilla/addon-sdk/pull/624), or follow   `git://github.com/gregglind/addon-sdk#coverage`


3. From the addon directory you are interested in testing.

    ```
    rm -rf fakey && mkdir -p fakey/lib && cp -r data doc test package.json fakey && \
    ./node_modules/coverjs-moz/bin/coverjs -o fakey/lib \
    --escodegen-options '{"moz":{"starlessGenerator":true,"parenthesizedComprehensionBlock":true}}' \
    `find lib -name '*js'`
    ( cfx test --pkgdir=fakey  ) 2>&1 | less
    node coveritall.js  > coverage.html
    open coverage.html
    ```


Details and big ideas / checks of correctness
-----------------------------------------------

1. ```fakey/lib/*js``` should have calls to `__$coverObject` in them.
2. `cfx run` should run normally.
3. `cfx test --pkgdir=fakey ` should make a `~/test@....coverage.json` file.


Notes:
--------

[1]
```
npm install git://github.com/gregglind/esprima.git#moz  # moz aware esprima
npm install git://github.com/Constellation/escodegen.git  # mainline allows moz stuff.  npm version
```
