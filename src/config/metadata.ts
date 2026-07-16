import type { Metadata } from "next";

export const metaData: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL as string),

    title: "N. Rashidi - Portfolio",
    description:
        "Senior Full Stack Engineer specializing in TypeScript, React, Go, Node.js, and Python. 15+ years shipping production software across telecom, API management, and enterprise software.",

    keywords:
        "Naeem Okpara Rashidi, Senior Full Stack Engineer, TypeScript, React, Go, Node.js, Python, GraphQL, PostgreSQL, Redis, AWS, LangChain, RAG, Remote Developer, Oakland, Portfolio",

    authors: [
        { name: "Naeem Okpara Rashidi", url: process.env.NEXT_PUBLIC_CURRENT_SITE_URL },
    ],

    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "N. Rashidi - Portfolio",
        url: process.env.NEXT_PUBLIC_CURRENT_SITE_URL,
        title: "Naeem Okpara Rashidi - Senior Full Stack Engineer",
        description:
            "Senior Full Stack Engineer specializing in TypeScript, React, Go, Node.js, and Python. 15+ years shipping production software across telecom, API management, and enterprise software.",
    },

    twitter: {
        card: "summary_large_image",
        title: "Naeem Okpara Rashidi - Senior Full Stack Engineer",
        description:
            "Senior Full Stack Engineer specializing in TypeScript, React, Go, Node.js, and Python. Based in Oakland, CA.",
    },

    robots:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",

    alternates: {
        canonical: process.env.NEXT_PUBLIC_CURRENT_SITE_URL,
    },
};
