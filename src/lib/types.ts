export type NavigationItem = {
  label: string;
  href: string;
};

export type Action = NavigationItem & {
  ariaLabel?: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  descriptor: string;
  description: string;
  locale: string;
  theme: "artisan-premium";
  navigation: readonly NavigationItem[];
  actions: {
    project: Action;
    work: Action;
  };
  contact: {
    email: string;
    phone: string;
    phoneHref: string;
    address: readonly string[];
    region: string;
    hours: string;
  };
  legal: {
    company: string;
    registration: string;
    publication: string;
    hosting: string;
  };
};
