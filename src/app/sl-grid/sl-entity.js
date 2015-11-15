/*!
 * SLGrid library v1.0.0
 * (c) Slavko Parezanin - https://github.com/SlavkoPar/SLGrid/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

import 'jquery';
import ko from 'knockout';
import 'knockout-projections'
import 'knockout-validation';
import komapping from 'knockout-mapping';
import PNotify from 'pnotify';

ko.mapping = komapping;

PNotify.prototype.options.styling = "bootstrap3";
PNotify.prototype.options.styling = "fontawesome";


class SLEntity {

    constructor(config) {
        this.fields = [];
        this.valuesBeforeEdit = "";

        // We can't use the prototype chain on observable/computed instances, 
        // since they are Function instances, and Function can't be overridden in general.
        this.busy = ko.observable(false);
        this.actionsEnabled = ko.observable(true);
        this.displayMode = ko.observable("rowView");

        this.isViewMode = ko.computed(function () {
            return this.displayMode() == "rowView" || this.displayMode() == "formView"
        }, this)

    }

}

SLEntity.prototype.ignoreProperties = ["displayMode", "ignoreProperties", "primaryKey", "templates", "whichTemplate", "isViewMode",
    "currentValues", "toJson", "Items", "errors",
    "valuesBeforeEdit", "actionsEnabled", "busy", "allFieldsExceptDB", "entityDB", "isModified", "rowEditClick", "rowEditCancel",
    "onUpdated", "formUpdate", "rowUpdate", "onAdded", "formAdd", "constructor"];


SLEntity.prototype.toJson = function () {
    return ko.mapping.toJSON(this, { 'ignore': this.ignoreProperties })
}


SLEntity.prototype.whichTemplate = function () {
    return this.templates[this.displayMode()];
}


SLEntity.prototype.currentValues = function () {
    if (this.allFieldsExceptDB.length == 0) {
        var that = this;
        var noneDB = [];
        $.each(this, function (propertyName, field) {
            if ($.inArray(propertyName, that.ignoreProperties) == -1) {
                var field = that[propertyName];
                if (!ko.isWritableObservable(field)) // && typeof field.defaultValue == "undefined")
                    noneDB.push(propertyName);
            }
        });
        this.allFieldsExceptDB = this.ignoreProperties.concat(noneDB);
    }
    return ko.mapping.toJSON(this, { 'ignore': this.allFieldsExceptDB });
}

SLEntity.prototype.setValuesBeforeEdit = function () {
    this.valuesBeforeEdit = this.currentValues();
}


SLEntity.prototype.isModified = function () {
    return this.valuesBeforeEdit != this.currentValues();
}

SLEntity.prototype.rowEditClick = function () {
    this.valuesBeforeEdit = this.currentValues();
    this.errors = ko.validation.group(this /*, { deep: true, observable: false }*/);
    this.displayMode("rowEdit");
}

SLEntity.prototype.rowEditCancel = function () {
    if (this.isModified() && !confirm("Row is modified, are you sure?"))
        return;
    this.displayMode("rowView");
}

SLEntity.prototype.onUpdated = function (data) {
    this.busy(false);
    if (typeof data == "string") {
        new PNotify({ title: "Info", text: ret });
    }
    else {
        new PNotify({ title: "Info", text: "Updated" });
    }
}

SLEntity.prototype.formUpdate = function (callBack) {
    this.entityDB.update(this, function () {
        this.onUpdated();
        callBack();
    });
}

SLEntity.prototype.rowUpdate = function () {
    if (this.errors().length !== 0) {
        this.errors.showAllMessages();
        return false;
    }
    this.busy(true);
    this.entityDB.update(this, function () {
        this.onUpdated();
        this.displayMode("rowView");
    });
}

SLEntity.prototype.onAdded = function (data) {
    this.busy(false);
    if (typeof data == "string") {
        new PNotify({ title: "Info", text: ret });
    }
    else {
        new PNotify({ title: "Info", text: "Added" });
    }
}

SLEntity.prototype.formAdd = function (callBack) {
    var that = this;
    this.entityDB.add(this, function (data) {
        that.onAdded();
        callBack(data);
    });
}

export default SLEntity;


