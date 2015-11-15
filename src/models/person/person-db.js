import ko from 'knockout';
import SLEntityDB from 'sl-entity-db';

        
class PersonDB extends SLEntityDB {

    constructor(data) {
        super(data);
    }
}


PersonDB.prototype.Url = {
    "get" :     "api/people",
    "getById":  "api/people/getById",
    "add":    "api/people/post",
    "update":   "api/people/put"
}

export default PersonDB;

