// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

const colors = {
  adobe: '#ff0000',
  airbnb: '#fd5c63',
  algolia: '#050f2c',
  amazon: '#ff9900',
  android: '#3ddc84',
  apple: '#a2aaad',
  atlassian: '#003366',
  behance: '#1769ff',
  chrome: '#ea4335',
  codepen: '#0ebeff',
  dailymotion: '#00aaff',
  deviantart: '#05cc47',
  discord: '#5865F2',
  dribbble: '#ea4c89',
  dropbox: '#007ee5',
  duolingo: '#7ac70c',
  etsy: '#d5641c',
  evernote: '#2dbe60',
  explorer: '#0076D6',
  facebook: '#3b5998',
  feedly: '#2bb24c',
  firefox: '#FF7139',
  github: '#333',
  gitlab: '#fc6d26',
  google: '#4285f4',
  hackernews: '#ff4000',
  html: '#e34f26',
  javascript: 'F7DF1E',
  instagram: '#e1306c',
  linux: '#FCC624',
  linkedin: '#0077b5',
  messenger: '#0084ff',
  microsoft: '#f65314',
  netflix: '#e50914',
  netlify: '#01ac9e',
  openvpn: '#ff9100',
  pinterest: 'e60023',
  pocket: '#ef4056',
  react: '#00d8ff',
  reddit: '#ff4500',
  rss: 'f26522',
  serverless: '#fd544f',
  shopify: '#96bf48',
  skype: '#00aff0',
  slack: '#611f69',
  snapchat: '#fffc00',
  spotify: '#1db954',
  stripe: '#6772e5',
  telegram: '#0088cc',
  trakt: '#ED2224',
  trello: '#0079bf',
  tumblr: '#35465c',
  twitch: '#6441a5',
  twitter: '#1da1f2',
  typescript: '#3178C6',
  uber: '#09091a',
  ubuntu: '#dd4814',
  vimeo: '#162221',
  vscode: '#3fa8f2',
  vue: '#42b883',
  whatsapp: '#075e54',
  wikipedia: '#000000',
  windows: '#008080',
  wordpress: '#21759b',
  youtube: '#ff0000',
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
module.exports = plugin(function () {}, { theme: { extend: { colors } } })
