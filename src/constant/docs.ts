import { MainNavItem, SidebarNavItem } from '@/types/nav'

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs'
    },
    {
      title: 'Components',
      href: '/docs/components/accordion'
    },
    {
      title: 'Themes',
      href: '/themes'
    },
    {
      title: 'Examples',
      href: '/examples'
    },
    {
      title: 'GitHub',
      href: 'https://github.com/oOBobbyOo/nextjs-template',
      external: true
    }
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
          items: []
        }
      ]
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Accordion',
          href: '/docs/components/accordion',
          items: []
        }
      ]
    }
  ]
}
