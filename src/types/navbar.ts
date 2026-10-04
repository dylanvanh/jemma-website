export type NavItem = {
  title: string;
  to: "/";
  hash?: string;
};

export type NavBarConfig = {
  navItems: NavItem[];
};
