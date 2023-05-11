export type CustomPolicyDocument = {
    principalId: string,
        policyDocument: {
            Statement: Statement[]
        }
}

type Statement = {
    Action: string,
    Effect: string,
    Resource: string
}

export default ({ effect, resource, userId="WISHLY.PAYMENT.API"}: {
    userId?: string
    effect: string
    resource: string
}): CustomPolicyDocument => {
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
