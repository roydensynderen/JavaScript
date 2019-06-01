//destruct, restruct
ajaxOptions = ({
    url = 'https://some.base.url/api',
    method = 'post',
    data,
    callback,
    headers: [
        headers = 'Content-Type: text/plain',
        ...otherHeaders
    ] = []
} = {}) => {
    return {
        url,
        method,
        data,
        callback,
        headers: [
            headers,
            ...otherHeaders
        ]
    }
}

//default
let defaults = ajaxOptions()

//destructured fn
let settings = {
    url: 'https://some.other.url',
    data: 42,
    callback: function(resp) {
        // ...
    }
}

ajax( ajaxOptions( settings ))