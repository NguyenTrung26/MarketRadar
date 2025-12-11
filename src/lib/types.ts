import { z } from "zod";
import { TrendSchema, SourceSchema, MarketReportSchema, TrendCategorySchema } from "@/lib/schemas";

export type TrendCategory = z.infer<typeof TrendCategorySchema>;
export type Trend = z.infer<typeof TrendSchema>;
export type Source = z.infer<typeof SourceSchema>;
export type MarketReport = z.infer<typeof MarketReportSchema>;
