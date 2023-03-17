#!/bin/bash
# BEGIN-SNIPPET create-driver
$   curl https://api.fleetbase.io/v1/drivers \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d name="John Doe" \
        -d email="john@example.com" \
        -d password="password" \
        -d phone_number="704-111-2222" \
        -d phone_country_code="1" \
        -d country="US" \
        -d city="Charlotte"
# END-SNIPPET