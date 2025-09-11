import { NextResponse } from "next/server";

const SF_URL =
  "https://gtcglobaltradecapital3--partialdev.sandbox.my.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8";
const ORG_ID = "00DUF000004tBgV";

export async function POST(req) {
  try {
    const body = await req.json();
    const { first_name, email, phone, country, message, retURL, locale } =
      body || {};

    const params = new URLSearchParams();
    params.append("orgid", ORG_ID);
    params.append(
      "retURL",
      retURL || `https://www.gtcfx.com/${locale || "en"}/thank-you`
    );
    // Standard Web-to-Case fields:
    params.append("name", first_name || "");
    params.append("email", email || "");
    if (phone) params.append("phone", phone);
    params.append("origin", "Web");
    params.append("subject", "Website Contact Form");
    params.append(
      "description",
      [
        message || "",
        "",
        "---",
        locale ? `Locale: ${locale}` : null,
        country ? `Country: ${country}` : null,
      ]
        .filter(Boolean)
        .join("\n")
    );

    // If you have custom Case fields, add them here, e.g.:
    // params.append("00NXXXXXXXXXXXX", country || "");

    const sfResp = await fetch(SF_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      redirect: "follow", // Salesforce often 302s to retURL
    });

    const ok = sfResp.status >= 200 && sfResp.status < 400;
    return NextResponse.json({ ok }, { status: ok ? 200 : 502 });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err?.message || "relay_failed" },
      { status: 500 }
    );
  }
}
