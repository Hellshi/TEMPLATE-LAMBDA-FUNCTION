import { it, jest, expect, beforeAll, describe } from '@jest/globals'
import buildIAMPolicy from '../../app/auth/lib/util'
import { policyMock } from './mocks/policy.mock'
import { handler } from '../../app/auth/authorizer'
import * as jwt from 'jsonwebtoken'
import { AwsResponse } from '../../app/auth/response'
import { customResponses } from '../../app/util/customResponses'
import { expiredToken } from './mocks/expiredToken'


describe('Auth', () => {
    let token: string
    beforeAll(() => {
        token = jwt.sign({
            userId: "WISHLY-APP"
        }, process.env.JWT_KEY!, {
            expiresIn: '10s'
        })
    })

    it('should create a policy', () => {
        const result = buildIAMPolicy({
            effect: "Allow",
            resource: ""
        })
        const expected = policyMock

        expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
    }) 

    it('should use passed id', () => {
        const userId = "WISHLY-APP"

        const result = buildIAMPolicy({
            effect: "Allow",
            resource: "",
            userId
        })
        const expected = policyMock

        expected.principalId = userId

        expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
    }) 

    it("Should block unrecognized tokens", async () => {
        const response = await handler({ authorizationToken: "invalid", methodArn: "", type: "" }) as AwsResponse
        expect(response.body).toBe(customResponses["UNAUTHORIZED"].body)
        expect(response.statusCode).toBe(customResponses["UNAUTHORIZED"].statusCode)

    })

    it("Should return 401 on expired token", async () => {
        const response = await handler({ authorizationToken: "invalid", methodArn: "", type: "" }) as AwsResponse
        expect(response.body).toBe(customResponses["UNAUTHORIZED"].body)
        expect(response.statusCode).toBe(customResponses["UNAUTHORIZED"].statusCode)

    })

    it("Should return return policy on success", async () => {
        const response = await handler({ authorizationToken: token, methodArn: "", type: "" }) as AwsResponse
        expect(JSON.stringify(response)).toBe(JSON.stringify(policyMock))
    })

    it("Should return 401 on expired token", async () => {
        const response = await handler({ authorizationToken: expiredToken, methodArn: "", type: "" }) as AwsResponse
        expect(response.body).toBe(customResponses["UNAUTHORIZED"].body)
        expect(response.statusCode).toBe(customResponses["UNAUTHORIZED"].statusCode)
    })
})