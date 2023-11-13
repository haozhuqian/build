<template>
  <y-input-keyword v-model:keys="key"></y-input-keyword>
</template>

<script lang="ts" setup>
import { InputKeyword as YInputKeyword } from '@yeez-ui/ui';
import { ref } from 'vue';
const key = ref([]);
</script>

<style scoped lang="less"></style>
