// BEGIN-SNIPPET retrieve-purchase-rate
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<api key>');
fleetbase.places.findRecord('place_id');
// END-SNIPPET
