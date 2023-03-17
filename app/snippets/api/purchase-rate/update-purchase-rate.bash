#!/bin/bash
# BEGIN-SNIPPET update-purchase-rate
$   curl https://api.fleetbase.io/v1/purchase-rates/sa_877R5B9 \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN:
        -d status="inactive"
        -X PUT
# END-SNIPPET