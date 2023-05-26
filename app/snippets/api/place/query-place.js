// BEGIN-SNIPPET query-place
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<api key>');

fleetbase.places.query({ country: 'US' }).then((places) => {
    places.forEach((place) => {
        console.log(place);
    });
});
// END-SNIPPET
