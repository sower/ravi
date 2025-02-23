export function openUrl(url: string): void {
  window.open(url)
}

export function getFavicon(url: string): string {
  return `https://favicon.im/${new URL(url).hostname}`
}

export function isEmpty(obj: any) {
  return [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length
}
