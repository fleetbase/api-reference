// BEGIN-SNIPPET update-store-location
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('public_key');
const storeLocation = fleetbase.storeLocations.updateRecord('store_location_id', {});

storeLocation.update({});
// END-SNIPPET
