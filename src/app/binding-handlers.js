
    import ko from 'knockout';
    import moment from 'moment';

    ko.bindingHandlers.bindingHandlerDate = {

        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = valueAccessor();
            //var mode = ko.unwrap(value);
            //var mode = viewModel.displayMode();
            var inRow = allBindings.get("inRow");
            var readOnly = allBindings.get("readOnly");
            var colName = $(element).data("field");
            var markup = "<div class='input-group'>";


            //var value_utc = new Date(value().getUTCFullYear(), value().getUTCMonth(), value().getUTCDate(), value().getUTCHours(), value().getUTCMinutes(), value().getUTCSeconds())
            //var dateStr = (value().getUTCMonth() + 1) + "/" + value().getUTCDate() + "/" + value().getUTCFullYear() + " " + value().getUTCHours() + ":" + value().getUTCMinutes() + ":" + value().getUTCSeconds();
            var dateStr = value() == null ? "" : moment.utc(value()).format("MMM Do YY, h:mm");

            //value().toUTCString()
            //var str = (pickDate ? dateStr : value_utc.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"));
            var isViewMode = viewModel.isViewMode();
            if (isViewMode || readOnly) {
                markup += "<span>" + dateStr + "</span>"
            }
            else {
            }
            markup += "</div>";

            $(element)
                .html(markup)
        }
    }


    ko.bindingHandlers.bindingHandlerEdit = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = valueAccessor();
            var colName = $(element).data("field"); 
            $("<a href='#' style='white-space: nowrap;' data-bind='click:function(vm, e) { $parent.editEntity(vm, e) }'><i class='fa fa-edit'></i></a>")
                .appendTo(element)
        }
    };


    ko.bindingHandlers.bindingHandlerEditInline = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            // here isViewMode needs computed
            var colName = $(element).data("field"); //allBindings.get('colName');
            var markup = 
                "<!-- ko if: actionsEnabled -->\
                    <a href='#' style='white-space: nowrap;' class='edit-entity' data-bind='click: rowEditClick, visible: isViewMode'>\
                        <i class='fa fa-edit'></i>\
                    </a>\
                    <a href='#' style='white-space: nowrap;' class='edit-entity' data-bind='click: rowUpdate, visible: !isViewMode()'>\
                        Save <i class='fa fa-save'></i>\
                    </a>\
                    <a href='#' style='white-space: nowrap;display:block;' class='edit-entity' data-bind='click: rowEditCancel, visible: !isViewMode()'>\
                        Cancel <i class='fa fa-times'></i>\
                    </a>\
                <!-- /ko -->\
                <!-- ko ifnot: actionsEnabled -->\
                        <i class='fa fa-edit'></i>\
                <!-- /ko -->";
            $(markup).appendTo(element)
        },
      
    };


    ko.bindingHandlers.bindingHandlerMoney = {

        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var mode = viewModel.displayMode()
            var inRow = allBindings.get("inRow");
            var isViewMode = vewModel.isViewMode();

            if (!isViewMode) {
                var colName = $(element).data("field");
                $(element).html("<input style='text-align:right' class='form-control' data-field='" + colName
                + "' data-bind=\"value: " + colName + "().toFixed(2), valueUpdate:'keyup'\">")
            }
        },

        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = ko.utils.unwrapObservable(valueAccessor())
            var mode = viewModel.displayMode()
            var inRow = allBindings.get("inRow");
            var isViewMode = viewModel.isViewMode();

            if (isViewMode) {
                var tokens = value.toFixed(2).replace('-', '').split('.');
                var s = '$' + $.map(tokens[0].split('').reverse(), function (elm, i) {
                    return [(i % 3 === 0 && i > 0 ? ',' : ''), elm];
                }).reverse().join('') + '.' + tokens[1];
                var markup = value < 0 ? '-' + s : s;
                $(element).html(markup)
            }
        }
    }


    ko.bindingHandlers.bindingHandlerCheckbox = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

            var markup =
               "<!-- ko ifnot: isViewMode -->\
                    <input type='checkbox' data-bind='checked: " + $(element).data("field") + "' />\
                <!-- /ko -->\
                <!-- ko if: isViewMode -->\
                    <!-- ko if: " + $(element).data("field") + " -->\
                        <i class='fa fa-check'></i>\
                    <!-- /ko -->\
                    <!-- ko if: !" + $(element).data("field") + "() -->\
                        jok\
                    <!-- /ko -->\
                <!-- /ko -->";
            $(markup).appendTo(element);

            //var value = valueAccessor();
            //var mode = viewModel.displayMode()
            //var inRow = allBindings.get("inRow");
        }
    }

