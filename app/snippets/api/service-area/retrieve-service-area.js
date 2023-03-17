// BEGIN-SNIPPET retrieve-service-area
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<api key>');
fleetbase.serviceAreas.findRecord({});
// END-SNIPPET
