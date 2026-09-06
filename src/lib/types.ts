export interface NavItem {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  overview: string;
  specifications: readonly { label: string; value: string }[];
}

export interface CompanyThesis {
  number: string;
  title: string;
  content: string;
}
