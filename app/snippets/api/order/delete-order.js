// BEGIN-SNIPPET delete-order
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<api key>');
fleetbase.places.destroyRecord('place_id');
// END-SNIPPET
