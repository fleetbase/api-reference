export default function queryStringFromPojo(params = {}) {
    return Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&');
}
