export const customResponses = {
    "UNAUTHORIZED": {
        statusCode: 401,
        body: JSON.stringify({
            message: 'Unauthorized'
        })
    },
    "NOT_FOUND_TOKEN": {
        statusCode: 401,
        body: JSON.stringify({
            message: 'Request is missing token'
        })
    }
}