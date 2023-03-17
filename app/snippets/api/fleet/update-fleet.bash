#!/bin/bash
# BEGIN-SNIPPET update-fleet
$   curl https://api.fleetbase.io/v1/fleets/fleet_xE4y5l \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN:
        -d name="Elite Hauliers Group"
        -X PUT
# END-SNIPPET