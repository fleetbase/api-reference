#!/bin/bash
# BEGIN-SNIPPET update-payload
$   curl https://api.fleetbase.io/v1/payloads/payload_pLMpOz9 \
        -u flb_test_vZF0I6H9uEt9H6skFmH9TN: \
        -d cod_amount=2250 \
        -X PUT
# END-SNIPPET