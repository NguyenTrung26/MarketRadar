import { getReportById } from "@/lib/data/mockService";
import { ArrowLeft, Calendar, FileText, Globe, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ReportPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ReportPage({ params }: ReportPageProps) {
    const { id } = await params;
    const report = await getReportById(id);

    if (!report) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background p-6 lg:p-12 relative overflow-hidden font-body">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Dashboard
                    </Link>

                    <div className="flex items-start justify-between">
                        <h1 className="text-3xl md:text-5xl font-bold text-white font-heading leading-tight mb-4">
                            {report.title}
                        </h1>
                        <button className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-muted-foreground hover:text-white transition-colors">
                            <Share2 className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-white/10 pb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {new Date(report.date).toLocaleDateString(undefined, { dateStyle: 'long' })}
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            Source: <span className="text-primary">{report.sourceId}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Analyst Report
                        </div>
                    </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    <div className="bg-white/5 rounded-xl p-6 border-l-4 border-primary mb-8 font-mono text-sm">
                        <h3 className="text-white font-bold mb-2 uppercase tracking-wider">Executive Summary</h3>
                        <p className="m-0 text-gray-300 leading-relaxed">
                            {report.summary}
                        </p>
                    </div>

                    <p className="lead">
                        This is where the full content of the report would go. In a real application, this data would be fetched from a CMS or database containing the full-text analysis, charts, and deep-dive metrics.
                    </p>

                    <h2>Key Findings</h2>
                    <ul>
                        <li>Market volume has increased significantly in the last quarter.</li>
                        <li>Sentiment analysis suggests a strong positive shift.</li>
                        <li>Competitor tracking reveals new entrants in the <strong>{report.relatedTrends.join(", ")}</strong> space.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
