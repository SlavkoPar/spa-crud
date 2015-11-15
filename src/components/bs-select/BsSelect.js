import ko from 'knockout';
import template from 'text!./BsSelect.html';
import 'bootstrap-select'



ko.bindingHandlers.BsSelectHandler = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        viewModel.myElem = $(element);
        viewModel.myElem.selectpicker({ style: 'btn-light', size: 10 });
        viewModel.domLoaded(true)
    }
}

class BsSelect {

    constructor(params) {
        var self = this;

        this.entityAsForeign = params.entityAsForeign;
        this.isViewMode = params.isViewMode;
        this.caption = params.caption;

        this.myElem = undefined;
        this.Items = ko.observableArray([]);

        this.selected = ko.observable();
        this.selectedCode = ko.observable();
        this.selectedCode.subscribe(function (newValue) {
            // when change option, we need to update Code and Name, after inline row edit
            self.Code(newValue);
            var vm = ko.utils.arrayFirst(self.Items(), function (item) {
                return item.Code == newValue;
            });
            if (vm)
                self.Name(vm.Name);
        })

        // params
        this.Code = params.entityAsForeign.getCode();
        this.Name = params.entityAsForeign.getName();
        // we set Code to be selected
        this.Code.subscribe(function (newValue) {
            //self.selectedOption(newValue)
        })

        // bootstrap-select
        //this.selectedOption = ko.observable();
        //this.selectedOption.subscribe(function (newValue) {
        // set code
        //    self.Code(newValue)
        //}); 

        this.itemsLoaded = ko.observable(false);
        this.domLoaded = ko.observable(false);
        this.both = ko.computed(function () {
            if (this.domLoaded() && this.itemsLoaded()) {
                self.myElem.selectpicker('refresh');
                self.selectOption();
            }
        }, this)

        // call
        if (!this.isViewMode()) 
            setTimeout(function() {
                self.getItemsForDropDown();
            }, 0)
    }
}


BsSelect.prototype.selectOption = function () {
    //added for account case (account data is recieved first, then countries list, so we need to set current advertiser code)
    var vm;
    var code = this.Code(); 
    if (code) { // && code != "CAPTION") {
        vm = ko.utils.arrayFirst(this.Items(), function (item) {
            return item.Code == code;
        });
    }
    else {
        // select the first
        if (this.Items().length > 0)
            vm = this.Items()[0];
    }

    if (vm) {
        //this.selected(vm);
        this.Code(vm.Code);
        this.myElem.selectpicker('val', vm.Code);
    }
}

BsSelect.prototype.getItemsForDropDown = function () {
  
    var query = {
        Filter: "",
        OrderBy: "Name",
        Asc: true
    }

    var that = this;
    if (this.entityAsForeign) {
        //var entityDb = new this.EntityDB();
        this.entityAsForeign.dropdownDB.getItemsAsOptions({}, function (items) {
            that.Items(items);
            if (that.caption)
                that.Items.unshift({ Code: 'CAPTION', Name: that.caption });

            // moved above
            //that.myElem.selectpicker('refresh');
            //that.selectOption();
            that.itemsLoaded(true)
        });
    }
    else {
        that.Items(that.Items);
        if (that.caption)
            that.Items.unshift(that.caption);
    }
}


// This runs when the component is torn down. Put here any logic necessary to clean up,
// for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
BsSelect.prototype.dispose = function () { };

export default { viewModel: BsSelect, template: template };
