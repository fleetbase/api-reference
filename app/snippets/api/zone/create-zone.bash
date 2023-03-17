#!/bin/bash
# BEGIN-SNIPPET create-zone
$   curl https://api.fleetbase.io/v1/zones \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d name="Center of Singapore" \
        -d service_area="sa_0LBO5vd" \
        -d boundary[latitude]=1.352083 \
        -d boundary[longitude]=103.819836 \
        -d boundary[radius]=5000
# END-SNIPPET