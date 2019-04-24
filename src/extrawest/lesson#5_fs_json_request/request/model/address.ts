import {JsonProperty} from 'json-object-mapper';
import Geo from './geo';

export default class Address {

    @JsonProperty( {name: 'street', type: String} )
    public street: string = undefined;

    @JsonProperty( {name: 'suite', type: String} )
    public suite: string = undefined;

    @JsonProperty( {name: 'city', type: String} )
    public city: string = undefined;

    @JsonProperty( {name: 'zipcode', type: String} )
    public zipcode: string = undefined;

    @JsonProperty( {name: 'geo', type: Geo} )
    public geo: Geo = undefined;

}
