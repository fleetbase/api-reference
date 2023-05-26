// BEGIN-SNIPPET delete-place
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<api key>');

fleetbase.places.destroyRecord('<place id>').then((deletedPlace) => {
    console.log(deletedPlace);
});
// END-SNIPPET
