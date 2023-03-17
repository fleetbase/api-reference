#!/bin/bash
# BEGIN-SNIPPET create-fleet
$   curl https://api.fleetbase.io/v1/fleets \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d name="Haulers" \
        -d task="fcl hauling"
# END-SNIPPET