<?php
// BEGIN-SNIPPET retrieve-place
use Fleetbase\Sdk\Fleetbase;

$fleetbase = new Fleetbase('<api key>');

$place = $fleetbase->places->findRecord('<place id>');
// END-SNIPPET