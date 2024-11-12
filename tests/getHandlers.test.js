// eslint-disable-next-line no-undef
const config = require('../config');

test('GET request should return status 200', async () => {
    let actualStatuscode
    try {
        // Make the GET request to the API endpoint
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        // Assert that the status code is 200
        actualStatuscode = response.status
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    expect(actualStatuscode).toBe(200);
});

test('Response body should specific warehouse name', async () => {
    let actualResponseBody
    try {
        // Make the GET request to the API endpoint
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        // Assert that the status code is 200
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }

    expect(actualResponseBody[0].name).toContain("Everything You Need");
});
