#!/bin/bash
# BEGIN-SNIPPET delete-driver-token
$   curl https://api.fleetbase.io/v1/driver-tokens/driver_token_eL72gDk \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -X DELETE
# END-SNIPPET
