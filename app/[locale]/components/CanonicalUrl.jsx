'use client'
import { usePathname, useRouter } from "next/navigation";
import Head from "next/head";

export default function CanonicalURL() {
    const router = useRouter();
    const pathname = usePathname();
    const { locale } = router;
  
    const canonicalUrl = `https://www.gtcfx.com${locale}`;

    return (
        <>
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>
        </>
    );
}
