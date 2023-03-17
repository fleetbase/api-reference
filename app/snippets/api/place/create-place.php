<?php
// BEGIN-SNIPPET create-place
use Fleetbase\Sdk\Fleetbase;

$fleetbase = new Fleetbase('<api key>');

// using name, and location
$spaceNeedle = $fleetbase->places->create([
    'name' => 'Space Needle',
    'location' => [
        'type' => 'Point',
        'coordinates' => [47.6204232, -122.34935530000001]
    ]
]);

// using address
$spaceNeedle = $fleetbase->places->create([
    'address' => 'Space Needle, Seattle, WA',
]);
// END-SNIPPET