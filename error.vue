<template>
  <div>
    <MainHeader />

    <StatusMessage
      :heading="'This page does not exist'"
      :message="'The page you were looking for does not exist or has been removed.'"
      :redirect="-1"
    />

    <MainFooter />
  </div>
</template>
