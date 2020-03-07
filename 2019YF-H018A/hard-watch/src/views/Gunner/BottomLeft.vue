<template>
    <div>
        <!-- 陀螺 -->
      <img :src="gunner_data.whipping_top === 0 ? gunner_light_green_close : gunner_light_green_open " class="gunner-red-light" style="top: 36.8%;left: 2.9%;">
      <!-- 电源 -->
      <img :src="gunner_data.bottom_left_power === 0 ? gunner_light_red_close : gunner_light_red_open " class="gunner-red-light" style="top: 36.8%;left: 14.7%;">
      <!-- 车内校炮 -->
      <img :src="gunner_data.interior_gun_calibration === 0 ? gunner_missile_down: gunner_missile_up"  class="black_light " style="top: 42.8%;left: 2.6%;">
      <!-- 手动还是自动 -->
      <img :src="gunner_data.bottom_left_auto_hadnle === 0 ? gunner_missile_down: gunner_missile_up"  class="black_light " style="top: 42.8%;left: 14.4%;">
    </div>
</template>

<script>
export default {
    props: ["gunner_data"],
    data() {
        return {
            gunner_light_green_close: require("@/assets/images/gunner/gunner-light-green-close.png"),
            gunner_light_green_open: require("@/assets/images/gunner/gunner-light-green-open.png"),
            gunner_light_red_close: require("@/assets/images/gunner/gunner-light-red-close.png"),
            gunner_light_red_open: require("@/assets/images/gunner/gunner-light-red-open.png"),
            gunner_missile_down : require("@/assets/images/gunner/gunner-missile-down.png"),
            gunner_missile_up : require("@/assets/images/gunner/gunner-missile-up.png")
        }
    },
}
</script>

<style scoped>
    .gunner-red-light {
        width: 1.1%;
        position: absolute;
    }

    .black_light {
        position: absolute; 
        width: 1.7%;
    }
</style>