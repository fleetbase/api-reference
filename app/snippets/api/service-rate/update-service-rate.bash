#!/bin/bash
# BEGIN-SNIPPET update-service-rate
$   curl https://api.fleetbase.io/v1/service-rates/service_54K3175 \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d base_fee=200 \
        -X PUT
# END-SNIPPET