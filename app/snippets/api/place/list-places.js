// BEGIN-SNIPPET list-place
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<api key>');

fleetbase.places.findAll().then((places) => {
    places.forEach((place) => {
        console.log(place);
    });
});
// END-SNIPPET
