#!/bin/bash
# BEGIN-SNIPPET update-vendor
$   curl https://api.fleetbase.io/v1/vendors/vendor_xdZvgea \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d phone_number="9999-9999" \
        -X PUT
# END-SNIPPET