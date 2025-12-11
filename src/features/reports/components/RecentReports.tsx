import { MarketReport } from "@/lib/types";
import { FileText, ExternalLink } from "lucide-react";
import Link from "next/link";

interface RecentReportsProps {
    reports: MarketReport[];
}

export function RecentReports({ reports }: RecentReportsProps) {
    return (
        <div className="rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
            <h2 className="mb-4 text-lg font-semibold text-white">Recent Intelligence Reports</h2>
            <div className="space-y-4">
                {reports.map((report) => (
                    <Link key={report.id} href={`/reports/${report.id}`} className="group flex items-start gap-4 rounded-lg border border-transparent p-3 transition-colors hover:border-white/5 hover:bg-white/5 block">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <FileText className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                            <h3 className="font-medium text-white group-hover:text-primary transition-colors">{report.title}</h3>
                            <p className="line-clamp-2 text-sm text-muted-foreground">
                                {report.summary}
                            </p>
                            <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground">
                                <span>{new Date(report.date).toLocaleDateString()}</span>
                                <span>•</span>
                                <span>Source ID: {report.sourceId}</span>
                            </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-muted-foreground hover:text-white">
                            <ExternalLink className="h-4 w-4" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
