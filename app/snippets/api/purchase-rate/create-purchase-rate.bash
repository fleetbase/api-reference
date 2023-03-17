#!/bin/bash
# BEGIN-SNIPPET create-purchase-rate
$   curl https://api.fleetbase.io/v1/purchase-rates \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d name="Charlotte, NC"
# END-SNIPPET