import { ThemeData, Theme } from "./types.js"
import { constructThemeCss, defaultThemes, defaultThemeDark, defaultThemeLight } from "./template.js";

const q = (selector: string) => document.querySelector(selector) as HTMLInputElement

const elements: Theme<HTMLInputElement> = {
  background: {
    tabToolbar: q('#theme-background-tab-toolbar'),
    toolbar: q('#theme-background-toolbar'),
    selection: q('#theme-background-selection'),
    body: q('#theme-background-body'),
    sidebar: q('#theme-background-sidebar'),
    contrast: q('#theme-background-contrast'),
  },
  text: {
    selection: q('#theme-text-selection'),
    splitter: q('#theme-text-splitter'),
    comment: q('#theme-text-comment'),
    body: q('#theme-text-body'),
    bodyAlt: q('#theme-text-body-alt'),
    content1: q('#theme-text-content-1'),
    content2: q('#theme-text-content-2'),
    content3: q('#theme-text-content-3'),
  },
  highlight: {
    blue: q('#theme-highlight-blue'),
    purple: q('#theme-highlight-purple'),
    pink: q('#theme-highlight-pink'),
    red: q('#theme-highlight-red'),
    orange: q('#theme-highlight-orange'),
    lightOrange: q('#theme-highlight-light-orange'),
    green: q('#theme-highlight-green'),
    blueGrey: q('#theme-highlight-blue-grey'),
    yellow: q('#theme-highlight-yellow'),
  }
}

const themeCss = document.querySelector('#theme-css') as HTMLStyleElement
const outputCss = document.querySelector('#output') as HTMLTextAreaElement
const themeSelector = document.querySelector('#theme-selection') as HTMLSelectElement

function applyToEachElement(elems: Theme<HTMLInputElement>, theme: Theme<string>|null = null, apply: (elem: HTMLInputElement, color: string|null) => void) {
  for (const [sectionName, section] of Object.entries(elems)) {
    for (const [elemName, elem] of Object.entries(section)) {
      apply(elem, theme ? theme[sectionName][elemName] : null)
    }
  }
}

function setTheme(elems: Theme<HTMLInputElement>, theme: ThemeData<string>) {
  applyToEachElement(elems, theme.theme, (elem, color) => elem.value = color)
  themeCss.innerHTML = constructThemeCss(theme, 'browser')
  outputCss.value = constructThemeCss(theme, 'devtools')
  outputCss.style.height = 'auto'
  outputCss.style.height = `${outputCss.scrollHeight}px`
}

function getTheme(elems: Theme<HTMLInputElement>): Theme<string> {
  const builtTheme = {}
  for (const [sectionName, section] of Object.entries(elems)) {
    builtTheme[sectionName] = {}
    for (const [elemName, elem] of Object.entries(section)) {
      builtTheme[sectionName][elemName] = elem.value
    }
  }
  return builtTheme as Theme<string>
}

function onColorChange({ target }) {
  const newTheme = getTheme(elements)
  setTheme(elements, {
    name: 'Custom Theme',
    theme: newTheme,
    themeType: 'dark',
  })
}

function populateThemeSelector(themes: ThemeData<string>[]) {
  const options = themes.map(theme => {
    const opt = document.createElement('option')
    opt.innerText = theme.name
    opt.dataset.themeData = JSON.stringify(theme)
    return opt
  })

  themeSelector.append(...options)
}

function onSelectTheme() {
  const selected = [...themeSelector.querySelectorAll('option')].find(opt => opt.selected)
  const themeData: ThemeData<string> = JSON.parse(selected.dataset.themeData)
  setTheme(elements, themeData)
}

function initElements(elems: Theme<HTMLInputElement>) {
  applyToEachElement(elems, null, (elem) => elem.addEventListener('input', onColorChange))
  themeSelector.addEventListener('change', onSelectTheme)
  onSelectTheme()
}

function init() {
  populateThemeSelector(defaultThemes)
  initElements(elements)
}

console.log(elements)
init()
