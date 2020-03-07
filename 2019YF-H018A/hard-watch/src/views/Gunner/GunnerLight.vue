<template>
    <div>
        <!-- 炮塔风扇 灯-->
      <img :src="gunner_data.tueret_fan === 0 ? gunner_light_red_close : gunner_light_red_open " class="gunner-light" style="top: 2.8%;left: 2.5%;">
      <!-- 电源变换器 灯-->
      <img :src="gunner_data.power_switch === 0 ? gunner_light_red_close : gunner_light_red_open " class="gunner-light" style="top: 2.8%;left: 6.4%;">
      <!-- 炮控 灯-->
      <img :src="gunner_data.gun_control === 0 ? gunner_light_red_close : gunner_light_red_open " class="gunner-light" style="top: 2.8%;left: 10.5%;">
      <!-- 车长调炮 灯-->
      <img :src="gunner_data.commander_gun === 0 ? gunner_light_red_close : gunner_light_red_open " class="gunner-light" style="top: 2.8%;left: 14.5%;">
      <!-- 照明 灯-->
      <img :src="gunner_data.light === 0 ? gunner_light_red_close : gunner_light_red_open " class="gunner-light" style="top: 2.8%;left: 18.2%;">

      <!-- 炮塔风扇 开关-->
      <img :src="gunner_data.tueret_fan === 0 ? gunner_power_button_down : gunner_power_button_up" class="gunner-light" style="top: 7.8%;left: 2.5%;">
      <!-- 电源变换器 开关-->
      <img :src="gunner_data.power_switch === 0 ? gunner_power_button_down : gunner_power_button_up" class="gunner-light" style="top: 7.8%;left: 6.4%;">
      <!-- 炮控 开关-->
      <img :src="gunner_data.gun_control === 0 ? gunner_power_button_down : gunner_power_button_up" class="gunner-light" style="top: 7.8%;left: 10.5%;">
      <!-- 车长调炮 开关-->
      <img :src="gunner_data.commander_gun === 0 ? gunner_power_button_down : gunner_power_button_up" class="gunner-light" style="top: 7.8%;left: 14.5%;">
      <!-- 照明 开关-->
      <img :src="gunner_data.light === 0 ? gunner_power_button_down : gunner_power_button_up" class="gunner-light" style="top: 7.8%;left: 18.2%;">

      <!-- 北斗 灯-->
      <img :src="gunner_data.bid_dipper === 0 ? gunner_light_red_close : gunner_light_red_open " class="gunner-light" style="top: 17.8%;left: 2.5%;">
      <!-- 烟雾弹 灯-->
      <img :src="gunner_data.smoke_bomb === 0 ? gunner_light_red_close : gunner_light_red_open " class="gunner-light" style="top: 17.8%;left: 6.4%;">
      <!-- 综合信息 灯-->
      <img :src="gunner_data.general_information === 0 ? gunner_light_red_close : gunner_light_red_open " class="gunner-light" style="top: 17.8%;left: 10.5%;">
      <!-- 火控计算机 灯-->
      <img :src="gunner_data.fire_control_computer === 0 ? gunner_light_red_close : gunner_light_red_open " class="gunner-light" style="top: 17.8%;left: 14.5%;">
      <!-- 热像仪 灯-->
      <img :src="gunner_data.thermal_imaging_system === 0 ? gunner_light_red_close : gunner_light_red_open " class="gunner-light" style="top: 17.8%;left: 18.2%;">

      <!-- 北斗 开关-->
      <img :src="gunner_data.bid_dipper === 0 ? gunner_power_button_down : gunner_power_button_up" class="gunner-light" style="top: 21.8%;left: 2.5%;">
      <!-- 烟雾弹 开关-->
      <img :src="gunner_data.smoke_bomb === 0 ? gunner_power_button_down : gunner_power_button_up" class="gunner-light" style="top: 21.8%;left: 6.4%;">
      <!-- 综合信息 开关-->
      <img :src="gunner_data.general_information === 0 ? gunner_power_button_down : gunner_power_button_up" class="gunner-light" style="top: 21.8%;left: 10.5%;">
      <!-- 火控计算机 开关-->
      <img :src="gunner_data.fire_control_computer === 0 ? gunner_power_button_down : gunner_power_button_up" class="gunner-light" style="top: 21.8%;left: 14.5%;">
      <!-- 热像仪 开关-->
      <img :src="gunner_data.thermal_imaging_system === 0 ? gunner_power_button_down : gunner_power_button_up" class="gunner-light" style="top: 21.8%;left: 18.2%;">
    </div>
</template>

<script>
export default {
    props: ['gunner_data'],
    data() {
        return {
            gunner_light_red_close : require("@/assets/images/gunner/gunner-light-red-close.png"),
            gunner_light_red_open : require("@/assets/images/gunner/gunner-light-red-open.png"),
            gunner_power_button_down : require("@/assets/images/gunner/gunner-power-button-down.png"),
            gunner_power_button_up : require("@/assets/images/gunner/gunner-power-button-up.png")
        }
    }
}
</script>

<style scoped>
    .gunner-light {
        width: 1.1%;
        position: absolute;
    }
</style>