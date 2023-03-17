#!/bin/bash
# BEGIN-SNIPPET update-zone
$   curl https://api.fleetbase.io/v1/zones/zone_z0pgDjG \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d description="This zone is just a circle in the center of Singapore" \
        -d color="#58eb8c" \
        -d stroke_color="#2fbd61" \
        -d boundary[latitude]=1.352083 \
        -d boundary[longitude]=103.819836 \
        -d boundary[radius]=500 \
        -X PUT
# END-SNIPPET