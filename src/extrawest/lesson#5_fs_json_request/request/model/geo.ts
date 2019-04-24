import {JsonProperty} from 'json-object-mapper';

export default class Geo {

    @JsonProperty( {name: 'lat', type: String} )
    public lat: string = undefined;

    @JsonProperty( {name: 'lng', type: String} )
    public lng: string = undefined;

}
