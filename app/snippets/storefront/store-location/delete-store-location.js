// BEGIN-SNIPPET delete-store-location
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('public_key');
fleetbase.store - locations.destroyRecord('store-location_id');
// END-SNIPPET
