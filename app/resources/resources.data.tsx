type Resource = {
  /** title of resource, used as link label */
  title: string;

  /** if true, renders title item in italics */
  titleItalic?: boolean;

  /**
   * Optional source of the resource, such as author or sponsoring organization.
   */
  source?: string;

  /** url for resource */
  link: string;
};

type ResourceCategory = {
  category: string;
  resources: Resource[];
};

export const resourcesData: ResourceCategory[] = [
  {
    category: 'the fundamentals',
    resources: [
      {
        title: 'Sustainable Web Manifesto',
        link: 'https://www.sustainablewebmanifesto.com/',
      },
      {
        title: 'Web Sustainability Guidelines (WSG) 1.0',
        link: 'https://w3c.github.io/sustyweb/',
      },
      {
        title: 'Sustainable Web Design',
        link: 'https://sustainablewebdesign.org/',
      },
    ],
  },
  {
    category: 'communities',
    resources: [
      {
        title: 'ClimateAction.Tech',
        link: 'https://climateaction.tech/',
      },
      {
        title: 'Work on Climate',
        link: 'https://workonclimate.org/',
      },
      {
        title: 'W3C Sustainable Web Interest Group',
        link: 'https://www.w3.org/groups/ig/sustainableweb/',
      },
    ],
  },
  {
    category: 'books',
    resources: [
      {
        title: 'Building Green Software',
        source: 'Anne Currie, Sarah Hsu, & Sara Bergman',
        link: 'https://www.oreilly.com/library/view/building-green-software/9781098150617/',
        titleItalic: true,
      },
      {
        title: 'Sustainable Web Design',
        source: 'Tom Greenwood',
        link: 'https://abookapart.com/products/sustainable-web-design',
        titleItalic: true,
      },
    ],
  },
  {
    category: 'podcasts',
    resources: [
      {
        title: 'Green.io',
        link: 'https://greenio.gaelduez.com/',
      },
      {
        title: 'Environment Variables',
        source: 'Green Software Foundation',
        link: 'https://podcast.greensoftware.foundation/',
      },
      {
        title: 'SUX - The Sustainable UX Podcast',
        source: 'the SUX Network',
        link: 'https://sustainableuxnetwork.com/#podcast',
      },
    ],
  },
  {
    category: 'courses',
    resources: [
      {
        title: 'Green Software Practicioner',
        source:
          'Green Software Foundation; certificate available through The Linux Foundation',
        link: 'https://learn.greensoftware.foundation/',
      },
    ],
  },
  {
    category: 'newsletters and publications',
    resources: [
      {
        title: 'Branch Magazine',
        source: 'ClimateAction.Tech',
        link: 'https://branch.climateaction.tech/',
      },
      {
        title: 'Curiously Green',
        source: 'Wholegrain Digital',
        link: 'https://www.wholegraindigital.com/curiously-green/',
      },
    ],
  },
  {
    category: 'organizations',
    resources: [
      {
        title: 'Green Web Foundation',
        link: 'https://www.thegreenwebfoundation.org/',
      },
      {
        title: 'Green Software Foundation',
        link: 'https://greensoftware.foundation/',
      },
    ],
  },
];
