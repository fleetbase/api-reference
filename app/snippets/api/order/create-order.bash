#!/bin/bash
# BEGIN-SNIPPET create-order
$   curl https://api.fleetbase.io/v1/orders \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d payload="payload_pLMpOz9" \
        -d dispatch=false 
# END-SNIPPET