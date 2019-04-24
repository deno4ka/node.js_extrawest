import {JsonProperty} from 'json-object-mapper';
import Address from './address';
import Company from './company';

export default class User {

    @JsonProperty( {name: 'id', type: Number} )
    public userId: number;

    @JsonProperty( {name: 'name', type: String} )
    public name: string;

    @JsonProperty( {name: 'username', type: String} )
    public username: string;

    @JsonProperty( {name: 'email', type: String} )
    public email: string;

    @JsonProperty( {name: 'phone', type: String})
    public phone: string;

    @JsonProperty( {name: 'website', type: String})
    public website: string;

    @JsonProperty( {name: 'company', type: Object})
    public company: Company;

    @JsonProperty( {name: 'address', type: Object})
    public address: Address;

}
