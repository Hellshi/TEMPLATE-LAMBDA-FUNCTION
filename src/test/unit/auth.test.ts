import { it, jest, expect, beforeEach, describe } from '@jest/globals'
import buildIAMPolicy from '../../app/auth/lib/util'


describe('Auth', () => {
    it('should create a policy', () => {
        const result = buildIAMPolicy({
            effect: "Allow",
            resource: ""
        })
        const expected = {"principalId":"WISHLY.PAYMENT.API","policyDocument":{"Statement":[{"Action":"execute-api:Invoke","Effect":"Allow","Resource":""}]}}

        expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
    }) 
})