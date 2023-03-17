#!/bin/bash
# BEGIN-SNIPPET update-vehicle
$   curl https://api.fleetbase.io/v1/vehicles/vehicle_15X3o8o \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d plate_number="SBA 1234A" \
        -X PUT
# END-SNIPPET