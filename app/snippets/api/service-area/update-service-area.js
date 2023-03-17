// BEGIN-SNIPPET update-service-area
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<api key>');
const place = fleetbase.places.updateRecord('place_id', {});

place.update({});
// END-SNIPPET
