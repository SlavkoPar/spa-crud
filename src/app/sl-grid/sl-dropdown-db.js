/*!
 * SLGrid library v1.0.0
 * (c) Slavko Parezanin - https://github.com/SlavkoPar/SLGrid/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

import 'jquery';
import ko from 'knockout';
import * as globals from 'globals';

class SLDropdownDB {

    constructor(urls) {
        this.Url = urls;

        // these properties are shared among all the components of class like CityDB
        this.getHasBeenIssued = false;
        this.cachedItems = null;
        this.callBacks = [];
    }

}

SLDropdownDB.prototype.getItemsAsOptions = function (query, callBack) {

    var url = globals.rootUrl + this.Url['options']
    if (this.getHasBeenIssued) {
        if (this.cachedItems)
            callBack(this.cachedItems);
        else
            this.callBacks.push(callBack);
    }
    else {
        this.getHasBeenIssued = true;
        this.callBacks.push(callBack);
        var that = this;
        globals.ajaxRequest("get", url, query || "")
            .done(function (data) {
                that.cachedItems = data;
                $.each(that.callBacks, function (i, callback) {
                    callback(that.cachedItems)
                });
                that.callBacks = [];
            })
            .fail(function (a) {
                //if (callBack)
                //    callBack(a.responseText)
                alert(a.responseText)
            });
    }
}

export default SLDropdownDB;

