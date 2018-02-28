<template>
  <div class="wrapper" id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import homeNavigation from './components/Home-Navigation'
export default {
  name: 'app',
  components: {
    'navigation': homeNavigation
  },
  data() {
    return {
      hasLogin: false
    }
  }
}
</script>

<style>

.wrapper {
  width: 80%;
  margin: 0px auto;
}
</style>
