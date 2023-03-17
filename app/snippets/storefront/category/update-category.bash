#!/bin/bash
# BEGIN-SNIPPET update-category
$   curl https://api.fleetbase.io/v1/categorys/category_zEd9Vz5 \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN:
        -d building="Seattle Space Needle"
        -X PUT
# END-SNIPPET