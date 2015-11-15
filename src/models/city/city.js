import ko from 'knockout';
import SLEntity from 'sl-entity';


class City extends SLentity 
{

    constructor(data) {

        super(data);

        var self = this;

        this.CityId = ko.observable(data.CityId).extend({ defaultValue: 102, required: true, minLength: 2 })
        this.Name = ko.observable(data.Name)

        this.CountryId = ko.observable(data.CountryId).extend({ defaultValue: "", required: true, minLength: 2 })
    }

}

City.prototype.primaryKey = "CityId";
City.prototype.templates = {};
City.prototype.entityDB = new CityDB();

export default City;









