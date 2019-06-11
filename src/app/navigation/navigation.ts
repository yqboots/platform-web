import {AppNavigation} from '@yq/core';

import {environment} from 'environments/environment';

export const navigation: AppNavigation[] = environment.production ? [] : [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'dashboards',
        title: 'Dashboards',
        translate: 'NAV.DASHBOARDS',
        type: 'collapsible',
        icon: 'dashboard',
        children: [
          {
            id: 'analytics',
            title: 'Analytics',
            type: 'item',
            url: '/exts/analytics'
          },
          {
            id: 'project',
            title: 'Project',
            type: 'item',
            url: '/exts/project'
          }
        ]
      },
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
  },
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'pages',
    children: [
      {
        id: 'authentication',
        title: 'Authentication',
        type: 'collapsible',
        icon: 'lock',
        badge: {
          title: '10',
          bg: '#525e8a',
          fg: '#FFFFFF'
        },
        children: [
          {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: '/showcase/pages/auth/login'
          },
          {
            id: 'login-v2',
            title: 'Login v2',
            type: 'item',
            url: '/showcase/pages/auth/login-2'
          },
          {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: '/showcase/pages/auth/register'
          },
          {
            id: 'register-v2',
            title: 'Register v2',
            type: 'item',
            url: '/showcase/pages/auth/register-2'
          },
          {
            id: 'forgot-password',
            title: 'Forgot Password',
            type: 'item',
            url: '/showcase/pages/auth/forgot-password'
          },
          {
            id: 'forgot-password-v2',
            title: 'Forgot Password v2',
            type: 'item',
            url: '/showcase/pages/auth/forgot-password-2'
          },
          {
            id: 'reset-password',
            title: 'Reset Password',
            type: 'item',
            url: '/showcase/pages/auth/reset-password'
          },
          {
            id: 'reset-password-v2',
            title: 'Reset Password v2',
            type: 'item',
            url: '/showcase/pages/auth/reset-password-2'
          },
          {
            id: 'lock-screen',
            title: 'Lock Screen',
            type: 'item',
            url: '/showcase/pages/auth/lock'
          },
          {
            id: 'mail-confirmation',
            title: 'Mail Confirmation',
            type: 'item',
            url: '/showcase/pages/auth/mail-confirm'
          }
        ]
      },
      {
        id: 'coming-soon',
        title: 'Coming Soon',
        type: 'item',
        icon: 'alarm',
        url: '/showcase/pages/coming-soon'
      },
      {
        id: 'errors',
        title: 'Errors',
        type: 'collapsible',
        icon: 'error',
        children: [
          {
            id: '404',
            title: '404',
            type: 'item',
            url: '/showcase/pages/errors/error-404'
          },
          {
            id: '500',
            title: '500',
            type: 'item',
            url: '/showcase/pages/errors/error-500'
          }
        ]
      },
      {
        id: 'invoice',
        title: 'Invoice',
        type: 'collapsible',
        icon: 'receipt',
        children: [
          {
            id: 'modern',
            title: 'Modern',
            type: 'item',
            url: '/showcase/pages/invoices/modern'
          },
          {
            id: 'compact',
            title: 'Compact',
            type: 'item',
            url: '/showcase/pages/invoices/compact'
          }
        ]
      },
      {
        id: 'maintenance',
        title: 'Maintenance',
        type: 'item',
        icon: 'build',
        url: '/showcase/pages/maintenance'
      },
      {
        id: 'pricing',
        title: 'Pricing',
        type: 'collapsible',
        icon: 'attach_money',
        children: [
          {
            id: 'style-1',
            title: 'Style 1',
            type: 'item',
            url: '/showcase/pages/pricing/style-1'
          },
          {
            id: 'style-2',
            title: 'Style 2',
            type: 'item',
            url: '/showcase/pages/pricing/style-2'
          },
          {
            id: 'style-3',
            title: 'Style 3',
            type: 'item',
            url: '/showcase/pages/pricing/style-3'
          }
        ]
      },
      {
        id: 'profile',
        title: 'Profile',
        type: 'item',
        icon: 'person',
        url: '/showcase/pages/profile'
      },
      {
        id: 'search',
        title: 'Search',
        type: 'collapsible',
        icon: 'search',
        children: [
          {
            id: 'search-classic',
            title: 'Classic',
            type: 'item',
            url: '/showcase/pages/search/classic'
          },
          {
            id: 'search-modern',
            title: 'Modern',
            type: 'item',
            url: '/showcase/pages/search/modern'
          }
        ]
      },
      {
        id: 'faq',
        title: 'Faq',
        type: 'item',
        icon: 'help',
        url: '/showcase/pages/faq'
      },
      {
        id: 'knowledge-base',
        title: 'Knowledge Base',
        type: 'item',
        icon: 'import_contacts',
        url: '/showcase/pages/knowledge-base'
      }
    ]
  },
  {
    id: 'user-interface',
    title: 'User Interface',
    type: 'group',
    icon: 'web',
    children: [
      {
        id: 'cards',
        title: 'Cards',
        type: 'item',
        icon: 'crop_portrait',
        url: '/showcase/ui/cards'
      },
      {
        id: 'forms',
        title: 'Forms',
        type: 'item',
        icon: 'web_asset',
        url: '/showcase/ui/forms'
      },
      {
        id: 'icons',
        title: 'Icons',
        type: 'item',
        icon: 'photo',
        url: '/showcase/ui/icons'
      },
      {
        id: 'typography',
        title: 'Typography',
        type: 'item',
        icon: 'text_fields',
        url: '/showcase/ui/typography'
      },
      {
        id: 'helper-classes',
        title: 'Helper Classes',
        type: 'item',
        icon: 'help',
        url: '/showcase/ui/helper-classes'
      },
      {
        id: 'page-layouts',
        title: 'Page Layouts',
        type: 'collapsible',
        icon: 'view_quilt',
        children: [
          {
            id: 'carded',
            title: 'Carded',
            type: 'collapsible',
            badge: {
              title: '12',
              bg: '#525e8a',
              fg: '#FFFFFF'
            },
            children: [
              {
                id: 'full-width-1',
                title: 'Full Width #1',
                type: 'item',
                url: '/showcase/ui/page-layouts/carded/full-width-1'
              },
              {
                id: 'full-width-2',
                title: 'Full Width #2',
                type: 'item',
                url: '/showcase/ui/page-layouts/carded/full-width-2'
              },
              {
                id: 'full-width-tabbed-1',
                title: 'Full Width Tabbed #1',
                type: 'item',
                url: '/showcase/ui/page-layouts/carded/full-width-tabbed-1'
              },
              {
                id: 'full-width-tabbed-2',
                title: 'Full Width Tabbed #2',
                type: 'item',
                url: '/showcase/ui/page-layouts/carded/full-width-tabbed-2'
              },
              {
                id: 'left-sidebar-1',
                title: 'Left Sidebar #1',
                type: 'item',
                url: '/showcase/ui/page-layouts/carded/left-sidebar-1'
              },
              {
                id: 'left-sidebar-2',
                title: 'Left Sidebar #2',
                type: 'item',
                url: '/showcase/ui/page-layouts/carded/left-sidebar-2'
              },
              {
                id: 'left-sidebar-tabbed-1',
                title: 'Left Sidebar Tabbed #1',
                type: 'item',
                url: '/showcase/ui/page-layouts/carded/left-sidebar-tabbed-1'
              },
              {
                id: 'left-sidebar-tabbed-2',
                title: 'Left Sidebar Tabbed #2',
                type: 'item',
                url: '/showcase/ui/page-layouts/carded/left-sidebar-tabbed-2'
              },
              {
                id: 'right-sidebar-1',
                title: 'Right Sidebar #1',
                type: 'item',
                url: '/showcase/ui/page-layouts/carded/right-sidebar-1'
              },
              {
                id: 'right-sidebar-2',
                title: 'Right Sidebar #2',
                type: 'item',
                url: '/showcase/ui/page-layouts/carded/right-sidebar-2'
              },
              {
                id: 'right-sidebar-tabbed-1',
                title: 'Right Sidebar Tabbed #1',
                type: 'item',
                url: '/showcase/ui/page-layouts/carded/right-sidebar-tabbed-1'
              },
              {
                id: 'right-sidebar-tabbed-2',
                title: 'Right Sidebar Tabbed #2',
                type: 'item',
                url: '/showcase/ui/page-layouts/carded/right-sidebar-tabbed-2'
              }
            ]
          },
          {
            id: 'simple',
            title: 'Simple',
            type: 'collapsible',
            badge: {
              title: '10',
              bg: '#525e8a',
              fg: '#FFFFFF'
            },
            children: [
              {
                id: 'full-width-1',
                title: 'Full Width #1',
                type: 'item',
                url: '/showcase/ui/page-layouts/simple/full-width-1'
              },
              {
                id: 'full-width-tabbed-1',
                title: 'Full Width Tabbed #1',
                type: 'item',
                url: '/showcase/ui/page-layouts/simple/full-width-tabbed-1'
              },
              {
                id: 'left-sidebar-1',
                title: 'Left Sidebar #1',
                type: 'item',
                url: '/showcase/ui/page-layouts/simple/left-sidebar-1'
              },
              {
                id: 'left-sidebar-2',
                title: 'Left Sidebar #2',
                type: 'item',
                url: '/showcase/ui/page-layouts/simple/left-sidebar-2'
              },
              {
                id: 'left-sidebar-3',
                title: 'Left Sidebar #3',
                type: 'item',
                url: '/showcase/ui/page-layouts/simple/left-sidebar-3'
              },
              {
                id: 'left-sidebar-4',
                title: 'Left Sidebar #4',
                type: 'item',
                url: '/showcase/ui/page-layouts/simple/left-sidebar-4'
              },
              {
                id: 'right-sidebar-1',
                title: 'Right Sidebar #1',
                type: 'item',
                url: '/showcase/ui/page-layouts/simple/right-sidebar-1'
              },
              {
                id: 'right-sidebar-2',
                title: 'Right Sidebar #2',
                type: 'item',
                url: '/showcase/ui/page-layouts/simple/right-sidebar-2'
              },
              {
                id: 'right-sidebar-3',
                title: 'Right Sidebar #3',
                type: 'item',
                url: '/showcase/ui/page-layouts/simple/right-sidebar-3'
              },
              {
                id: 'right-sidebar-4',
                title: 'Right Sidebar #4',
                type: 'item',
                url: '/showcase/ui/page-layouts/simple/right-sidebar-4'
              }
            ]
          },
          {
            id: 'blank',
            title: 'Blank',
            type: 'item',
            url: '/showcase/ui/page-layouts/blank'
          }
        ]
      },
      {
        id: 'colors',
        title: 'Colors',
        type: 'item',
        icon: 'color_lens',
        url: '/showcase/ui/colors'
      }
    ]
  },
  {
    id: 'angular-material-elements',
    title: 'Angular Material Elements',
    type: 'group',
    icon: 'layers',
    children: [
      {
        id: 'form-controls',
        title: 'Form Controls',
        type: 'collapsible',
        icon: 'layers',
        children: [
          {
            id: 'autocomplete',
            title: 'Autocomplete',
            type: 'item',
            url: '/showcase/materials/autocomplete'
          },
          {
            id: 'checkbox',
            title: 'Checkbox',
            type: 'item',
            url: '/showcase/materials/checkbox'
          },
          {
            id: 'datepicker',
            title: 'Datepicker',
            type: 'item',
            url: '/showcase/materials/datepicker'
          },
          {
            id: 'form-field',
            title: 'Form field',
            type: 'item',
            url: '/showcase/materials/form-field'
          },
          {
            id: 'input',
            title: 'Input',
            type: 'item',
            url: '/showcase/materials/input'
          },
          {
            id: 'radio-button',
            title: 'Radio button',
            type: 'item',
            url: '/showcase/materials/radio-button'
          },
          {
            id: 'select',
            title: 'Select',
            type: 'item',
            url: '/showcase/materials/select'
          },
          {
            id: 'slider',
            title: 'Slider',
            type: 'item',
            url: '/showcase/materials/slider'
          },
          {
            id: 'slide-toggle',
            title: 'Slide toggle',
            type: 'item',
            url: '/showcase/materials/slide-toggle'
          }
        ]
      },
      {
        id: 'navigation',
        title: 'Navigation',
        type: 'collapsible',
        icon: 'layers',
        children: [
          {
            id: 'menu',
            title: 'Menu',
            type: 'item',
            url: '/showcase/materials/menu'
          },
          {
            id: 'sidenav',
            title: 'Sidebar',
            type: 'item',
            url: '/showcase/materials/sidenav'
          },
          {
            id: 'toolbar',
            title: 'Toolbar',
            type: 'item',
            url: '/showcase/materials/toolbar'
          }
        ]
      },
      {
        id: 'layout',
        title: 'Layout',
        type: 'collapsible',
        icon: 'layers',
        children: [
          {
            id: 'badge',
            title: 'Badge',
            type: 'item',
            url: '/showcase/materials/badge'
          },
          {
            id: 'bottom-sheet',
            title: 'Bottom Sheet',
            type: 'item',
            url: '/showcase/materials/bottom-sheet'
          },
          {
            id: 'card',
            title: 'Card',
            type: 'item',
            url: '/showcase/materials/card'
          },
          {
            id: 'divider',
            title: 'Divider',
            type: 'item',
            url: '/showcase/materials/divider'
          },
          {
            id: 'elevation',
            title: 'Elevation',
            type: 'item',
            url: '/showcase/materials/elevation'
          },
          {
            id: 'expansion-panel',
            title: 'Expansion Panel',
            type: 'item',
            url: '/showcase/materials/expansion-panel'
          },
          {
            id: 'grid-list',
            title: 'Grid list',
            type: 'item',
            url: '/showcase/materials/grid-list'
          },
          {
            id: 'list',
            title: 'List',
            type: 'item',
            url: '/showcase/materials/list'
          },
          {
            id: 'stepper',
            title: 'Stepper',
            type: 'item',
            url: '/showcase/materials/stepper'
          },
          {
            id: 'tabs',
            title: 'Tabs',
            type: 'item',
            url: '/showcase/materials/tabs'
          },
          {
            id: 'tree',
            title: 'Tree',
            type: 'item',
            url: '/showcase/materials/tree'
          }
        ]
      },
      {
        id: 'buttons-indicators',
        title: 'Buttons & Indicators',
        type: 'collapsible',
        icon: 'layers',
        children: [
          {
            id: 'button',
            title: 'Button',
            type: 'item',
            url: '/showcase/materials/button'
          },
          {
            id: 'button-toggle',
            title: 'Button toggle',
            type: 'item',
            url: '/showcase/materials/button-toggle'
          },
          {
            id: 'chips',
            title: 'Chips',
            type: 'item',
            url: '/showcase/materials/chips'
          },
          {
            id: 'icon',
            title: 'icon',
            type: 'item',
            url: '/showcase/materials/icon'
          },
          {
            id: 'progress-spinner',
            title: 'Progress spinner',
            type: 'item',
            url: '/showcase/materials/progress-spinner'
          },
          {
            id: 'progress-bar',
            title: 'Progress bar',
            type: 'item',
            url: '/showcase/materials/progress-bar'
          },
          {
            id: 'ripples',
            title: 'Ripples',
            type: 'item',
            url: '/showcase/materials/ripples'
          }
        ]
      },
      {
        id: 'popups-modals',
        title: 'Popups & Modals',
        type: 'collapsible',
        icon: 'layers',
        children: [
          {
            id: 'dialog',
            title: 'Dialog',
            type: 'item',
            url: '/showcase/materials/dialog'
          },
          {
            id: 'snackbar',
            title: 'Snackbar',
            type: 'item',
            url: '/showcase/materials/snackbar'
          },
          {
            id: 'tooltip',
            title: 'Tooltip',
            type: 'item',
            url: '/showcase/materials/tooltip'
          }
        ]
      },
      {
        id: 'data-table',
        title: 'Data table',
        type: 'collapsible',
        icon: 'layers',
        children: [
          {
            id: 'paginator',
            title: 'Paginator',
            type: 'item',
            url: '/showcase/materials/paginator'
          },
          {
            id: 'sort-header',
            title: 'Sort header',
            type: 'item',
            url: '/showcase/materials/sort-header'
          },
          {
            id: 'table',
            title: 'Table',
            type: 'item',
            url: '/showcase/materials/table'
          }
        ]
      }
    ]
  },
  {
    id: 'documentation',
    title: 'Documentation',
    icon: 'import_contacts',
    type: 'group',
    children: [
      {
        id: 'changelog',
        title: 'Changelog',
        type: 'item',
        icon: 'update',
        url: '/documentation/changelog',
        badge: {
          title: '8.0.0',
          bg: '#EC0C8E',
          fg: '#FFFFFF'
        }
      },
      {
        id: 'getting-started',
        title: 'Getting Started',
        type: 'collapsible',
        icon: 'import_contacts',
        children: [
          {
            id: 'introduction',
            title: 'Introduction',
            type: 'item',
            url: '/documentation/getting-started/introduction'
          },
          {
            id: 'installation',
            title: 'Installation',
            type: 'item',
            url: '/documentation/getting-started/installation'
          }
        ]
      },
      {
        id: 'developer-guide',
        title: 'Working with YQBoots',
        type: 'collapsible',
        icon: 'import_contacts',
        children: [
          {
            id: 'server',
            title: 'Server',
            type: 'item',
            url: '/documentation/developer-guide/server'
          },
          {
            id: 'production',
            title: 'Production',
            type: 'item',
            url: '/documentation/developer-guide/production'
          },
          {
            id: 'directory-structure',
            title: 'Directory Structure',
            type: 'item',
            url: '/documentation/developer-guide/directory-structure'
          },
          {
            id: 'updating-yq',
            title: 'Updating YQBoots',
            type: 'item',
            url: '/documentation/developer-guide/updating-yq'
          },
          {
            id: 'multi-language',
            title: 'Multi Language',
            type: 'item',
            url: '/documentation/developer-guide/multi-language'
          },
          {
            id: 'material-theming',
            title: 'Material Theming',
            type: 'item',
            url: '/documentation/developer-guide/material-theming'
          },
          {
            id: 'theme-layouts',
            title: 'Theme Layouts',
            type: 'item',
            url: '/documentation/developer-guide/theme-layouts'
          },
          {
            id: 'page-layouts',
            title: 'Page Layouts',
            type: 'item',
            url: '/documentation/developer-guide/page-layouts'
          }
        ]
      },
      {
        id: 'components',
        title: 'Components',
        type: 'collapsible',
        icon: 'import_contacts',
        children: [
          {
            id: 'countdown',
            title: 'Countdown',
            type: 'item',
            url: '/documentation/components/countdown'
          },
          {
            id: 'highlight',
            title: 'Highlight',
            type: 'item',
            url: '/documentation/components/highlight'
          },
          {
            id: 'material-color-picker',
            title: 'Material Color Picker',
            type: 'item',
            url: '/documentation/components/material-color-picker'
          },
          {
            id: 'navigation',
            title: 'Navigation',
            type: 'item',
            url: '/documentation/components/navigation'
          },
          {
            id: 'progress-bar',
            title: 'Progress Bar',
            type: 'item',
            url: '/documentation/components/progress-bar'
          },
          {
            id: 'search-bar',
            title: 'Search Bar',
            type: 'item',
            url: '/documentation/components/search-bar'
          },
          {
            id: 'sidebar',
            title: 'Sidebar',
            type: 'item',
            url: '/documentation/components/sidebar'
          },
          {
            id: 'shortcuts',
            title: 'Shortcuts',
            type: 'item',
            url: '/documentation/components/shortcuts'
          },
          {
            id: 'widget',
            title: 'Widget',
            type: 'item',
            url: '/documentation/components/widget'
          }
        ]
      },
      {
        id: '3rd-party-components',
        title: '3rd Party Components',
        type: 'collapsible',
        icon: 'import_contacts',
        children: [
          {
            id: 'datatables',
            title: 'Datatables',
            type: 'collapsible',
            children: [
              {
                id: 'ngxdatatable',
                title: 'ngx-datatable',
                type: 'item',
                url: '/documentation/components-third-party/datatables/ngx-datatable'
              }
            ]
          },
          {
            id: 'google-maps',
            title: 'Google Maps',
            type: 'item',
            url: '/documentation/components-third-party/google-maps'
          }
        ]
      },
      {
        id: 'directives',
        title: 'Directives',
        type: 'collapsible',
        icon: 'import_contacts',
        children: [
          {
            id: 'yq-if-on-dom',
            title: 'yqIfOnDom',
            type: 'item',
            url: '/documentation/directives/yq-if-on-dom'
          },
          {
            id: 'yq-inner-scroll',
            title: 'yqInnerScroll',
            type: 'item',
            url: '/documentation/directives/yq-inner-scroll'
          },
          {
            id: 'yq-mat-sidenav',
            title: 'yqMatSidenav',
            type: 'item',
            url: '/documentation/directives/yq-mat-sidenav'
          },
          {
            id: 'yq-perfect-scrollbar',
            title: 'yqPerfectScrollbar',
            type: 'item',
            url: '/documentation/directives/yq-perfect-scrollbar'
          }
        ]
      },
      {
        id: 'services',
        title: 'Services',
        type: 'collapsible',
        icon: 'import_contacts',
        children: [
          {
            id: 'yq-config',
            title: 'YQBoots Config',
            type: 'item',
            url: '/documentation/services/yq-config'
          },
          {
            id: 'yq-splash-screen',
            title: 'YQBoots Splash Screen',
            type: 'item',
            url: '/documentation/services/yq-splash-screen'
          }
        ]
      }
    ]
  }
];
