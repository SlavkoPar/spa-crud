import ko from 'knockout';
import template from 'text!./sl-text-input.html';

class SLTextInput {
    constructor(params) {
        this.field = params.field;
        this.textInputClick = function (vm, e) {
            debugger
        }
    }
}

// This runs when the component is torn down. Put here any logic necessary to clean up,
// for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
SLTextInput.prototype.dispose = function() { };
  
export default { viewModel: SLTextInput, template: template };

