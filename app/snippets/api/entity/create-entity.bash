#!/bin/bash
# BEGIN-SNIPPET create-entity
$   curl https://api.fleetbase.io/v1/entities \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d type="fcl" \
        -d name="FCL #281290" \
        -d internal_id="281290" \
        -d description="20ft Full Container Load" \
        -d weight=16800 \
        -d weight_unit="kg" \
        -d length=6.1 \
        -d width=2.4 \
        -d height=2.6 \
        -d dimensions_unit="m"
# END-SNIPPET