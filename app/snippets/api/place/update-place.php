<?php
// BEGIN-SNIPPET update-place
use Fleetbase\Sdk\Fleetbase;

$fleetbase = new Fleetbase('<api key>');

$updatedPlace = $fleetbase->places->updateRecord('<place id>', ['building' => 'Seattle Space Needle']);
// END-SNIPPET