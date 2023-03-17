<?php
// BEGIN-SNIPPET query-service-quote
use Fleetbase\Sdk\Fleetbase;

$fleetbase = new Fleetbase('<api key>');

$quotes = $fleetbase->serviceQuotes->findAll();
// END-SNIPPET