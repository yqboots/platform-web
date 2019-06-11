import {AppNavigation} from '@yq/core';

import {environment} from 'environments/environment';

export const navigation: AppNavigation[] = environment.production ? [] : [
  {
    id: 'dashboards',
    title: 'Dashboards',
    translate: 'NAV.DASHBOARDS',
    type: 'group',
    icon: 'dashboard',
    children: [
      {
        id: 'analytics',
        title: 'Analytics',
        translate: 'NAV.ANALYTICS',
        type: 'item',
        icon: 'dashboard',
        url: '/exts/analytics'
      },
      {
        id: 'projects',
        title: 'Projects',
        translate: 'NAV.PROJECTS',
        type: 'item',
        icon: 'dashboard',
        url: '/exts/projects'
      }
    ]
  },
  {
    id: 'applications',
    title: 'Applications',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'calendar',
        title: 'Calendar',
        translate: 'NAV.CALENDAR',
        type: 'item',
        icon: 'today',
        url: '/exts/calendar'
      },
      {
        id: 'e-commerce',
        title: 'E-Commerce',
        translate: 'NAV.ECOMMERCE',
        type: 'collapsible',
        icon: 'shopping_cart',
        children: [
          {
            id: 'products',
            title: 'Products',
            type: 'item',
            url: '/exts/e-commerce/products',
            exactMatch: true
          },
          {
            id: 'productDetail',
            title: 'Product Detail',
            type: 'item',
            url: '/exts/e-commerce/products/1/printed-dress',
            exactMatch: true
          },
          {
            id: 'orders',
            title: 'Orders',
            type: 'item',
            url: '/exts/e-commerce/orders',
            exactMatch: true
          },
          {
            id: 'orderDetail',
            title: 'Order Detail',
            type: 'item',
            url: '/exts/e-commerce/orders/1',
            exactMatch: true
          }
        ]
      },
      {
        id: 'academy',
        title: 'Academy',
        translate: 'NAV.ACADEMY',
        type: 'item',
        icon: 'school',
        url: '/exts/academy'
      },
      {
        id: 'mail',
        title: 'Mail',
        translate: 'NAV.MAIL.TITLE',
        type: 'item',
        icon: 'email',
        url: '/exts/mail',
        badge: {
          title: '25',
          translate: 'NAV.MAIL.BADGE',
          bg: '#F44336',
          fg: '#FFFFFF'
        }
      },
      {
        id: 'chat',
        title: 'Chat',
        translate: 'NAV.CHAT',
        type: 'item',
        icon: 'chat',
        url: '/exts/chat',
        badge: {
          title: '13',
          bg: '#09d261',
          fg: '#FFFFFF'
        }
      },
      {
        id: 'file-manager',
        title: 'File Manager',
        translate: 'NAV.FILE_MANAGER',
        type: 'item',
        icon: 'folder',
        url: '/exts/file-manager'
      },
      {
        id: 'contacts',
        title: 'Contacts',
        translate: 'NAV.CONTACTS',
        type: 'item',
        icon: 'account_box',
        url: '/exts/contacts'
      },
      {
        id: 'to-do',
        title: 'To-Do',
        translate: 'NAV.TODO',
        type: 'item',
        icon: 'check_box',
        url: '/exts/todo',
        badge: {
          title: '3',
          bg: '#FF6F00',
          fg: '#FFFFFF'
        }
      },
      {
        id: 'scrumboard',
        title: 'Scrumboard',
        translate: 'NAV.SCRUMBOARD',
        type: 'item',
        icon: 'assessment',
        url: '/exts/scrumboard'
      }
    ]
  }
];
