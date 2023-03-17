#!/bin/bash
# BEGIN-SNIPPET update-order
$   curl https://api.fleetbase.io/v1/orders/sa_877R5B9 \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN:
        -d status="inactive"
        -X PUT
# END-SNIPPET