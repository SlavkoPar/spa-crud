import 'jquery';
import ko from 'knockout';

class Mocker {

    constructor(config) {
        var self = this;
        var orderByColumn;

        this.Items = [];

        var cities = [
                    { CityId: 101, Name: "London" },
                    { CityId: 102, Name: "Rome" },
                    { CityId: 103, Name: "New York" },
                    { CityId: 104, Name: "Tokio" },
                    { CityId: 105, Name: "Shanghai" },
                    { CityId: 106, Name: "Karachi" },
                    { CityId: 107, Name: "Beijing" },
                    { CityId: 108, Name: "Istanbul" },
                    { CityId: 109, Name: "Mumbai" },
                    { CityId: 110, Name: "Sao Paulo" },
                    { CityId: 111, Name: "Lahore" },
                    { CityId: 112, Name: "Delhi" },
                    { CityId: 113, Name: "Seoul" },
                    { CityId: 114, Name: "Lima" },
                    { CityId: 115, Name: "Kinshasa" },
                    { CityId: 116, Name: "Tokyo" },
                    { CityId: 117, Name: "Cairo" },
                    { CityId: 118, Name: "Mexico City" },
                    { CityId: 119, Name: "Bangkok" },
                    { CityId: 120, Name: "Tehran" },
                    { CityId: 121, Name: "Hong Kong" },
                    { CityId: 122, Name: "Baghdad" },
                    { CityId: 123, Name: "Hanoi" },
                    { CityId: 124, Name: "Rio de Janeiro" },
                    { CityId: 125, Name: "Santiago" },
                    { CityId: 126, Name: "Riyadh" },
                    { CityId: 127, Name: "Luanda" },
                    { CityId: 128, Name: "Saint Petersburg" },
                    { CityId: 129, Name: "Abidjan" },
                    { CityId: 130, Name: "Sydney" },
                    { CityId: 131, Name: "Alexandria" },
                    { CityId: 132, Name: "Kolkata" },
                    { CityId: 133, Name: "Johannesburg" },
                    { CityId: 134, Name: "Nanjing" },
                    { CityId: 135, Name: "Ankara" },
                    { CityId: 136, Name: "Melbourne" },
                    { CityId: 137, Name: "Giza" },
                    { CityId: 138, Name: "Los Angeles" },
                    { CityId: 139, Name: "Cape Town" },
                    { CityId: 140, Name: "Yokohama" },
                    { CityId: 141, Name: "Berlin" },
                    { CityId: 142, Name: "Jeddah" },
                    { CityId: 143, Name: "Durban" },
                    { CityId: 144, Name: "Hefei" },
                    { CityId: 145, Name: "Pyongyang" },
                    { CityId: 146, Name: "Madrid" },
                    { CityId: 147, Name: "Nairobi" },
                    { CityId: 148, Name: "Addis Ababa" }
        ];


        this.getCitiesForDropdown = function () {
            this.Items = cities;
            this.SortBy('Name', true)
            var arr = $.map(this.Items, function (item, i) {
                return { Code: item.CityId, Name: item.Name }
            });

            return arr;
        };


        this.getCityById = function (data) {
            return ko.utils.arrayFirst(cities, function (c) {
                return c.CityId == data.id;
            });
            return null;
        }

        //function GetCity(cityId) {
        //    return ko.utils.arrayFirst(cities, function (city) {
        //        return city.CityId == cityId;
        //    });
        //}


        var people = [
            { PersonId: 1, Name: "Claire", TwitterName: "O'Donnell", IsOnTwitter: true, City : { CityId: 104, Name: '' }, NumOfPosts: 3, LastLogin : "2015-03-10T12:30" },
            { PersonId: 2, Name: "Sven", TwitterName: "Mortensen", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin: "2015-02-10T08:30" },
            { PersonId: 3, Name: "Svetlana", TwitterName: "Omelchenko", IsOnTwitter: true, City : { CityId: 104, Name: '' }, NumOfPosts: 3, LastLogin : "2015-01-10T12:30" },
            { PersonId: 4, Name: "Cesar", TwitterName: "Garcia", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin : "2015-03-10T11:30" },
            { PersonId: 5, Name: "Debra", TwitterName: "Garcia", IsOnTwitter: false, City : { CityId: 103, Name: '' }, NumOfPosts: 3, LastLogin : "2015-03-10T12:30" },

            { PersonId: 6, Name: "Kit", TwitterName: "Carson", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin : "2015-04-10T11:30" },
            { PersonId: 7, Name: "Robert", TwitterName: "Klassen", IsOnTwitter: true, City : { CityId: 104, Name: '' }, NumOfPosts: 3, LastLogin: "2015-01-10T08:30" },
            { PersonId: 8, Name: "John", TwitterName: "Flemming", IsOnTwitter: false, City : { CityId: 103, Name: '' }, NumOfPosts: 3, LastLogin : "2015-02-10T12:30" },
            { PersonId: 9, Name: "John", TwitterName: "Doo", IsOnTwitter: true, City : { CityId: 104, Name: '' }, NumOfPosts: 3, LastLogin : "2015-07-10T11:30" },
            { PersonId: 10, Name: "Do", TwitterName: "Little", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin: "2015-09-10T08:30" },

            { PersonId: 11, Name: "Novak", TwitterName: "Djokovic", IsOnTwitter: true, City : { CityId: 104, Name: '' }, NumOfPosts: 3, LastLogin : "2015-03-10T12:30" },
            { PersonId: 12, Name: "Rafael", TwitterName: "Nadal", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin : "2015-03-10T11:30" },

            { PersonId: 13, Name: "Stan", TwitterName: "Wawrinka", IsOnTwitter: false, City : { CityId: 105, Name: '' }, NumOfPosts: 3, LastLogin: "2015-02-10T08:30" },
            { PersonId: 14, Name: "Roger", TwitterName: "Federer", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin : "2015-02-10T10:30" },
            { PersonId: 15, Name: "Andy", TwitterName: "Murray", IsOnTwitter: true, City : { CityId: 103, Name: '' }, NumOfPosts: 3, LastLogin : "2015-03-10T08:30" },
            { PersonId: 16, Name: "Tomas", TwitterName: "Berdych", IsOnTwitter: false, City : { CityId: 103, Name: '' }, NumOfPosts: 3, LastLogin: "2015-01-10T08:30" },
            { PersonId: 17, Name: "David", TwitterName: "Ferrer", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin : "2015-03-10T10:30" },
            { PersonId: 18, Name: "Juan Martin", TwitterName: "Del Potro", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin: "2015-03-10T08:30" },
            { PersonId: 19, Name: "Milos", TwitterName: "Raonic", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin : "2015-01-10T11:30" },
            { PersonId: 20, Name: "John", TwitterName: "Isner", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin: "2015-03-10T08:30" },
            { PersonId: 21, Name: "Kei", TwitterName: "Nishikori", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin : "2015-02-10T09:30" },
            { PersonId: 22, Name: "Grigor", TwitterName: "Dimitrov", IsOnTwitter: false, City : { CityId: 102, Name: '' }, NumOfPosts: 3, LastLogin: "2015-03-10T08:30" },
            { PersonId: 23, Name: "Richard", TwitterName: "Gasquet", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin: "2015-04-10T08:30" },
            { PersonId: 24, Name: "Fabio", TwitterName: "Fognini", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin : "2015-03-10T08:30" },
            { PersonId: 25, Name: "Mikhail", TwitterName: "Youzhny", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin : "2015-05-10T11:30" },
            { PersonId: 26, Name: "Jo-Wilfried", TwitterName: "Tsonga", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin : "2015-03-10T07:30" },
            { PersonId: 27, Name: "Serena", TwitterName: "Williams", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin: "2015-01-10T08:30" },
            { PersonId: 28, Name: "Na", TwitterName: "Li", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin : "2015-03-10T10:30" },
            { PersonId: 29, Name: "Simona", TwitterName: "Halep", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin: "2015-01-10T08:30" },
            { PersonId: 30, Name: "Agnieszka", TwitterName: "Radwanska", IsOnTwitter: false, City : { CityId: 102, Name: '' }, NumOfPosts: 3, LastLogin : "2015-03-10T11:30" },
            { PersonId: 31, Name: "Maria", TwitterName: "Sharapova", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin : "2015-01-10T10:30" },
            { PersonId: 32, Name: "Petra", TwitterName: "Kvitova", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin: "2015-03-10T08:30" },
            { PersonId: 33, Name: "Angelique", TwitterName: "Kerber", IsOnTwitter: false, City : { CityId: 102, Name: '' }, NumOfPosts: 3, LastLogin : "2015-01-10T10:40" },
            { PersonId: 34, Name: "Jelena", TwitterName: "Jankovic", IsOnTwitter: false, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin : "2015-01-10T11:30" },
            { PersonId: 35, Name: "Ana", TwitterName: "Ivanovic", IsOnTwitter: true, City : { CityId: 101, Name: '' }, NumOfPosts: 3, LastLogin: "2015-02-10T07:20" }
        ];

        this.getMaxPersonId = function () {
            return Math.max.apply(null, $.map(people, function (person) { return person.PersonId; })  );
        }


        this.getPersonById = function (data) {
            var person = ko.utils.arrayFirst(people, function (p) {
                return p.PersonId == data.id;
            });
            return person;
        }

        this.addPerson = function (data) {
            var person = JSON.parse(data)
            person.PersonId = this.getMaxPersonId() + 1;
            people.push(person);
            return person;
        }


        this.updatePerson = function (data) {
            var data = JSON.parse(data)
            var person = this.getPersonById({ id: data.PersonId });
            $.each(person, function (name, value) {
                if (typeof person[name] == "object") {
                    $.each(person[name], function (n, value) {
                        person[name][n] = data[name][n]
                    });
                }
                else {
                    person[name] = data[name];
                }
            });

            //person.CityName = this.getCityById({ id: person.CityId }).Name;
            return person;
        }
            

        this.getPeople = function (query) {
            var peopleFiltered = people.slice();
            if (query.Filter.CityId != undefined && query.Filter.CityId != 0) {
                peopleFiltered = $.grep(peopleFiltered, function (person) {
                    return person.City.CityId == query.Filter.CityId;
                });
            }

            this.Items = peopleFiltered;
            this.SortBy(query.OrderBy, query.Asc)

            var startIndex = query.PageSize * (query.Page - 1);
            var rowsAtPage = peopleFiltered.slice(startIndex, startIndex + query.PageSize);

            var that = this;
            $.each(rowsAtPage, function (i, person) {
                person.City.Name = that.getCityById({ id: person.City.CityId }).Name;
                //person.City.Name(that.getCityById({ id: person.CityId }).Name); // asForeign
            });
                
            return {
                nItems : people.length,
                nFiltered: peopleFiltered.length,
                rowsAtPage: rowsAtPage
            };
        };


        this.SortingString = function (a, b) {
            var aVal = a[orderByColumn].toLowerCase();
            var bVal = b[orderByColumn].toLowerCase();
            return ((aVal < bVal) ? -1 : ((aVal > bVal) ? 1 : 0));
        }

        this.SortingStringDesc = function (a, b) {
            return self.SortingString(b, a);
        }


        this.SortingNum = function (a, b) {
            var aVal = a[orderByColumn];
            var bVal = b[orderByColumn];
            return ((aVal < bVal) ? -1 : ((aVal > bVal) ? 1 : 0));
        }

        this.SortingNumDesc = function (a, b) {
            return self.SortingNum(b, a);
        }


        this.Sorting = function (a, b) {
            var aVal = a[orderByColumn].toString();
            var bVal = b[orderByColumn].toString();
            return ((aVal < bVal) ? -1 : ((aVal > bVal) ? 1 : 0));
        }

        this.SortingDesc = function (a, b) {
            return !self.Sorting(b, a); 
        }

        this.SortBy = function (column, asc) {
            orderByColumn = column;
            if (this.Items.length == 0)
                return;
            switch (typeof this.Items[0][column]) {
                case "string":
                    this.Items.sort(asc ? this.SortingString : this.SortingStringDesc);
                    break;
                case "number":
                case "date":
                    this.Items.sort(asc ? this.SortingNum : this.SortingNumDesc);
                    break;
                default:
                    this.Items.sort(asc ? this.Sorting : this.SortingDesc);
            }
        }
    }

}

export default Mocker;


