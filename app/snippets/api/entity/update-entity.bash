#!/bin/bash
# BEGIN-SNIPPET update-entity
$   curl https://api.fleetbase.io/v1/entities/entity_kGLLo1Y \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d declared_value=20000 \
        -d currency="USD" \
        -X PUT
# END-SNIPPET