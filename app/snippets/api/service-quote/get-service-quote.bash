#!/bin/bash
# BEGIN-SNIPPET get-service-quotes
$   curl https://api.fleetbase.io/v1/service-quotes?service_type=passenger&pickup=1.3506853,103.87199110000006&dropoff=1.3621663,103.88450490000002 \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN:
# END-SNIPPET