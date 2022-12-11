export interface Site {
  id: number
  name: string
  url: string
  shortcut: string
}
export interface Website {
  id: number
  title: string
  sites: Array<Site>
}
