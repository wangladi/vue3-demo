<template>
  <a-button type="primary">Primary Button</a-button>
  <CloudServerOutlined />
  <a-switch v-model:checked="checked" />
</template>


<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    setup() {
      const checked = ref<boolean>(false);
      return {
        checked,
      };
    },
  });
</script>


<style scoped>
  a {
    color: #42b983;
  }
</style>
