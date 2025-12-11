"use client";

import { useEffect, useState } from "react";
import { Signal, Radio } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface FeedItem {
    id: string;
    text: string;
    source: string;
    time: string;
    type: "news" | "social" | "alert";
}

const MOCK_FEED: FeedItem[] = [
    { id: "1", text: "Spike in 'clean energy' mentions on Reddit", source: "Social", time: "2m ago", type: "social" },
    { id: "2", text: "New report: AI regulation framework proposed", source: "News", time: "5m ago", type: "news" },
    { id: "3", text: "Volume alert: 'Solid State Batteries' +450%", source: "System", time: "12m ago", type: "alert" },
];

export function RealTimeFeed() {
    const [items, setItems] = useState<FeedItem[]>(MOCK_FEED);

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulate new item
            const newItem: FeedItem = {
                id: Date.now().toString(),
                text: `New market signal detected (#${Math.floor(Math.random() * 1000)})`,
                source: Math.random() > 0.5 ? "Social" : "News",
                time: "Just now",
                type: Math.random() > 0.8 ? "alert" : "news",
            };
            setItems((prev) => [newItem, ...prev.slice(0, 4)]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full rounded-xl border border-white/10 bg-black/40 backdrop-blur-md flex flex-col">
            <div className="flex items-center justify-between border-b border-white/5 p-4">
                <div className="flex items-center gap-2">
                    <Radio className="h-5 w-5 text-accent animate-pulse" />
                    <h2 className="font-semibold text-white">Live Signals</h2>
                </div>
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping" />
            </div>

            <div className="flex-1 overflow-hidden p-4">
                <div className="space-y-4">
                    <AnimatePresence initial={false}>
                        {items.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                className={cn(
                                    "relative overflow-hidden rounded-lg border p-3 transition-colors",
                                    item.type === "alert"
                                        ? "border-accent/50 bg-accent/5"
                                        : "border-white/5 bg-white/5"
                                )}
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <span className={cn("text-[10px] uppercase font-bold tracking-wider rounded px-1.5 py-0.5",
                                        item.type === "alert" ? "bg-accent text-white" : "bg-primary/20 text-primary"
                                    )}>
                                        {item.source}
                                    </span>
                                    <span className="text-xs text-muted-foreground">{item.time}</span>
                                </div>
                                <p className="text-sm text-foreground/90 leading-tight">{item.text}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
