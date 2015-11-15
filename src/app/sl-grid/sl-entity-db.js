/*!
 * SLGrid library v1.0.0
 * (c) Slavko Parezanin - https://github.com/SlavkoPar/SLGrid/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */


import 'jquery';
import ko from 'knockout';
import * as globals from 'globals';

class SLEntityDB {
    constructor(config) {
    }
}


SLEntityDB.prototype.getItems = function (query, callBack) {
    var url = globals.rootUrl + this.Url['get']
    globals.ajaxRequest("get", url, query)
        .done(function (data) {
            callBack(data)
        })
        .fail(function (a) {
            callBack(a.responseText)
        });
}

SLEntityDB.prototype.getById = function (id, callBack) {
    var url = globals.rootUrl + this.Url['getById']
    globals.ajaxRequest("get", url, { id: id })
        .done(function (data) {
            callBack(data)
        })
        .fail(function (a) {
            callBack(a.responseText)
        });
}


SLEntityDB.prototype.add = function (person, callBack) {
    var url = globals.rootUrl + this.Url['add']
    globals.ajaxRequest("post", url, person)
        .done(function (data) {
            callBack(data)
        })
        .fail(function (a) {
            callBack(a.responseText)
        });
}

SLEntityDB.prototype.update = function (person, callBack) {
    var url = globals.rootUrl + this.Url['update']
    globals.ajaxRequest("put", url, person)
        .done(function (data) {
            $.proxy(callBack, person)(data);
        })
        .fail(function (a) {
            callBack(a.responseText)
        });
}


export default SLEntityDB;

