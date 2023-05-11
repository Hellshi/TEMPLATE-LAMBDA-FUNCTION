export default ({ effect, resource, userId="WISHLY.PAYMENT.API" }: {
    userId?: string
    effect: string
    resource: string
}) => {
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
