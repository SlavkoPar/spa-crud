import ko from 'knockout';
import SLDropDownDB from 'sl-dropdown-db';

class CityAsForeign {

    constructor(data) {
        var self = this;

        this.CityId = ko.observable(data.CityId || 102).extend({ required: true, minLength: 2 })
        this.Name = ko.observable(data.Name || "Rome")

        this.toJson = function () { return ko.mapping.toJSON(self, { 'ignore': self.Name }) }
    }
}

// drop-down uses it
CityAsForeign.prototype.getCode = function () { return this.CityId }
CityAsForeign.prototype.getName = function () { return this.Name }

CityAsForeign.prototype.dropdownDB = new SLDropDownDB(
        { "options": "api/city/getItemsAsOptions" }
    );

// call
var query = {}
CityAsForeign.prototype.dropdownDB.getItemsAsOptions(query, function() {});


export default CityAsForeign;









