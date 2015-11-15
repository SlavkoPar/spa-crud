import ko from 'knockout';
import SLEntityDB from 'sl-entity-db';

class CityDB extends SLEntityDB {
    constructor(data) {
        super(data);
    }
}

CityDB.prototype.Url = {
    "get": "api/city",
    "getById": "api/city/getById"//,
    //"add": "api/city/post",
    //"update": "api/city/put"
}

export default CityDB;


