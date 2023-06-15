import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'dc81382d26324a8c8f8844ec4bf78836',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'jero blog',
  domain: 'blog.jero.com',
  author: 'jero',

  // open graph metadata (optional)
  description: 'jero blog - developer blog',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'jero-kang',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://file.notion.so/f/s/9e7593c0-599e-452f-b12e-cb4f34021c25/Pngtreecube-tetris_5408911-_2_.ico?id=01d158b5-f3ed-4917-851e-77e39dcefac6&table=block&spaceId=e5a40596-92ac-46ec-ab00-811a819fb35c&expirationTimestamp=1686912868666&signature=r6MgcSBlOc3LIx2MDZfab_F55WkzGbgQuLqdWLYz484&downloadName=%E2%80%94Pngtree%E2%80%94cube-tetris_5408911-_2_.ico',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '카테고리',
      pageId: '204a5f2038f749b1b15fe9a6761fbca6',
    },
  ],

  // -------- custom configs (2skydev) -------------

  // date-fns format string
  dateformat: 'yyyy년 MM월 dd일',

  // post page - hidden properties
  hiddenPostProperties: ['설명', '상태', '최하위 정렬'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: true,
});
