/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'Install',
    'Introduction',
    'Functions',
    {
      type: 'category',
      label: '函数',
      items: [
        // 'api-reference/index',//函数 主页
        {
          type: 'category',
          label: '通用函数',
          items: [
            // 'api-reference/tong-yong/index', //通用函数 主页
            'api-reference/tong-yong/tree',
            'api-reference/tong-yong/three-dimension',
          ],
        }, {
          type: 'category',
          label: '专用函数',
          items: [
            // 'api-reference/zhuan-yong/index', //通用函数 主页
            'api-reference/zhuan-yong/im-utils',
            'api-reference/zhuan-yong/im-utils-model',
            'api-reference/zhuan-yong/im-search-tools',
            'api-reference/zhuan-yong/dao',
            // 'api-reference/zhuan-yong/pyocc',
          ],
        },
      ]
    },
  ],

};

export default sidebars;
