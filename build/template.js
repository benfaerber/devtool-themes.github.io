export function constructThemeCss(themeData, usedFor) {
    const { background, text, highlight } = themeData.theme;
    const prefix = usedFor === 'browser' ? 'test-' : '';
    return `/*
 * Variables for devtools are available at: https://developer.mozilla.org/en-US/docs/Tools/DevToolsColors
 */

:root.theme-${themeData.themeType} {
  /*
     * Chrome colors
     */
  --${prefix}theme-tab-toolbar-background: ${background.tabToolbar} !important;
  --${prefix}theme-toolbar-background: ${background.toolbar} !important;
  --${prefix}theme-selection-background: ${background.selection} !important;
  --${prefix}theme-selection-color: ${text.selection} !important;
  --${prefix}theme-splitter-color: ${text.splitter} !important;
  --${prefix}theme-comment: ${text.comment} !important;

  /*
     * Content Colors
     */
  --test-theme-body-background: ${background.body} !important;
  --${prefix}theme-sidebar-background: ${background.sidebar} !important;
  --${prefix}theme-contrast-background: ${background.contrast} !important;

  /*
     * Text Colors
     */
  --${prefix}theme-body-color: ${text.body} !important;
  --${prefix}theme-body-color-alt: ${text.bodyAlt} !important;
  --${prefix}theme-content-color1: ${text.content1} !important;
  --${prefix}theme-content-color2: ${text.content2} !important;
  --${prefix}theme-content-color3: ${text.content3} !important;

  /*
     * Highlight Colors
     */
  --${prefix}theme-highlight-blue: ${highlight.blue} !important;
  --${prefix}theme-highlight-purple: ${highlight.purple} !important;
  --${prefix}theme-highlight-pink: ${highlight.pink} !important;
  --${prefix}theme-highlight-red: ${highlight.red} !important;
  --${prefix}theme-highlight-orange: ${highlight.orange} !important;
  --${prefix}theme-highlight-lightorange: ${highlight.lightOrange} !important;
  --${prefix}theme-highlight-green: ${highlight.green} !important;
  --${prefix}theme-highlight-bluegrey: ${highlight.blueGrey} !important;
  --${prefix}theme-highlight-yellow: ${highlight.yellow} !important;
}`;
}
export const defaultThemeDark = {
    name: 'Firefox Default Dark Theme',
    theme: {
        background: {
            tabToolbar: '#252c33',
            toolbar: '#343c45',
            selection: '#1d4f73',
            body: '#14171a',
            sidebar: '#181d20',
            contrast: '#b28025',
        },
        text: {
            selection: '#f5f7fa ',
            splitter: '#000000',
            comment: '#5c6773',
            body: '#14171a',
            bodyAlt: '#b6babf',
            content1: '#a9bacb',
            content2: '#8fa1b2',
            content3: '#667380',
        },
        highlight: {
            blue: '#46afe3',
            purple: '#6b7abb',
            pink: '#df80ff ',
            red: '#eb5368 ',
            orange: '#d96629',
            lightOrange: '#d99b28',
            green: '#70bf53',
            blueGrey: '#5e88b0',
            yellow: '#ffffb4',
        },
    },
    themeType: 'dark'
};
export const defaultThemeLight = {
    name: "Firefox Default Light Theme",
    theme: {
        background: {
            tabToolbar: '#ebeced',
            toolbar: '#f0f1f2',
            selection: '#4c9ed9',
            body: '#fcfcfc',
            sidebar: '#f7f7f7 ',
            contrast: '#e6b064',
        },
        text: {
            selection: '#f5f7fa',
            splitter: '#aaaaaa',
            comment: '#747573',
            body: '#18191a',
            bodyAlt: '#585959',
            content1: '#292e33',
            content2: '#8fa1b2',
            content3: '#667380 ',
        },
        highlight: {
            blue: '#0088cc',
            purple: '#5b5fff',
            pink: '#b82ee5',
            red: '#ed2655',
            orange: '#f13c00',
            lightOrange: '#d97e00',
            green: '#2cbb0f',
            blueGrey: '#0072ab',
            yellow: '#ffffb4',
        },
    },
    themeType: 'light',
};
export const oneMonokaiThemeDark = {
    name: 'Ben\'s One Monokai Theme',
    theme: {
        background: {
            tabToolbar: '#252c33 ',
            toolbar: '#343c45',
            selection: '#5c6679 ',
            body: '#2d323b ',
            sidebar: '#23282e',
            contrast: '#b28025',
        },
        text: {
            selection: '#f5f7fa ',
            splitter: '#000000 ',
            comment: '#5c6773',
            body: '#bcd3e7',
            bodyAlt: '#d7dde6',
            content1: '#a1c983',
            content2: '#b6cbdf',
            content3: '#bccfe0',
        },
        highlight: {
            blue: '#e47780',
            purple: '#e8c786',
            pink: '#df80ff',
            red: '#a1c983',
            orange: '#d96629',
            lightOrange: '#d99b28',
            green: '#b3bed3',
            blueGrey: '#e8c786',
            yellow: '#ffffb4',
        },
    },
    themeType: 'dark',
};
export const defaultThemes = [
    defaultThemeDark,
    defaultThemeLight,
    oneMonokaiThemeDark,
];
//# sourceMappingURL=template.js.map