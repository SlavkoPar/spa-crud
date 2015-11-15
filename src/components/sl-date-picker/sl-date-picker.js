import ko from 'knockout';
import template from 'text!./sl-date-picker.html';
import moment from 'moment';
import 'bootstrap-daterangepicker';

ko.bindingHandlers.SLDatePickerHandler = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

        var elem$ = this.myElem = $(element);
        var span$ = elem$.find('span:first');

        span$.html(moment.utc(viewModel.myDate()).format("MMM Do YY, h:mm"));

        if (!viewModel.isViewMode()) {
            elem$.daterangepicker({
                format: 'MM/DD/YYYY',
                startDate: moment(),
                endDate: moment().add(365, 'days'),
                singleDatePicker: true,
                showDropdowns: true,
                showWeekNumbers: true,
                timePicker: false,
                timePickerIncrement: 1,
                timePicker12Hour: true,
                opens: 'right',
                drops: 'up',
                buttonClasses: ['btn', 'btn-sm'],
                applyClass: 'btn-primary',
                cancelClass: 'btn-default',
                separator: ' to ',
                locale: {
                    applyLabel: 'Submit',
                    cancelLabel: 'Cancel',
                    fromLabel: 'From',
                    toLabel: 'To',
                    customRangeLabel: 'Custom',
                    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    firstDay: 1
                }
            }, function (start, end, label) {
                //console.log(start.toISOString(), end.toISOString(), label);
                viewModel.myDate(start);
                span$.html(moment.utc(viewModel.myDate()).format("MMM Do YY, h:mm"));
            });
        }
    }
}

class SLDatePicker {
    constructor(params) {
        // params
        this.isViewMode = params.isViewMode;
        this.myDate = params.date;

        this.myElem = undefined;
    }
}

// This runs when the component is torn down. Put here any logic necessary to clean up,
// for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
SLDatePicker.prototype.dispose = function() { };
  
export default { viewModel: SLDatePicker, template: template };


