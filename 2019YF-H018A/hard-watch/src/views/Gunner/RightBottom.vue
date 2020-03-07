<template>
    <div>
      <img src="@/assets/images/gunner/gunner-auto-hand-push.png" style="position: absolute;width: 6.5%;left: 46%;top: 43.5%;">
      <img src="@/assets/images/gunner/gunner-auto-hand-push.png" style="position: absolute;width: 6.5%;left: 54%;top: 43.5%;">
      <span style="font-weight: 900;font-family: 微软雅黑; letter-spacing: 10px; font-size: 17px;display: inline-block;position: absolute;left: 48.1%;top: 47.5%;"
      :style="{color: gunner_data.right_bottom_handle_auto == 0 ? '#18503a' : '#af2020'}">手动</span>
      <span style="font-weight: 900;font-family: 微软雅黑; letter-spacing: 10px; font-size: 17px;display: inline-block;position: absolute;left: 56.1%;top: 47.5%;"
      :style="{color: gunner_data.right_bottom_handle_auto === 1 ? '#18503a' : '#af2020'}">自动</span>
    </div>
</template>

<script>
export default {
  props: ['gunner_data'],
}
</script>