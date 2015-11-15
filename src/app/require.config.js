// require.js looks for the following global when initializing
var require = {
    baseUrl: ".",
    paths: {
        "bootstrap":            "bower_modules/components-bootstrap/js/bootstrap.min",
        "crossroads":           "bower_modules/crossroads/dist/crossroads.min",
        "hasher":               "bower_modules/hasher/dist/js/hasher.min",
        "jquery":               "bower_modules/jquery/dist/jquery",
        "knockout":             "bower_modules/knockout/dist/knockout",
        "knockout-mapping":     "bower_modules/knockout-mapping/knockout.mapping",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
        "knockout-validation": "bower_modules/knockout-validation/dist/knockout.validation",
        "ko-extenders": "app/ko-extenders",
        "binding-handlers": "app/binding-handlers",
        "signals":              "bower_modules/js-signals/dist/signals.min",
        "text": "bower_modules/requirejs-text/text",
        "moment": "bower_modules/moment/moment",
        "pnotify": "bower_modules/pnotify/src/pnotify.core",
        "bootstrap-select": "bower_modules/bootstrap-select/dist/js/bootstrap-select",
        "bootstrap-daterangepicker": "bower_modules/bootstrap-daterangepicker/daterangepicker",
        "scroller": "app/scroller/jquery.fs.scroller",
        "jquery-mockjax": "bower_modules/jquery-mockjax/dist/jquery.mockjax.min",
        "mocker": "mocker/mocker",
        "mocker-stub": "mocker/mocker-stub",
        "globals": "app/globals",

        "sl-entity": "app/sl-grid/sl-entity",
        "sl-entity-db": "app/sl-grid/sl-entity-db",
        "sl-dropdown-db": "app/sl-grid/sl-dropdown-db"

    },
    shim: {
        "bootstrap": { deps: ["jquery"] },
        "knockout": { deps: ["jquery"] },
        "jquery-mockjax": { deps: ["jquery"] }
    }
};
