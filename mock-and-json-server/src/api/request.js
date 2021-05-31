const mockDomain = 'http://localhost:8888';
function request(url, body) {
    url = process.env.REACT_APP_MOCK ? `${mockDomain}${url}` : url;
    return fetch(url, body)
        .then(res => res.json());
}

export default request;