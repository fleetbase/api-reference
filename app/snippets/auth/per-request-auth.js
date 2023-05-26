// BEGIN-SNIPPET per-request-auth
import Fleetbase from '@fleetbase/sdk';

const place = Fleetbase.newInstance('api_key').places.findRecord('place_testid');
// END-SNIPPET
