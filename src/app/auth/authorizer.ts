import * as jwt from 'jsonwebtoken'
import buildIAMPolicy, { CustomPolicyDocument } from './lib/util'
import { CustomAuthorizerEvent } from 'aws-lambda';
import { customResponses } from '../util/customResponses';
import { AwsResponse } from './response';

const JWT_KEY = process.env.JWT_KEY


export const handler = async (event: CustomAuthorizerEvent): Promise< AwsResponse | CustomPolicyDocument> => {
    const token = event.authorizationToken;
    if(token) {
        try {
            const { userId } = jwt.verify(token, JWT_KEY!) as jwt.JwtPayload
    
            const policyDocument = buildIAMPolicy({
                userId,
                effect: 'Allow',
                resource: event.methodArn,
                // You may add an context here later
            })
            return policyDocument
    
        } catch(error) {
            return customResponses["UNAUTHORIZED"]
        }
    } else {
        return customResponses["NOT_FOUND_TOKEN"]
    }
}