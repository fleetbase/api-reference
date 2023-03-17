#!/bin/bash
# BEGIN-SNIPPET create-tracking-status
$   curl https://api.fleetbase.io/v1/tracking-statuses \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d name="Charlotte, NC"
# END-SNIPPET