<template>
    <div>
      <!-- 空调开关 -->
      <img :src="driver_data.air_conditioner === 0 ? driver_black_switch_down : driver_black_switch_up" style="width: 1.3%; left: 41%;position: absolute;top: 57%;">
      <!-- 夜视仪 -->
      <img :src="driver_data.night_vision_sight === 0 ? driver_black_switch_down : driver_black_switch_up" style="width: 1.3%; left: 45%;position: absolute;top: 57%;">
      <!-- 充放气 -->
      <img :src="driver_data.charging_discharging === 0 ? driver_black_switch_down : driver_black_switch_up" style="width: 1.3%; left: 49.5%;position: absolute;top: 57%;">
      <!-- 导航 -->
      <img :src="driver_data.navigation === 0 ? driver_black_switch_down : driver_black_switch_up" style="width: 1.3%; left: 53.7%;position: absolute;top: 57%;">
      <!-- 发动机电控 -->
      <img :src="driver_data.engine_control === 0 ? driver_black_switch_down : driver_black_switch_up" style="width: 1.3%; left: 58.2%;position: absolute;top: 57%;">
      <!-- MC精电源 -->
      <img :src="driver_data.mc_power === 0 ? driver_black_switch_down : driver_black_switch_up" style="width: 1.3%; left: 62.3%;position: absolute;top: 57%;">
      <!-- 任务计算机 -->
      <img :src="driver_data.task_computer === 0 ? driver_black_switch_down : driver_black_switch_up" style="width: 1.3%; left: 66.5%;position: absolute;top: 57%;">

      <!-- 加温器 -->
      <img :src="driver_data.humidifier === 0 ? driver_black_switch_down : driver_black_switch_up" style="width: 1.3%; left: 41%;position: absolute;top: 68%;">
      <!-- 观察镜除霜 -->
      <img :src="driver_data.observation_mirror === 0 ? driver_black_switch_down : driver_black_switch_up" style="width: 1.3%; left: 45%;position: absolute;top: 68%;">
      <!-- 灭火抑爆 -->
      <img :src="driver_data.fire_bob === 0 ? driver_black_switch_down : driver_black_switch_up" style="width: 1.3%; left: 49.5%;position: absolute;top: 68%;">
      <!-- 雨刷 -->
      <img :src="driver_data.wiper === 0 ? driver_black_switch_down : driver_black_switch_up" style="width: 1.3%; left: 53.7%;position: absolute;top: 68%;">
      <!-- 动力舱MIC -->
      <img :src="driver_data.power_cabin_mic === 0 ? driver_black_switch_down : driver_black_switch_up" style="width: 1.3%; left: 58.2%;position: absolute;top: 68%;">
      <!-- AMT电源 -->
      <img :src="driver_data.amt_power === 0 ? driver_black_switch_down : driver_black_switch_up" style="width: 1.3%; left: 62.3%;position: absolute;top: 68%;">
      <!-- 电路总开关 -->
      <img :src="driver_data.elec_control === 0 ? driver_black_switch_down : driver_black_switch_up" style="width: 1.3%; left: 66.5%;position: absolute;top: 68%;">
    </div>
</template>

<script>
export default {
    props: ['driver_data'],
    data() {
        return {
            driver_black_switch_down : require("@/assets/images/driver/driver-black-switch-down.png"),
            driver_black_switch_up : require("@/assets/images/driver/driver-black-switch-up.png")
        }
    },
}
</script>