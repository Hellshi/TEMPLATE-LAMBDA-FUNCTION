import { it, jest, expect, beforeEach, describe } from '@jest/globals'

describe('test describe', () => {
    it('should return 4', () => {
        const a = 2
        const b = 2
        const result = a + b
        
        expect(result).toBe(4)
    }) 
})