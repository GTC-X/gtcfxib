import { fetchAPI } from "@/app/[locale]/components/utilities/fetch-api";
export const dynamic = "force-dynamic";

export async function GET() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.gtcfx.com";

    // Static URLs
    const staticPaths = [
        "/", "/about-us", "/why-gtc-group", "/regulations", "/global-presence",
        "/awards", "/company-news", "/careers", "/contact-us", "/free-demo-account",
        "/deposit", "/account-types", "/trade-to-win", "/forex", "/cfd-energy",
        "/shares", "/precious-metals", "/commodities", "/stock", "/indices",
        "/mt5-platform", "/mt4-platform", "/ctrader", "/download-app",
        "/latest-news", "/market-overview", "/vps-hosting-services", "/autochartist",
        "/copy-trading", "/signal-centre-tool", "/risk-warning", "/introductory-broker",
        "/economic-calendar", "/glossary-faqs", "/affiliate-program", "/liquidity-technology",
        "/restricted-countries", "/technical-tools", "/client-agreement-MU", "/client-agreement-VU",
        "/pamm-account", "/mam-account", "/privacy-policy", "/withdrawal-policy",
        "/kyc-compliance-policy", "/deposit-and-refund-policy", "/customer-due-diligence-policy",
    ];

    const staticUrls = staticPaths.map((path) => {
        return `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `;
    });

    let blogUrls = [];

    try {
        const urlParamsObject = {
            sort: { createdAt: "desc" },
            populate: {
                imageUrl: { populate: ["url"] },
                category: {
                    only: ["name"],
                },
                author: {
                    populate: "*",
                },
            },
            locale: "en",
            filters: {
                category: 6,
            },
            pagination: {
                start: 0,
                limit: 500,
            },
        };

        const options = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const blogRes = await fetchAPI("/blogs", urlParamsObject, options);

        if (!blogRes || !blogRes.data) {
            console.warn("No blog data returned from Strapi.");
        } else {
            blogUrls = blogRes.data.map((entry) => {
                const slug = entry?.attributes?.slug;
                const category = entry?.attributes?.category?.data?.attributes?.slug;

                if (!slug || !category) return "";

                return `
          <url>
            <loc>${baseUrl}/${category}/${slug}</loc>
            <lastmod>${new Date(entry?.attributes?.updatedAt || Date.now()).toISOString()}</lastmod>
          </url>
        `;
            });
        }
    } catch (error) {
        console.error("Error fetching blog URLs for sitemap:", error);
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls.join("\n")}
  ${blogUrls.join("\n")}
</urlset>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
