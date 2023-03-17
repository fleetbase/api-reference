#!/bin/bash
# BEGIN-SNIPPET validate-driver-token
$   curl https://api.fleetbase.io/v1/driver-tokens/validate \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d token="67701"
# END-SNIPPET