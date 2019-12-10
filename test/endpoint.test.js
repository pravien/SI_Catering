const fetch = require('node-fetch');


test('get all caterings', async () => {

    return fetch('http://localhost:3000/')
        .then(res => {
            return res.json()
        })
        .then(res => {
            return expect(res.length).toBe(5);
        });
});


test('check if catering on "JustasStreet" exists', async () => {

    return fetch('http://localhost:3000/')
        .then(res => {
            return res.json()
        })
        .then(res => {
            return expect(res[0].address).toBe("JustasStreet");
        });
});
