import * as jwt from 'jsonwebtoken'
import buildIAMPolicy from './lib/util'
import { Handler } from 'aws-lambda';

const JWT_KEY = process.env.JWT_KEY


export const handler: Handler = async (event) => {
    const token = event.authorizationToken;

    try {
        jwt.verify(token, JWT_KEY!)

        const policyDocument = buildIAMPolicy(
            "WISHLY.API",
            'Allow',
            event.methodArn,
            // You may add an context here later
        )
        return policyDocument

    } catch(error) {
        // A better error treatment is required
        console.error(error)
        return {
            statusCode: 401,
            body: JSON.stringify({
                message: 'Unauthorized'
            })
        }
    }
}