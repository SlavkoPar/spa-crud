  import ko from 'knockout';
  import knockoutValidation from 'knockout-validation';

        ko.validation = knockoutValidation;

        ko.validation.rules['mustChoose'] = {
            validator: function (val) {
                return val !== 'CAPTION';
            },
            message: function () {
                return 'Choose ...'
            }
        };

        /*
        ko.validation.configure({
            registerExtenders: true,
            messagesOnModified: true,  // true
            insertMessages: true,
            parseInputAttributes: true,
            messageTemplate: null
        });
        */

        ko.extenders.primaryKey = function (target, option) {
            target['primaryKey'] = option;
            return target;
        };

        ko.extenders.headerText = function (target, option) {
            target['headerText'] = option;
            return target;
        };

        ko.extenders.readOnly = function (target, option) {
            target['readOnly'] = option;
            return target;
        };

        ko.extenders.options = function (target, options) {
            target['options'] = options;
            return target;
        };

        ko.extenders.sortable = function (target, option) {
            target['sortable'] = option;
            return target;
        };

        ko.extenders.width = function (target, option) {
            target['width'] = option;
            return target;
        };

        ko.extenders.defaultValue = function (target, option) {
            target['defaultValue'] = option;
            //target(option);
            return target;
        };

        ko.extenders.presentation = function (target, option) {
            target['presentation'] = option;
            return target;
        };

        ko.extenders.markup = function (target, option) {
            target['markup'] = option;
            return target;
        };

        ko.extenders.align = function (target, option) {
            target['align'] = option;
            return target;
        };

