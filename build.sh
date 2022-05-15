#!/bin/bash

set -e

rm -f gencon.zip
cd chrome
zip -r ../gencon.zip *
echo "Done! Created gencon.zip."
