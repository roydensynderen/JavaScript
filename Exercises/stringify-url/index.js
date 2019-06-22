const stringifyUrl = (url, query) => {
    if (Object.keys(query).length === 0) return url;
    let queryString = '?';
    for (key in query) {
        queryString += `${key}=${query[key]}&`
    }
    queryString = queryString.slice(0, queryString.length - 1);
    const output = url + queryString;
}

const objectizzexify = url => {
    //pick apart query params into key value pairs of object
    const queryString = url.substring(url.indexOf('?') + 1)
    const splitQuery = queryString.split('&');
    const splitByEqual = splitQuery.map(str => str.split('='));
    const queryObject = splitByEqual.reduce((query, subArr) => {
        query[subArr[0]] = subArr[1];
        return query;
    }, {});
    return queryObject;
}

module.exports = { stringifyUrl, objectizzexify };