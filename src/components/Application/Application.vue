<template>
  <NLoadingBarProvider>
    <NDialogProvider>
      <DialogContent />
      <NNotificationProvider>
        <NMessageProvider>
          <MessageContent />
          <slot name="default" />
        </NMessageProvider>
      </NNotificationProvider>
    </NDialogProvider>
  </NLoadingBarProvider>
</template>
