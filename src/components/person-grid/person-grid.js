import ko from 'knockout';
import template from 'text!./person-grid.html';
import 'bootstrap-select';

import Person from 'models/person/person';


ko.bindingHandlers.PersonGridHandler = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    }
}

class PersonGrid {

    constructor(params) {
        var self = this;

        this.Person = Person;
        this.pageSize = ko.observable(params.pageSize);

        // At the person-grid page we have 2 knockout components
        //      <sl-grid  params="MyGrid: grid, MyPager: pager, ...">
        //      <sl-pager params="MyGrid: grid, MyPager: pager">
        // These variables are used inside of grid and pager
        // here, they get values when grid and pager get instantiated, 
        // and grid and pager get notified about instantiation of each other
        this.pager = ko.observable();
        this.grid = ko.observable();
        this.grid.subscribe(function (grid) {
            // now we have the grid component instantiated
            //grid.myContainer = self; 
        })

        // visit  http://jsfiddle.net/SlavkoPar/066kzxjz/
        // regarding how child knockout components get connected
        this.columns = [
                    { fieldName: 'PersonId', header: 'Id', width: '50px', align: 'right' },
                    { fieldName: 'Name', header: 'Name', width: 'auto' }, // markup: "<sl-text-input params='observable:Name'/>" },
                    { fieldName: 'IsOnTwitter', header: 'Twitter', width: '70px', align: 'center', presentation: 'bindingHandlerCheckbox' },
                    { fieldName: 'City', header: 'City', width: '140px', markup: "<bs-select params='entityAsForeign:City, isViewMode:isViewMode' />" },
                    { fieldName: 'NumOfPosts', header: '#Posts', width: '70px', align: 'center' },
                    { fieldName: 'LastLogin', header: 'Last Login', width: '180px', align: 'center', markup: "<sl-date-picker params='date:LastLogin, isViewMode:isViewMode'/>" }, //presentation: 'bindingHandlerDate' },
                    { fieldName: '', header: 'Inline', width: '80px', presentation: 'bindingHandlerEditInline', sortable: false, align: 'center' },
                    { fieldName: '', header: 'Edit', width: '60px', presentation: 'bindingHandlerEdit', sortable: false, align: 'center' }
        ];
        

        // needed for City <bs-select> component in drop-down filter above grid
        this.filter = new Person({});
        this.filter.displayMode("formEdit");
        this.filter.City.CityId('CAPTION'); // instead of default value, CAPTION is additional drop-down option, with caption text 'ALL' or 'Nothing selected'
        this.filter.City.CityId.subscribe(function (newValue) {
            self.grid()
                .Filter({ CityId: newValue == 'CAPTION' ? 0 : newValue })
                .getItems();
        });


        this.pageSize.subscribe(function (newValue) {
            self.grid().getItems(1 /*page*/, newValue /*pageSize*/);
        });


        // Add
        this.addNew = function () {
            location.hash = '#person-add';
        }

        // Edit
        this.editEntity = function (vm, e) {
            //window.personData = ko.mapping.toJS(vm, { 'ignore': vm.ignoreProperties })
            var personDB = Person.prototype.entityDB;
            personDB.getById(vm.PersonId(), function (data) {
                window.personData = data;
                location.hash = '#person-edit/' + vm.PersonId();
            })
        }

        this.afterRenderTR = function (elems, ent) {
            $.each(elems, function (i, el) {
                if (el.tagName == "TR") {
                }
            });
        }

    }
}

export default { viewModel: PersonGrid, template: template };
