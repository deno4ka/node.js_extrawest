import {JsonProperty} from 'json-object-mapper';
import Address from './address';
import Company from './company';

export default class User {

    @JsonProperty( {name: 'id', type: Number} )
    public userId: number = undefined;

    @JsonProperty( {name: 'name', type: String} )
    public name: string = undefined;

    @JsonProperty( {name: 'username', type: String} )
    public username: string = undefined;

    @JsonProperty( {name: 'email', type: String} )
    public email: string = undefined;

    @JsonProperty( {name: 'phone', type: String})
    public phone: string = undefined;

    @JsonProperty( {name: 'website', type: String})
    public website: string = undefined;

    @JsonProperty( {name: 'company', type: Company})
    public company: Company = undefined;

    @JsonProperty( {name: 'address', type: Address})
    public address: Address = undefined;

}
