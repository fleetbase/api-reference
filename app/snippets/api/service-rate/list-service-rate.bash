#!/bin/bash
# BEGIN-SNIPPET list-service-rate
$   curl https://api.fleetbase.io/v1/service-rates?limit=3 \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -G 
# END-SNIPPET
