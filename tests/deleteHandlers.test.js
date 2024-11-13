const config = require('../config');

test('Status code should be 200', async () => {
    let actualStatus
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatus = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200)
});

test('Should recieve expected response from server', async () => {
    let delResponse
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		delResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(delResponse["ok"]).toBe(true);
});
