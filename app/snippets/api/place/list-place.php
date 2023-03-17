<?php
// BEGIN-SNIPPET list-place
use Fleetbase\Sdk\Fleetbase;

$fleetbase = new Fleetbase('<api key>');

$places = $fleetbase->places->findAll();
// END-SNIPPET