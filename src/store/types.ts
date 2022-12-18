export interface Site {
  name: string
  url: string
  shortcut: string
  index?: number
  [key: string]: any
}

export interface Engine {
  favicon: string
  name: string
  url: string
  checked?: boolean
  [key: string]: any
}
