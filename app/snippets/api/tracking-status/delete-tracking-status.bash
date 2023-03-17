#!/bin/bash
# BEGIN-SNIPPET delete-tracking-status
$   curl https://api.fleetbase.io/v1/tracking-statuses/place_zEd9Vz5 \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -X DELETE
# END-SNIPPET
