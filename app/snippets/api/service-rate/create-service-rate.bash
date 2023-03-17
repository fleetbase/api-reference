#!/bin/bash
# BEGIN-SNIPPET create-service-rate
$   curl https://api.fleetbase.io/v1/service-rates \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d service_name="Standard Taxi" \
        -d service_type="passenger" \
        -d rate_calculation_method="algo" \
        -d currency="SGD" \
        -d base_fee=100 \
        -d algorithm="(({distance}/1000)*55)+(({time}/60)*33)" \
        -d has_peak_hours_fee=true \
        -d peak_hours_calculation_method="flat" \
        -d peak_hours_flat_fee=200 \
        -d peak_hours_start="17:00" \
        -d peak_hours_end="19:00" 
# END-SNIPPET