import { describe, it, expect } from 'vitest';
import { TrendSchema } from '@/lib/schemas';

describe('Trend Validation', () => {
    it('should validate a correct trend object', () => {
        const validTrend = {
            name: "Test Trend",
            category: "Tech",
            growth: 10,
            volume: 100,
            sentiment: 0.5,
        };
        const result = TrendSchema.safeParse(validTrend);
        expect(result.success).toBe(true);
    });

    it('should reject invalid categories', () => {
        const invalidTrend = {
            name: "Invalid Trend",
            category: "Pokemon", // Invalid
            growth: 10,
            volume: 100,
            sentiment: 0.5,
        };
        const result = TrendSchema.safeParse(invalidTrend);
        expect(result.success).toBe(false);
    });
});
