export type ThemeBackground<T> = {
  tabToolbar: T,
  toolbar: T,
  selection: T,
  body: T,
  sidebar: T,
  contrast: T,
}

export type ThemeText<T> = {
  selection: T,
  splitter: T,
  comment: T,
  body: T,
  bodyAlt: T,
  content1: T,
  content2: T,
  content3: T,
}

export type ThemeHighlight<T> = {
  blue: T,
  purple: T,
  pink: T,
  red: T,
  orange: T,
  lightOrange: T,
  green: T,
  blueGrey: T,
  yellow: T,
}

export type Theme<T> = {
  background: ThemeBackground<T>,
  text: ThemeText<T>,
  highlight: ThemeHighlight<T>;
}

export type ThemeData<T> = {
  name: string,
  theme: Theme<T>,
  themeType: 'dark' | 'light'
}
