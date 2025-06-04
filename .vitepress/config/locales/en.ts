import {type DefaultTheme, defineConfig} from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/': { base: '/', items: sidebarGuide() },
    },

    editLink: {
      pattern: 'https://github.com/golang-module/carbon-docs/blob/main/src/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present carbon'
    },

    outline: {
      level: [2, 6],
      label: 'on this page'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Doc',
      link: '/overview',
      activeMatch: '/overview'
    },
    {
      text: 'Sponsor',
      link: '/sponsor',
      activeMatch: '/sponsor'
    },
    {
      text: 'CHANGELOG',
      link: '/change-log',
      activeMatch: '/change-log'
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'getting-started',
      collapsed: false,
      items: [
        {text: 'overview', link: 'overview',},
        {text: 'installation', link: 'getting-started',},
      ]
    },
    {
      text: 'Basic usage',
      collapsed: false,
      items: [
        {text: 'default', link: 'usage/default'},
        {text: 'converter', link: 'usage/converter'},
        {text: 'yesterday/today/tomorrow', link: 'usage/yesterday-today-tomorrow'},
        {text: 'creator', link: 'usage/creator'},
        {text: 'parser', link: 'usage/parser'},
        {text: 'boundary', link: 'usage/boundary'},
        {text: 'traveler', link: 'usage/traveler'},
        {text: 'difference', link: 'usage/difference'},
        {text: 'extremum', link: 'usage/extremum'},
        {text: 'comparison', link: 'usage/comparison'},
        {text: 'setter', link: 'usage/setter'},
        {text: 'getter', link: 'usage/getter'},
        {text: 'output', link: 'usage/output'},
      ]
    },
    {
      text: 'Advanced usage',
      collapsed: false,
      items: [
        {text: 'constellation', link: 'usage/constellation'},
        {text: 'season', link: 'usage/season'},
        {text: 'freeze', link: 'usage/freeze'},
        {text: 'calendar', link: 'usage/calendar'},
        {text: 'i18n', link: 'usage/i18n'},
        {text: 'json', link: 'usage/json'},
      ]
    },
    { text: 'faq', link: 'faq'},
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  en: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}

