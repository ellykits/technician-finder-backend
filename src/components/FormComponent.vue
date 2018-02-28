<template>
  <div class="w3-padding-16">
    <div class="w3-row" id="form-header">
      <slot name="form-header"></slot>
    </div>
    <div class="w3-row" id="form-controls">
      <slot name="form-controls"></slot>
    </div>
    <div class="w3-row" id="form-content">
      <slot name="form-content"></slot>
    </div>
    <div class="w3-row" id="form-status">
       <slot name="form-status"></slot>
    </div>
    <div class="w3-row w3-light-grey w3-topbar w3-border-green" id="form-footer">
      <slot name="form-footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
.content{
  width:75%;
  margin:0px auto;
}
</style>
