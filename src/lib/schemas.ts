import { z } from "zod";

export const TrendCategorySchema = z.enum(["Tech", "Finance", "Health", "Consumer", "Energy"]);

export const TrendSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(2, "Name must be at least 2 characters"),
    category: TrendCategorySchema,
    growth: z.number(),
    volume: z.number().int().nonnegative(),
    sentiment: z.number().min(0).max(1),
    timestamp: z.string().datetime().optional(),
});

export const SourceSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(2),
    type: z.enum(["News", "Social", "Report", "Forum"]),
    reliability: z.number().min(0).max(1),
    logoUrl: z.string().url().optional(),
});

export const MarketReportSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(5),
    summary: z.string().min(10),
    date: z.string().datetime(),
    url: z.string().url().optional(),
    sourceId: z.string(),
    relatedTrends: z.array(z.string()),
});

export type Trend = z.infer<typeof TrendSchema>;
export type Source = z.infer<typeof SourceSchema>;
export type MarketReport = z.infer<typeof MarketReportSchema>;
