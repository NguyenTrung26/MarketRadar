import { Trend } from "@/lib/types";
import { ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendCardProps {
    trend: Trend;
}

export function TrendCard({ trend }: TrendCardProps) {
    const isPositive = trend.growth >= 0;

    return (
        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/10">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">{trend.category}</p>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                        {trend.name}
                    </h3>
                </div>
                <div
                    className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full border bg-opacity-20 backdrop-blur-md",
                        isPositive
                            ? "border-green-500/50 bg-green-500/10 text-green-400"
                            : "border-red-500/50 bg-red-500/10 text-red-400"
                    )}
                >
                    {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                </div>
            </div>

            <div className="mt-6 flex items-end justify-between">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold tabular-nums">
                        {isPositive ? "+" : ""}
                        {trend.growth}%
                    </span>
                    <span className="text-xs text-muted-foreground">Growth (YoY)</span>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 text-primary">
                        <Activity className="h-4 w-4" />
                        <span className="text-sm font-medium tabular-nums">{trend.volume.toLocaleString()}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Mentions</span>
                </div>
            </div>

            {/* Decorative gradient blob */}
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" />
        </div>
    );
}
