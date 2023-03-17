#!/bin/bash
# BEGIN-SNIPPET delete-tracking-number
$   curl https://api.fleetbase.io/v1/tracking-numbers/place_zEd9Vz5 \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -X DELETE
# END-SNIPPET
