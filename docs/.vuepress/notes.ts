import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const gameplay = defineNoteConfig({
  dir: '玩法详解',
  link: '/gameplay',
  sidebar: 'auto',
})

const gamerule = defineNoteConfig({
  dir: '游戏规则',
  link: '/gamerule',
  sidebar: 'auto',
})

export const chineseNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [gameplay, gamerule],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})

