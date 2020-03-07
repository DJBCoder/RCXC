<template>
    <div>
      <img src="@/assets/images/gunner/gunner-console-handle.png" style="position: absolute;width: 8%;left: 27%;top: 37%;">
      <img :src="gunner_data.handle_left === 0 ? gunner_console_top_light_close: gunner_console_top_light_open" style="position: absolute;width: 0.8%;left: 27.4%; top: 40.2%;">
      <img :src="gunner_data.handle_right === 0 ? gunner_console_top_light_close: gunner_console_top_light_open" style="position: absolute;width: 0.8%;left: 33.8%; top: 40.2%;">
      <img :src="gunner_data.handle_bottom_left === 1 ? gunner_front_light_down : gunner_front_light_on" style="position: absolute;width: 0.3%;left: 29.9%;top: 47.6%;">
      <img :src="gunner_data.handle_bottom_center === 1 ? gunner_front_light_down : gunner_front_light_on" style="position: absolute;width: 0.3%;left: 30.9%;top: 47.6%;">
      <img :src="gunner_data.handle_bottom_right === 1 ? gunner_front_light_down : gunner_front_light_on" style="position: absolute;width: 0.3%;left: 31.9%;top: 47.6%;">
      <img :src="gunner_data.handle_small_left === 1 ? gunner_front_light_down : gunner_front_light_on" style="position: absolute;width: 0.3%;left: 28.4%;top: 44.7%;transform-origin: center center;transform: rotate(90deg);">
      <img :src="gunner_data.handle_top_left === 0 ? gunner_console_aside_light_close : gunner_console_aside_light_open" style="position: absolute;width: 0.8%;left: 27.5%;top: 39%;">
      <img :src="gunner_data.handle_top_right  === 0 ? gunner_console_aside_light_close : gunner_console_aside_light_open" style="position: absolute;width: 0.8%;left: 33.7%;top: 39%;">

      <img src="@/assets/images/gunner/炮手舱硬件状态监控_03.png" style="position: absolute;width: 8%;left: 18.5%;top: 35%;">
      <div style="position: absolute;height: 0.7%;width: 3.7%;top: 41.8%; left: 18.5%;display: inline-block; text-align: right;">
        <img src="@/assets/images/gunner/进度条.png" style="height: 100%;vertical-align: top;" :style="handleTurnLeft">
      </div>
      <div style="position: absolute;height: 0.7%;width: 3.7%;top: 41.8%; left: 22.8%;display: inline-block; text-align: left;">
        <img src="@/assets/images/gunner/进度条.png" style="height: 100%;vertical-align: top;" :style="handleTurnRight">
      </div>
      <div style="position: absolute;height: 0.7%;width: 3.7%;top: 38%; left: 20.6%;display: inline-block; text-align: right;transform-origin: center center;transform: rotate(90deg);">
        <img src="@/assets/images/gunner/进度条.png" style="height: 100%;vertical-align: top;" :style="handleTurnUp">
      </div>

      <div style="position: absolute;height: 0.7%;width: 3.7%;top: 45.6%; left: 20.6%;display: inline-block; text-align: left;transform-origin: center center;transform: rotate(90deg);">
        <img src="@/assets/images/gunner/进度条.png" style="height: 100%;vertical-align: top;" :style="handleTurnDown">
      </div>
    </div>
</template>

<script>
export default {
    props: ['gunner_data'],
    data() {
        return {
            gunner_console_top_light_open : require("@/assets/images/gunner/gunner-console-top-light-open.png"),
            gunner_console_top_light_close : require("@/assets/images/gunner/gunner-console-top-light-close.png"),
            gunner_console_aside_light_close: require("@/assets/images/gunner/gunner-console-aside-light-close.png"),
            gunner_console_aside_light_open: require("@/assets/images/gunner/gunner-console-aisde-light-open.png"),
            gunner_front_light_down : require("@/assets/images/gunner/gunner-front-light-down.png"),
            gunner_front_light_on : require("@/assets/images/gunner/gunner-front-light-on.png"),
        }
    },
    computed: {
      handleTurnLeft() {
        let turnAngle = 0
        if (this.gunner_data.handle_turn_hor <= 1024 && this.gunner_data.handle_turn_hor >= 0) {
          turnAngle = this.gunner_data.handle_turn_hor / 1024
        }
        return {width: `${turnAngle * 100}%`}
      },
      handleTurnRight() {
        let turnAngle = 0
        if (this.gunner_data.handle_turn_hor >= 1024 && this.gunner_data.handle_turn_hor <= 2048) {
          turnAngle = (this.gunner_data.handle_turn_hor - 1024) / 1024
        }
        return {width: `${turnAngle * 100}%`}
      },
      handleTurnUp() {
        let turnAngle = 0
        if (this.gunner_data.handle_turn_ver >= 1024 && this.gunner_data.handle_turn_ver <= 2048) {
          turnAngle = (this.gunner_data.handle_turn_ver - 1024) / 1024
        }
        return {width: `${turnAngle * 100}%`}
      },
      handleTurnDown() {
        let turnAngle = 0
        if (this.gunner_data.handle_turn_ver <= 1024 && this.gunner_data.handle_turn_ver >= 0) {
          turnAngle = this.gunner_data.handle_turn_ver / 1024
        }
        return {width: `${turnAngle * 100}%`}
      }
    },
}
</script>