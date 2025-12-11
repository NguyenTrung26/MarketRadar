import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding...')

    // Cleanup
    await prisma.report.deleteMany()
    await prisma.trend.deleteMany()
    await prisma.source.deleteMany()

    // Sources
    const techCrunch = await prisma.source.create({
        data: { name: "TechCrunch", type: "News", reliability: 0.9 }
    })
    const reddit = await prisma.source.create({
        data: { name: "Reddit /r/investing", type: "Forum", reliability: 0.6 }
    })
    const bloomberg = await prisma.source.create({
        data: { name: "Bloomberg", type: "News", reliability: 0.95 }
    })
    const twitter = await prisma.source.create({
        data: { name: "Twitter/X", type: "Social", reliability: 0.5 }
    })

    // Trends
    const t1 = await prisma.trend.create({
        data: { name: "Generative AI Video", category: "Tech", growth: 125, volume: 45000, sentiment: 0.8 }
    })
    const t2 = await prisma.trend.create({
        data: { name: "Solid State Batteries", category: "Energy", growth: 45, volume: 12000, sentiment: 0.9 }
    })
    const t3 = await prisma.trend.create({
        data: { name: "Hyper-Personalized Nutrition", category: "Health", growth: 60, volume: 8000, sentiment: 0.7 }
    })
    const t4 = await prisma.trend.create({
        data: { name: "DeFi 2.0", category: "Finance", growth: -12, volume: 30000, sentiment: 0.4 }
    })
    const t5 = await prisma.trend.create({
        data: { name: "Sustainable Fashion", category: "Consumer", growth: 22, volume: 25000, sentiment: 0.85 }
    })

    // Reports
    await prisma.report.create({
        data: {
            title: "The Rise of AI Video Generation",
            summary: "New models from Sora and others are disrupting the creative industry.",
            sourceId: techCrunch.id,
            trends: { connect: [{ id: t1.id }] }
        }
    })

    await prisma.report.create({
        data: {
            title: "Battery Tech Breakthroughs 2024",
            summary: "Solid state batteries moving closer to mass production.",
            sourceId: bloomberg.id,
            trends: { connect: [{ id: t2.id }] }
        }
    })

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
