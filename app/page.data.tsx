import { ReactNode } from "react";

export const aboutSectionData: {
  headline: string | ReactNode;
  details: string | ReactNode;
}[] = [
  {
    headline: "a solo web development studio + consultancy",
    details: (
      <>
        Behind Sparkbird Works is{" "}
        <a
          href="https://www.linkedin.com/in/anniepennell/"
          target="_blank"
          rel="noopener"
        >
          Annie Pennell
        </a>
        , an expert frontend engineer with over 8 years of experience building
        web applications and websites for start ups of all sizes. So yes — that
        means that “we” is actually Annie, her backyard birds, and a network of
        trusted partners available for collaboration as needed.
      </>
    ),
  },
  {
    headline: "a champion of web accessibility",
    details:
      "We believe that the web should be equally accessible to all, and that building with users of all abilities and circumstances in mind is a fundamental part of the web development process. Accessibility isn't a ticket relegated to the backlog for “someday”; it’s a functional requirement that’s met in every pull request.",
  },
  {
    headline: (
      <>
        working toward{" "}
        <a href="https://www.sustainablewebmanifesto.com/" target="_blank">
          a more sustainable web
        </a>
      </>
    ),
    details:
      "The internet is a huge source of carbon emissions, which is a fact still largely unknown even within the software industry. We work to reduce the carbon footprint of the web by building performant websites and applications.",
  },
  {
    headline: (
      <>
        based in Richmond, California, and{" "}
        <span className="noBreak">available globally</span>
      </>
    ),
    details:
      "We’re located just a short ferry ride from San Francisco, but remote work is our specialty. We’re available for projects anywhere in the world.",
  },
  {
    headline: "currently accepting new projects!",
    details: (
      <>
        We’re now accepting new projects for 2024 and are open to collaborations
        and consultations of any size or scope. If you’re interested in working
        together, please <a href="mailto:hello@sparkbird.works">get in touch</a>
        . We’d love to discuss what you have in mind!
      </>
    ),
  },
  /* Design - care about good design, focused on details, love to collab and review */
  /* Community - community stakeholder */
  /* Learning, growing, sharing */
  /* Ethical web development */
  /* Woman-owned small business */
];

export const servicesSectionData: {
  headline: string | ReactNode;
  details?: (string | ReactNode)[];
}[] = [
  {
    headline: "Frontend engineering for web applications and websites",
    details: [
      "Scalable applications built from the ground up",
      "New feature development",
      "Maintainable design systems and component libraries",
      "Code migrations and refactors",
    ],
  },
  {
    headline:
      "Consulting, implementation, and team training in areas of expertise, including:",
    details: [
      "Web accessibility (a11y)",
      "Design systems and component libraries",
      <>
        Sustainability in web design and development; lower the carbon intensity
        of your projects to reduce environmental impact <i>and</i> improve web
        performance at the same time
      </>,
      "Localization (l10n), internationalization (i18n), and translation integrations",
      "Sanity.io CMS integrations",
    ],
  },
  {
    headline:
      "Career support, advice, and coaching for early and mid career folks, especially around topics such as:",
    details: [
      <>
        Navigating life after college{" "}
        <i>(&ldquo;help! I got a humanities degree!&rdquo;)</i>
      </>,
      "Landing your first job out of a coding bootcamp",
      "Making tough decisions and evaluating what’s next",
    ],
  },
];
