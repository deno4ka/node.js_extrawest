import {JsonProperty} from 'json-object-mapper';
import Geo from './geo';

export default class Address {

    @JsonProperty( {name: 'street', type: String} )
    public street: string;

    @JsonProperty( {name: 'suite', type: String} )
    public suite: string;

    @JsonProperty( {name: 'city', type: String} )
    public city: string;

    @JsonProperty( {name: 'zipcode', type: String} )
    public zipcode: string;

    @JsonProperty( {name: 'geo', type: Object} )
    public geo: Geo;

}
