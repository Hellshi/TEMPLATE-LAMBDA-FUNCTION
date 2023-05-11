import { it, jest, expect, beforeEach, describe } from '@jest/globals'
import buildIAMPolicy from '../../app/auth/lib/util'
import { policyMock } from './mocks/policy.mock'


describe('Auth', () => {
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
})