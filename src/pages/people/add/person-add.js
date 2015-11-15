import 'jquery';
import ko from 'knockout';
import komapping from 'knockout-mapping';
import knockoutValidation from 'knockout-validation';
import "pnotify"

import Person from 'models/person/person';
import template from 'text!./person-add.html';

ko.bindingHandlers.amPersonHandler = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        //$("#someButton").click(viewModel.someHandler);
    }
}

class PersonAdd {

    constructor(params) {
        var self = this;

        this.Errors = ko.observable('');
        this.busy = ko.observable(false)

        this.person = new Person({}); // with default values
        this.person.City.CityId('CAPTION'); // instead of default value
        this.person.displayMode("formEdit");

        var beforeAdd = ko.mapping.toJSON(this.person, { 'ignore': this.person.ignoreProperties })

        this.person.errors = ko.validation.group(this.person/*, { deep: true, observable: false }*/);

        // it is possible to dunamically add/remove Person properties 
        // and add/remove rules to properties
        // this.person.Password = ko.observable().extend({ required: { message: "Password is required!" } });

        // Cities for dropdown
        //this.cityDB = new CityDB();

        this.person.City.CityId.subscribe(function (cityId) {
            // do additional job on City change
        });

        this.cancelAdd = function () {
            location.href = "#people";
        }

        this.onAdded = function (ret) {
            self.busy(false);
            setTimeout(function () { location.href = "#people" }, 1000);
        }

        this.submitAdd = function () {
            if (this.person.errors().length !== 0) {
                this.person.errors.showAllMessages();
                return false;
            }
            self.busy(true);
            this.person.formAdd(this.onAdded);  // entityDB is PersonDB
        }

        this.someHandler = function (e) {
            // Prevent the normal behavior since we opened the dialog
            e.preventDefault();
        };
    }
}


// This runs when the component is torn down. Put here any logic necessary to clean up,
// for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
PersonAdd.prototype.dispose = function () {
};

export default { viewModel: PersonAdd, template: template };
