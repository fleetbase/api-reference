#!/bin/bash
# BEGIN-SNIPPET create-product
$   curl https://api.fleetbase.io/v1/products \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d name="Space Needle" \
        -d latitude="47.6204232" \
        -d longitude="-122.34935530000001"
# END-SNIPPET