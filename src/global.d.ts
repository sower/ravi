export {}

declare global {
  interface Window {
    $dialog: ReturnType<typeof useDialog>
    $message: ReturnType<typeof useMessage>
  }
}
