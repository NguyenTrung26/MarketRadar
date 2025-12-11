import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/components/ReactQueryProvider";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
    title: "Market Radar | Intelligence Platform",
    description: "Real-time market trend analysis and aggregation.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(outfit.variable, inter.variable, "font-body bg-background text-foreground antialiased min-h-screen")}>
                <ReactQueryProvider>
                    {children}
                </ReactQueryProvider>
            </body>
        </html>
    );
}
