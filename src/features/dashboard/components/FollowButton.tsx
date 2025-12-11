"use client";

import { toggleTrendFollow } from "@/actions/trend-actions";
import { Star } from "lucide-react";
import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";

interface FollowButtonProps {
    trendId: string;
    initialIsFollowing?: boolean;
}

export function FollowButton({ trendId, initialIsFollowing = false }: FollowButtonProps) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const [isPending, startTransition] = useTransition();

    const handleToggle = async (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigating to trend detail if we support that later
        e.stopPropagation();

        const newState = !isFollowing;
        setIsFollowing(newState); // Optimistic update

        startTransition(async () => {
            try {
                await toggleTrendFollow(trendId);
            } catch (error) {
                // Revert on error
                setIsFollowing(!newState);
                console.error("Failed to toggle follow", error);
            }
        });
    };

    return (
        <button
            onClick={handleToggle}
            disabled={isPending}
            className={cn(
                "p-2 rounded-full transition-all duration-300",
                isFollowing
                    ? "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
            )}
            title={isFollowing ? "Unfollow Trend" : "Follow Trend"}
        >
            <Star className={cn("h-4 w-4", isFollowing && "fill-current")} />
        </button>
    );
}
