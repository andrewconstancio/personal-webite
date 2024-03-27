export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "",
  description:
    "YOOOO",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "#about-me-section",
    },
    {
      title: "Projects",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/about",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
