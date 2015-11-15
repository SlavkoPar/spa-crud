import 'jquery';
import ko from 'knockout';
import komapping from 'knockout-mapping';
import knockoutValidation from 'knockout-validation';

import Person from 'models/person/person';

import template from 'text!./person-edit.html';


ko.mapping = komapping;
ko.validation = knockoutValidation;


ko.bindingHandlers.amPersonHandler = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        //$("#someButton").click(viewModel.someHandler);
    }
}

class PersonEdit {

    constructor (params) {
        var self = this;

        this.Errors = ko.observable('');
        this.busy = ko.observable(false)

        this.person = new Person(window.personData);
        this.person.displayMode("formEdit");
        this.person.setValuesBeforeEdit();
        this.person.errors = ko.validation.group(this.person/*, { deep: true, observable: false }*/);

        // it is possible to dunamically add/remove Person properties and rules to properties
        // this.person.Password = ko.observable().extend({ required: { message: "Password is required!" } });

        this.person.City.CityId.subscribe(function (cityId) {
            // do additional job on City change
        });

        this.cancelEdit = function () {
            if (this.person.isModified() && !confirm("Person is modified, are you sure?"))
                return;
            location.href = "#people";
        }

        this.onUpdated = function (ret) {
            self.busy(false);
            setTimeout(function () { location.href = "#people" }, 2000);
        }

        this.submitEdit = function () {
            if (this.person.errors().length !== 0) {
                this.person.errors.showAllMessages();
                return false;
            }
            self.busy(true);
            this.person.formUpdate(this.onUpdated);  // entityDB is PersonDB
        }

        this.someHandler = function (e) {
            // Prevent the normal behavior ...
            e.preventDefault();
        };
    }

}

      
// This runs when the component is torn down. Put here any logic necessary to clean up,
// for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
PersonEdit.prototype.dispose = function () { };
  
export  default { viewModel: PersonEdit, template: template };
