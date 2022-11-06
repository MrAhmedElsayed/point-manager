<template>
  <transition
    name="custom-classes"
    enter-active-class="animate__animated animate__fadeIn"
    mode="out-in"
  >
    <router-view />
  </transition>
</template>

<style>
body {
  margin: 0;
  width: 380px;
  height: 650px;
  border: 2px #10103d dashed;
  border-radius: 25px;
  box-shadow: rgba(17, 12, 46, 0.15) 0 48px 100px 0;
}
</style>
