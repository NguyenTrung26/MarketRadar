"use client";

import { useState } from "react";
import { Bell, Mail, Save, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export function AlertSettingsForm() {
    const [emailEnabled, setEmailEnabled] = useState(true);
    const [pushEnabled, setPushEnabled] = useState(false);
    const [growthThreshold, setGrowthThreshold] = useState(20);
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async () => {
        setIsSaving(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsSaving(false);
        alert("Settings saved successfully!");
    };

    return (
        <div className="rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Bell className="h-6 w-6" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-white">Alert Preferences</h2>
                    <p className="text-sm text-muted-foreground">Configure how and when you want to be notified.</p>
                </div>
            </div>

            <div className="space-y-8">
                {/* Notification Channels */}
                <div className="space-y-4">
                    <h3 className="text-sm font-medium text-white uppercase tracking-wider">Notification Channels</h3>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/5">
                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-muted-foreground" />
                            <div>
                                <p className="font-medium text-white">Email Notifications</p>
                                <p className="text-xs text-muted-foreground">Receive daily digests and major alerts.</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setEmailEnabled(!emailEnabled)}
                            className={cn(
                                "w-12 h-6 rounded-full transition-colors relative",
                                emailEnabled ? "bg-primary" : "bg-white/10"
                            )}
                        >
                            <span className={cn(
                                "absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform",
                                emailEnabled ? "translate-x-6" : "translate-x-0"
                            )} />
                        </button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/5">
                        <div className="flex items-center gap-3">
                            <Bell className="h-5 w-5 text-muted-foreground" />
                            <div>
                                <p className="font-medium text-white">Push Notifications</p>
                                <p className="text-xs text-muted-foreground">Real-time browser notifications.</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setPushEnabled(!pushEnabled)}
                            className={cn(
                                "w-12 h-6 rounded-full transition-colors relative",
                                pushEnabled ? "bg-primary" : "bg-white/10"
                            )}
                        >
                            <span className={cn(
                                "absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform",
                                pushEnabled ? "translate-x-6" : "translate-x-0"
                            )} />
                        </button>
                    </div>
                </div>

                {/* Thresholds */}
                <div className="space-y-4">
                    <h3 className="text-sm font-medium text-white uppercase tracking-wider">Alert Thresholds</h3>

                    <div className="p-4 rounded-lg border border-white/5 bg-white/5">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="h-5 w-5 text-yellow-500" />
                            <div>
                                <p className="font-medium text-white">Growth Spike Alert</p>
                                <p className="text-xs text-muted-foreground">Notify when a trend grows by more than this %.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min="5"
                                max="100"
                                step="5"
                                value={growthThreshold}
                                onChange={(e) => setGrowthThreshold(Number(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <span className="min-w-[4rem] text-right font-mono text-primary font-bold">{growthThreshold}%</span>
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <div className="pt-4 border-t border-white/10">
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSaving ? "Saving..." : (
                            <>
                                <Save className="h-4 w-4" />
                                Save Preferences
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
