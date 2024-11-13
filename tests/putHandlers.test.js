const config = require('../config');

const requestBody = {
    "ok": true,
    "_time_spent": 9,
    "_ip": "::ffff:127.0.0.1",
    "_req_id": "ed69cd32-b828-485a-a629-e9c68f8c51eb"
}

test('Response should be 200', async () => {
    let actualStatusCode;
    try 
    {
        const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
            method: 'DELETE',
        });
        actualStatusCode = response.status
    } catch (error) {
        console.error(error);
    }
    expect(actualStatusCode).toBe(200);
});

test('Response Body should change the price of the product', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/3`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
  
		actualResponseBody = await response.json();
	} catch (error) {
		console.error('Error:', error);
	}
	expect(actualResponseBody).toEqual({
	  "ok": true
	})
  });
