#!/bin/bash
# BEGIN-SNIPPET create-payload
$   curl https://api.fleetbase.io/v1/payloads \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d pickup="place_426O6Yp" \
        -d dropoff="place_dKNlNaX" \
        -d type="food_delivery" \
        -d cod_amount=1600 \
        -d cod_currency="SGD", \
        -d meta[restaurant_name]="Dian Xiao Er" \
        -d meta[restaurant_category]="Chinese Food"
# END-SNIPPET