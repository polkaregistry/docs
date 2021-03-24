/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Polkaregistry',
  tagline: 'Trustless and free identity registrar for Polkadot and Kulupu.',
  url: 'https://polkaregistry.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'polkaregistry',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: 'Polkaregistry',
      logo: {
        alt: 'Polkareigstry logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/polkaregistry/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Matrix',
              href: 'https://matrix.to/#/#polkaregistry:matrix.org',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/polkaregistry',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/polkaregistry/registry',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wei Tang. Content on this website licensed under CC-BY-SA 4.0.`
    },
    metadatas: [
      { name: 'twitter:card', content: 'summary' },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/polkaregistry/docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
