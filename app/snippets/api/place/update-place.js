// BEGIN-SNIPPET update-place
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<api key>');

fleetbase.places
    .updateRecord('<place id>', {
        building: 'Seattle Space Needle',
    })
    .then((place) => {
        console.log(place);
    });
// END-SNIPPET
