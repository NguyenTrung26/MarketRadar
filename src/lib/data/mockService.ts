import { Trend, MarketReport } from "../types";

const TRENDS: Trend[] = [
    { id: "1", name: "Generative AI Video", category: "Tech", growth: 125, volume: 45000, sentiment: 0.8, timestamp: new Date().toISOString() },
    { id: "2", name: "Solid State Batteries", category: "Energy", growth: 45, volume: 12000, sentiment: 0.9, timestamp: new Date().toISOString() },
    { id: "3", name: "Hyper-Personalized Nutrition", category: "Health", growth: 60, volume: 8000, sentiment: 0.7, timestamp: new Date().toISOString() },
    { id: "4", name: "DeFi 2.0", category: "Finance", growth: -12, volume: 30000, sentiment: 0.4, timestamp: new Date().toISOString() },
    { id: "5", name: "Sustainable Fashion", category: "Consumer", growth: 22, volume: 25000, sentiment: 0.85, timestamp: new Date().toISOString() },
];

// const SOURCES: Source[] = [
//     { id: "s1", name: "TechCrunch", type: "News", reliability: 0.9 },
//     { id: "s2", name: "Reddit /r/investing", type: "Forum", reliability: 0.6 },
//     { id: "s3", name: "Bloomberg", type: "News", reliability: 0.95 },
//     { id: "s4", name: "Twitter/X", type: "Social", reliability: 0.5 },
// ];

export async function getTopTrends(query?: string, category?: string): Promise<Trend[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    let filtered = [...TRENDS];

    if (query) {
        const lowerQuery = query.toLowerCase();
        filtered = filtered.filter(t => t.name.toLowerCase().includes(lowerQuery));
    }

    if (category && category !== "All") {
        filtered = filtered.filter(t => t.category === category);
    }

    return filtered.sort((a, b) => b.growth - a.growth);
}

export async function getRecentReports(): Promise<MarketReport[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [
        {
            id: "r1",
            title: "The Rise of AI Video Generation",
            summary: "New models from Sora and others are disrupting the creative industry.",
            date: new Date().toISOString(),
            sourceId: "s1",
            relatedTrends: ["1"],
        },
        {
            id: "r2",
            title: "Battery Tech Breakthroughs 2024",
            summary: "Solid state batteries moving closer to mass production.",
            date: new Date().toISOString(),
            sourceId: "s3",
            relatedTrends: ["2"],
        },
    ];
}

export async function getReportById(id: string): Promise<MarketReport | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const reports = await getRecentReports();
    return reports.find((r) => r.id === id);
}
