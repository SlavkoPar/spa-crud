
import 'jquery';
import 'jquery-mockjax';
import Mocker from 'mocker';
import * as globals from 'globals';

//--------
// People
//--------

$.mockjax({
    url: globals.rootUrl + 'api/people',
    responseTime: 30,
    response: function (settings) {
        this.responseText = window.mocker.getPeople(settings.data); //settings.data.name);
    }
});

$.mockjax({
    url: globals.rootUrl + 'api/people/getById',
    responseTime: 30,
    response: function (settings) {
        this.responseText = window.mocker.getPersonById(settings.data); 
    }
});

$.mockjax({
    url: globals.rootUrl + 'api/people/post',
    responseTime: 30,
    response: function (settings) {
        this.responseText = window.mocker.addPerson(settings.data); //settings.data.name);
    }
});

$.mockjax({
    url: globals.rootUrl + 'api/people/put',
    responseTime: 30,
    response: function (settings) {
        this.responseText = window.mocker.updatePerson(settings.data); //settings.data.name);
    }
});

 
//------
// City
//------

$.mockjax({
    url: globals.rootUrl + 'api/city/getItemsAsOptions',
    responseTime: 30,
    response: function (settings) {
        this.responseText = window.mocker.getCitiesForDropdown(settings.data); //settings.data.name);
    }
});


$.mockjax({
    url: globals.rootUrl + 'api/city/getById',
    responseTime: 30,
    response: function (settings) {
        this.responseText = window.mocker.getCityById(settings.data);
    }
});



// Create and export router instance
//var mockerInstance = new Mocker();
window.mocker = new Mocker();

export default Mocker; //mockerInstance;
