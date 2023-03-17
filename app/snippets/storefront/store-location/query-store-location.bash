#!/bin/bash
# BEGIN-SNIPPET query-store-location
$   curl https://api.fleetbase.io/v1/store-locations/search?query=pike&ll=47.6075618,-122.3414496 \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -G 
# END-SNIPPET
