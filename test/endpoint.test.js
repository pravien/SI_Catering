const fetch = require('node-fetch');


test('get all caterings', async () => {

    return fetch('http://localhost:3000/catering')
        .then(res => {
            return res.json()
        })
        .then(res => {
            return expect(res.length).toBe(5);
        })
        .catch(e => {
            console.log(e)
        })
});


test('check if catering on "JustasStreet" exists', async () => {

    return fetch('http://localhost:3000/catering')
        .then(res => {
            return res.json()
        })
        .then(res => {
            return expect(res[0].address).toBe("JustasStreet");
        })
        .catch(e => {
            console.log(e)
        })
});