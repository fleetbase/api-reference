#!/bin/bash
# BEGIN-SNIPPET create-contact
$   curl https://api.fleetbase.io/v1/contacts \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d name="John Doe" \
        -d title="Mr" \
        -d email="john@exampleco.com" \
        -d phone_number="563-920-4264" \
        -d phone_country_code="1" \
        -d type="technician"
# END-SNIPPET