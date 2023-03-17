#!/bin/bash
# BEGIN-SNIPPET delete-order
$   curl https://api.fleetbase.io/v1/orders/place_zEd9Vz5 \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -X DELETE
# END-SNIPPET
