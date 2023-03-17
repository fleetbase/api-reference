<?php
// BEGIN-SNIPPET per-request-auth
use Fleetbase\Sdk\Fleetbase;

$place = Fleetbase::newInstance('<api_key>')->places->findRecord('place_testid');
// END-SNIPPET