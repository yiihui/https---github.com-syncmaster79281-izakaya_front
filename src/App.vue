<script setup>
import { RouterView } from 'vue-router';
import zhTW from 'ant-design-vue/es/locale/zh_TW';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-tw';
dayjs.locale('zh-tw');
const locale = zhTW;
</script>



<template>
  <a-config-provider :locale="locale">
    <RouterView />
  </a-config-provider>
</template>
