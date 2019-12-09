var request = require('request');


test('get all caterings', async () => {
    
    let res  = await request.get('http://localhost:3000/catering')
    .on('response',function(response){
        console.log(response.body)
        expect(3).toBe(3);
    })
    //console.log(res)
  });