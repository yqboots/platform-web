export interface YqNavigationItem {
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
    children?: YqNavigationItem[];
}

export interface YqNavigation extends YqNavigationItem {
    children?: YqNavigationItem[];
}
