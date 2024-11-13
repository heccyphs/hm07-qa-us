const config = require('../config');

test('GET request should return status 200', async () => {
    let actualStatuscode
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        actualStatuscode = response.status
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    expect(actualStatuscode).toBe(200);
});

test('Response body should specific warehouse name', async () => {
    let actualResponseBody
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }

    expect(actualResponseBody[0].name).toContain("Everything You Need");
});
