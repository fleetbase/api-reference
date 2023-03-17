#!/bin/bash
# BEGIN-SNIPPET create-vendor
$   curl https://api.fleetbase.io/v1/vendors \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d name="Example Hauling Co." \
        -d email="info@exhaulingco.sg" \
        -d address="place_j32MdB" \
        -d phone_number="8888-8888" \
        -d phone_country_code="65" \
        -d type="haulier"
# END-SNIPPET