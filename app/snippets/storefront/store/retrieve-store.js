// BEGIN-SNIPPET retrieve-store
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('public_key');
fleetbase.stores.findRecord('store_id');
// END-SNIPPET
