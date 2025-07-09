const defaultOgImage = "https://api.gtcfx.com/uploads/20230102_171939_5d88fa5a3d.jpg"; // Set a default image URL

const getHead = (title, description, ogUrl, ogImage = defaultOgImage) => {
  return {
    title,
    meta: [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:url", content: ogUrl },
      // Add other necessary meta tags here as needed
    ],
    link: [
      { rel: "icon", href: "/favicon.ico" },
      // Add other necessary link tags here as needed
    ],
  };
};

export default getHead;
