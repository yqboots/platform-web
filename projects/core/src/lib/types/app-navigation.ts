export interface AppNavigationItem {
  id: string;
  title: string;
  type: 'item' | 'group' | 'collapsible';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  externalUrl?: boolean;
  openInNewTab?: boolean;
  function?: any;
  badge?: {
    title?: string;
    translate?: string;
    bg?: string;
    fg?: string;
  };
  children?: AppNavigationItem[];
}

export interface AppNavigation extends AppNavigationItem {
  children?: AppNavigationItem[];
}
