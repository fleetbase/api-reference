<?php
// BEGIN-SNIPPET delete-place
use Fleetbase\Sdk\Fleetbase;

$fleetbase = new Fleetbase('<api key>');

$deletedPlace = $fleetbase->places->destroyRecord('<place id>');
// END-SNIPPET