<template>
  <y-video :src="videoSoureWebm"></y-video>
  <y-video :src="videoSoureMp4"></y-video>
  <!-- <y-video :src="videoSoureFlv"></y-video> -->
</template>

<script lang="ts" setup>
import { Video as YVideo } from '@yeez-ui/ui';
// @ts-ignore
import videoSoureWebm from './flower.webm';
// @ts-ignore
import videoSoureMp4 from './20221223_222920.mp4';
// @ts-ignore
import videoSoureFlv from './u2a90-xsaox.flv';
</script>

<style scoped lang="less"></style>
