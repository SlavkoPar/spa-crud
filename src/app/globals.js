import 'jquery';

export var rootUrl = "http://localhost:6341/";

// Ajax helper
export function ajaxRequest(type, url, data, dataType) {
    var options = {
        dataType: dataType || "json",
        contentType: "application/json",
        cache: false,
        type: type,
        data: data ? (data.toJson ? data.toJson() : data) : null  // JSON.stringify(data)
    };
    return $.ajax(url, options);
}
