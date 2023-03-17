#!/bin/bash
# BEGIN-SNIPPET update-contact
$   curl https://api.fleetbase.io/v1/contacts/contact_x8RYdpl \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d phone_number="563-999-2222" \
        -X PUT
# END-SNIPPET