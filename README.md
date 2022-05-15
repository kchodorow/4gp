To install a dev version:

1. Download a copy of this locally.
2. Go to chrome://extensions/ and make sure "Developer mode" is enabled.
3. Press the "Load unpacked" button and select the "chrome/" directory in this repo.

To release a new version of this extension:

1. Bump the version in chrome/manifest.json.
2. Run `build.sh`.
3. Upload gencon.zip to the [developer dashboard](https://chrome.google.com/webstore/developer/dashboard).
