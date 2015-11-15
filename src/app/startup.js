
import 'jquery';
import 'bootstrap';
import ko from 'knockout';
import 'knockout-projections'
import * as router from './router';
import "mocker-stub";
import 'binding-handlers';
import 'ko-extenders';

// Components can be packaged as AMD modules, such as the following:
ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });

ko.components.register('drop-down', { require: 'components/drop-down/dropdown' });
ko.components.register('sl-date-picker', { require: 'components/sl-date-picker/sl-date-picker' });
ko.components.register('bs-select', { require: 'components/bs-select/BsSelect' });
ko.components.register('sl-text-input', { require: 'components/sl-text-input/sl-text-input' });

ko.components.register('sl-grid', { require: 'components/sl-grid/sl-grid' });
ko.components.register('sl-pager', { require: 'components/sl-pager/sl-pager' });

// pages
ko.components.register('home-page', { require: 'pages/home-page/home' });
// ... or for template-only components, you can just point to a .html file directly:
ko.components.register('about-page', {
    template: { require: 'text!pages/about-page/about.html' }
});

// people
ko.components.register('person-grid', { require: 'components/person-grid/person-grid' });
ko.components.register('people-page', { require: 'pages/people/people' });
ko.components.register('person-add',  { require: 'pages/people/add/person-add' });
ko.components.register('person-edit', { require: 'pages/people/edit/person-edit' });


// [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

// Start the application
ko.applyBindings({ route: router.currentRoute });


