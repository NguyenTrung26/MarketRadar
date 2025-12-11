"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Tech", "Finance", "Health", "Consumer", "Energy"];

export function DashboardControls() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const currentCategory = searchParams.get("category") || "All";
    const currentSearch = searchParams.get("q") || "";

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            if (value && value !== "All") {
                params.set(name, value);
            } else {
                params.delete(name);
            }
            return params.toString();
        },
        [searchParams]
    );

    const handleSearch = (term: string) => {
        startTransition(() => {
            router.push("?" + createQueryString("q", term));
        });
    };

    const handleCategory = (category: string) => {
        startTransition(() => {
            router.push("?" + createQueryString("category", category));
        });
    };

    return (
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-4 w-4 text-muted-foreground" />
                </div>
                <input
                    type="text"
                    placeholder="Search trends..."
                    className="block w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 text-sm text-white placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all backdrop-blur-sm"
                    defaultValue={currentSearch}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleCategory(cat)}
                        disabled={isPending}
                        className={cn(
                            "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                            currentCategory === cat
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
}
