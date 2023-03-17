<?php
// BEGIN-SNIPPET query-place
use Fleetbase\Sdk\Fleetbase;

$fleetbase = new Fleetbase('<api key>');

$placesInUsa = $fleetbase->places->query(['country' => 'US']);
// END-SNIPPET