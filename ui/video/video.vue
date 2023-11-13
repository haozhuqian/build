<template>
  <video ref="my-player" class="video-js" id="my-player"></video>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { videoProps } from './types';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
const props = defineProps(videoProps);
onMounted(() => {
  videojs(
    'my-player',
    {
      techOrder: ['html5'],
      autoplay: 'muted',
      controls: true,
      controlBar: {
        volumePanel: false,
        remainingTimeDisplay: false,
        progressControl: false,
        fullscreenToggle: false,
        audioTrackButton: false,
        playToggle: false,
        liveDisplay: false,
        pictureInPictureToggle: false,
      },
      sources: [
        {
          src: props.src,
          type: 'video/mp4', //录播
        },
        {
          src: 'http://ivi.bupt.edu.cn/hls/hunanhd.m3u8',
          type: 'application/x-mpegURL', //直播
        },
      ],
    },
    function onPlayerReady() {
      videojs.log('Your player is ready!');
      // In this context, `this` is the player that was created by Video.js.
    },
  );
});
</script>

<style scoped lang="less">
@import './index.less';
</style>
