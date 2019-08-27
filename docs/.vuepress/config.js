module.exports = {
  title: 'Blog',
  description: 'Blog',
  dest: './dist',
  themeConfig: {
    sidebar: [
      ['/', '介绍'],
      {
        title: '技术进阶',
        collapsable: false,
        children: [
          ['/advance/Redis基本原理.md', 'Redis基本原理']
        ]
      },
      {
        title: 'java基础',
        collapsable: false,
        children: [
          ['/java/HashMap原理', 'HashMap原理']
        ]
      },
      {
        title: '代码题解',
        collapsable: false,
        children: [
          ['/coding/acwing题解', 'acwing题解']
        ]
      }
    ]
  }
}