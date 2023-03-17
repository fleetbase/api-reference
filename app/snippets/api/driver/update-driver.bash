#!/bin/bash
# BEGIN-SNIPPET update-driver
$   curl https://api.fleetbase.io/v1/drivers/driver_dLaJ1xv \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d phone_number="704-999-9999" \
        -d password="newpassword" \
        -d city="Raleigh, NC" \
        -X PUT
# END-SNIPPET