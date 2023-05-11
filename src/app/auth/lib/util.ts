export default (userId, effect, resource) => {
    const policy = {
        principalId: userId,
        policyDocument: {
            Statement: [{
                Action: 'execute-api:Invoke',
                // Allow | Deny
                Effect: effect,
                // arn
                Resource: resource
            }]
        }
    }
    return policy
}
