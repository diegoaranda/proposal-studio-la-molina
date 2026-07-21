const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "diaran_2222@outlook.com";

export const contactLinks = {
  startProject: `mailto:${contactEmail}?subject=Quiero%20comenzar%20el%20proyecto%20de%20La%20Molina%20Florer%C3%ADa`,
  whatsApp: "https://wa.me/59169006014",
} as const;
