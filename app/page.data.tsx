import { ReactNode } from "react";

export const aboutSectionData: {
  headline: string | ReactNode;
  details: string | ReactNode;
}[] = [
  {
    headline: "a solo web development studio + consultancy",
    details:
      "Behind Sparkbird Works is Annie Pennell, an expert frontend engineer with over 8 years of experience building web applications and websites for start ups of all sizes. So yes--that means that &quot;we&quot; is actually Annie, her backyard birds, and a network of trusted partners available for collaboration as needed.",
  },
  {
    headline: "a champion of web accessibility",
    details:
      "We believe that the web should be equally accessible to all, and that building with users of all abilities and circumstances in mind is a fundamental part of the web development process. It's not a ticket saved to the backlog; it's a functional requirement that's met in every pull request.",
  },
  {
    headline: (
      <>
        working toward{" "}
        <a
          href="https://www.sustainablewebmanifesto.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          a more sustainable web
        </a>
      </>
    ),
    details:
      "The internet is a huge source of carbon emissions. We work to reduce the carbon footprint of the web by building performant websites and applications.",
  },
  {
    headline: (
      <>
        based in Richmond, California, and{" "}
        <span className="noBreak">available globally</span>
      </>
    ),
    details:
      "We're located a short ferry ride from San Francisco, but remote work is our specialty. We're available for projects anywhere in the world.",
  },
  /* Design - care about good design, focused on details, love to collab and review */
  /* Community - community stakeholder */
  /* Learning, growing, sharing */
  /* Ethical web development */
  /* Woman-owned small business */
];
