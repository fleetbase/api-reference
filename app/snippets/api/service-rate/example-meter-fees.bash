#!/bin/bash
# BEGIN-SNIPPET example-meter-fees
# curl example
-d km_fees[0][distance]=1000
-d km_fees[0][fee]=100
-d km_fees[1][distance]=2000
-d km_fees[1][fee]=200
-d km_fees[2][distance]=3000
-d km_fees[2][fee]=300
# array example
[
    [
        'distance' => 1000,
        'fee' => 100
    ],
    [
        'distance' => 2000,
        'fee' => 200
    ],
    [
        'distance' => 3000,
        'fee' => 300
    ]
]
# END-SNIPPET