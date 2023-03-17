#!/bin/bash
# BEGIN-SNIPPET delete-service-rate
$   curl https://api.fleetbase.io/v1/service-rates/service_54K3175 \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -X DELETE
# END-SNIPPET
