"use server";

import { revalidatePath } from "next/cache";

// Mock database state (in-memory, resets on server restart)
const FOLLOWED_TRENDS = new Set<string>();

export async function toggleTrendFollow(trendId: string) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (FOLLOWED_TRENDS.has(trendId)) {
        FOLLOWED_TRENDS.delete(trendId);
    } else {
        FOLLOWED_TRENDS.add(trendId);
    }

    revalidatePath("/");
    return { success: true, isFollowing: FOLLOWED_TRENDS.has(trendId) };
}

export async function checkIfFollowing(trendId: string) {
    return FOLLOWED_TRENDS.has(trendId);
}
