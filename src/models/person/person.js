import ko from 'knockout';
import SLEntity from 'sl-entity';
import CityAsForeign from 'models/city/CityAsForeign';
import PersonDB from 'models/person/person-db';


class Person extends SLEntity {

    // set default values when data is {}
    constructor(data) {
        super(data);

        this.PersonId = ko.observable(data.PersonId || 0)

        this.Name = ko.observable(data.Name || "").extend({ required: true, minLength: 2 })

        this.IsOnTwitter = ko.observable(data.IsOnTwitter === undefined ? false : data.IsOnTwitter)
        this.TwitterName = ko.observable(data.TwitterName || "")

        this.City = new CityAsForeign(data.City || {})

        this.NumOfPosts = ko.observable(data.NumOfPosts || 0)
        this.LastLogin = ko.observable(data.LastLogin ? new Date(data.LastLogin) : new Date())
    }

}

Person.prototype.primaryKey = "PersonId";
Person.prototype.allFieldsExceptDB = [];

Person.prototype.templates = {};

Person.prototype.entityDB = new PersonDB();

export default Person;









