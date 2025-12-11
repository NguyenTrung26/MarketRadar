import { getTopTrends, getRecentReports } from "@/lib/data/mockService";
import { TrendCard } from "@/features/dashboard/components/TrendCard";
import { TrendChart } from "@/features/dashboard/components/TrendChart";
import { RecentReports } from "@/features/reports/components/RecentReports";
import { RealTimeFeed } from "@/features/dashboard/components/RealTimeFeed";
import { DashboardControls } from "@/features/dashboard/components/DashboardControls";
import { Radar, Settings } from "lucide-react";
import Link from "next/link";

export const revalidate = 0; // Disable caching for demo purposes

interface HomeProps {
    searchParams: Promise<{
        q?: string;
        category?: string;
    }>;
}

export default async function Home({ searchParams }: HomeProps) {
    const params = await searchParams;
    const trends = await getTopTrends(params.q, params.category);
    const reports = await getRecentReports();

    return (
        <main className="min-h-screen bg-background p-6 lg:p-12 relative overflow-hidden font-body">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full translate-y-1/3 pointer-events-none" />

            {/* Header */}
            <header className="relative z-10 mb-8 flex items-center justify-between">
                <div>
                    <h1 className="flex items-center gap-3 text-3xl md:text-4xl font-bold tracking-tight text-white font-heading">
                        <Radar className="h-8 w-8 text-primary" />
                        Market Radar
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                        Real-time trend analysis and market intelligence platform.
                    </p>
                </div>
                <div className="flex gap-4 items-center">
                    <Link href="/settings" className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-muted-foreground hover:text-white transition-colors" title="Settings">
                        <Settings className="h-5 w-5" />
                    </Link>

                    {/* Placeholder for future Actions */}
                    <div className="text-right hidden md:block">
                        <p className="text-xs text-muted-foreground uppercase tracking-widest">System Status</p>
                        <div className="flex items-center justify-end gap-2 text-green-400 text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Monitoring
                        </div>
                    </div>
                </div>
            </header>

            {/* Controls */}
            <DashboardControls />

            {/* KPI Cards */}
            <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                {trends.length > 0 ? (
                    trends.map((trend) => (
                        <TrendCard key={trend.id} trend={trend} />
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-muted-foreground border border-dashed border-white/10 rounded-xl">
                        No trends found matching your criteria.
                    </div>
                )}
            </section>

            {/* Main Content Grid */}
            <section className="grid gap-6 lg:grid-cols-3 mb-8 h-auto lg:h-[450px]">
                {/* Main Chart */}
                <div className="lg:col-span-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-6 flex flex-col">
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-white">Trend Volume Growth</h2>
                            <p className="text-sm text-muted-foreground">Aggregate mentions across all monitored sectors.</p>
                        </div>
                    </div>
                    <div className="flex-1 min-h-0">
                        <TrendChart />
                    </div>
                </div>

                {/* Live Feed */}
                <div className="lg:col-span-1 h-full min-h-[400px]">
                    <RealTimeFeed />
                </div>
            </section>

            {/* Reports Section */}
            <section>
                <RecentReports reports={reports} />
            </section>
        </main>
    );
}
