export const title = useTitle()

export function setTitle(description: string) {
  title.value = `Ravi | ${description}`
}

export const language = useStorage('language', 'en')

export const theme = useStorage('theme', '')

export const bgImage = useStorage('bgImage', {
  isShow: false,
  url: 'https://unsplash.it/1980/1080?random',
  opacity: 0.8,
})
