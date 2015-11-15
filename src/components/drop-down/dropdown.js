import ko from 'knockout';
import template from 'text!./dropdown.html';


class Dropdown {

    constructor(params) {
        var self = this;

        this.Items = ko.observableArray(params.Items);
        this.captionText = params.captionText;
        this.Code = params.Code;
        this.Label = params.Label;

        this.myId = ko.observable("DropDown" + (new Date()).getTime());

        this.selected = ko.observable(); // Nothing selected by default // ko.observableArray([]);

        // we set Code to be selected
        params.Code.subscribe(function (newValue) {
            self.selectOption();
        })

        // user selected item in DropDwon 
        this.onChanged = function (vm) {
            self.selected(vm);
            self.Code(vm.Code)
        };

        // call
        if (params.captionText) {
            // caption value is 'CAPTION' for all the drop-downs
            var caption = { Code: 'CAPTION', Name: params.captionText }
            that.Items.unshift(caption);
        }

        this.selectOption();
    }

}

Dropdown.prototype.selectOption = function () {
    //added for account case (account data is recieved first, then countries list, so we need to set current advertiser code)
    var vm;
    var currentCode = this.Code();
    if (currentCode) { // && currentCode != "CAPTION") {
        vm = ko.utils.arrayFirst(this.Items(), function (item) {
            return item.Code == currentCode;
        });
    }
    else {
        // select the first
        if (this.Items().length > 0)
            vm = this.Items()[0];
    }

    if (vm) {
        this.selected(vm);
        this.Code(vm.Code)
    }
}


// This runs when the component is torn down. Put here any logic necessary to clean up,
// for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
Dropdown.prototype.dispose = function () { };

export default { viewModel: Dropdown, template: template };
