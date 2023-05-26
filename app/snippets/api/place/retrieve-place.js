// BEGIN-SNIPPET retrieve-place
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<api key>');

fleetbase.places.findRecord('<place id>').then((place) => {
    console.log(place);
});
// END-SNIPPET
