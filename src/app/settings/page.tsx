import { AlertSettingsForm } from "@/features/settings/components/AlertSettingsForm";
import { ArrowLeft, Settings } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
    return (
        <main className="min-h-screen bg-background p-6 lg:p-12 relative overflow-hidden font-body">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

            <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Dashboard
                    </Link>

                    <h1 className="flex items-center gap-3 text-3xl md:text-4xl font-bold tracking-tight text-white font-heading">
                        <Settings className="h-8 w-8 text-white/50" />
                        Settings
                    </h1>
                </div>

                <AlertSettingsForm />
            </div>
        </main>
    );
}
