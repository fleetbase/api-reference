// BEGIN-SNIPPET retrieve-store-location
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('public_key');
fleetbase.store - locations.findRecord('store-location_id');
// END-SNIPPET
