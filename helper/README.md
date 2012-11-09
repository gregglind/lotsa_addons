Helper, an Addon To Help Set Up Environments
==============================================

Usage:

```
# just run another addon
cfx run --addon some/addon.xpi

# turn on some useful prefs and debugging
cfx run --addon some/addon.xpi --static-args '{"debugpages": true, "debugprefs": true}'

# turn on some useful prefs and debugging
cfx run --addon some/addon.xpi --static-args '{"debugpages": true, "debugprefs": true}'

# add your own urls, loaded in 'tabs.open'
cfx run --addon some/addon.xpi --static-args '{"urls": ["http://url1", "http://url2"]}'

# add prefs, with the prefs minilang
cfx run --static-args '{"prefs": {"+addon.pref": 'value', "some.rooted.pref": "value2"}}'
```


Prefs Minilang
----------------

`+` -> in the addon's pref space  (

All others are "rooted".


