interface AboutUsFeaturesIF {
  icon: string;
  title: string;
}

interface AboutIF {
  title: string;
  highhlightedText: string;
  description: string;
  features: AboutUsFeaturesIF[];
}

export const ABOUTDATA: AboutIF = {
  title: "How We Are ?",
  highhlightedText: "At APPEARANCE",
  description:
    "we work inside the cosmeceutical industry with multiple missions:",
  features: [
    {
      icon: "/icons/growth.png",
      title: "Sales and marketing of innovative cosmeceutical products",
    },
    {
      icon: "/icons/person.png",
      title: "Exclusive agent to imported products",
    },
    {
      icon: "/icons/register.png",
      title: "Registration of new Cosmo-products",
    },
    {
      icon: "/icons/export.png",
      title: "Exporting our products to emirates and some African countries",
    },
  ],
};
