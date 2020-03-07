<template>
    <div>
      <!-- 1桥左 -->
      <img :src="driver_data.bridge_one_left === 0 ? driver_switch_down : driver_switch_up" style="width: 2%;left: 3%; top: 57%;position: absolute;">
      <!-- 1桥右 -->
      <img :src="driver_data.bridge_one_right === 0 ? driver_switch_down : driver_switch_up" style="width: 2%;left: 7.2%; top: 57%;position: absolute;">
      <!-- 4桥左 -->
      <img :src="driver_data.bridge_four_left === 0 ? driver_switch_down : driver_switch_up" style="width: 2%;left: 11.4%; top: 57%;position: absolute;">
      <!-- 4桥右 -->
      <img :src="driver_data.bridge_four_right === 0 ? driver_switch_down : driver_switch_up" style="width: 2%;left: 15.4%; top: 57%;position: absolute;">
      <!-- 左轴间差速 -->
      <img :src="driver_data.left_axle === 0 ? driver_switch_down : driver_switch_up" style="width: 2%;left: 19.7%; top: 57%;position: absolute;">
      <!-- 右轴间差速 -->
      <img :src="driver_data.right_axle === 0 ? driver_switch_down : driver_switch_up" style="width: 2%;left: 23.9%; top: 57%;position: absolute;">
      <!-- 轮间差速 -->
      <img :src="driver_data.wheel_between === 0 ? driver_switch_down : driver_switch_up" style="width: 2%;left: 27.7%; top: 57%;position: absolute;">

      <!-- 危险警告 -->
      <img :src="driver_data.danger_information === 0 ? driver_switch_down : driver_switch_up" style="width: 2%;left: 3%; top: 67%;position: absolute;">
      <!-- 夜行 -->
      <img :src="driver_data.night_mark === 0 ? driver_switch_down : driver_switch_up" style="width: 2%;left: 7.2%; top: 67%;position: absolute;">
      <!-- 抽尘泵 -->
      <img :src="driver_data.dust_pump === 0 ? driver_switch_down : driver_switch_up" style="width: 2%;left: 11.4%; top: 67%;position: absolute;">
      <!-- 战斗状态 -->
      <img :src="driver_data.fight_status === 0 ? driver_switch_down : driver_switch_up" style="width: 2%;left: 15.4%; top: 67%;position: absolute;">
      <!-- 开进气窗 -->
      <img :src="driver_data.open_in_air === 0 ? driver_switch_down : driver_switch_up" style="width: 2%;left: 19.7%; top: 67%;position: absolute;">
      <!-- 开排气窗 -->
      <img :src="driver_data.open_out_air === 0 ? driver_switch_down : driver_switch_up" style="width: 2%;left: 23.9%; top: 67%;position: absolute;">
      <!-- AMT诊断 -->
      <img :src="driver_data.amt_diagnose === 0 ? driver_switch_down : driver_switch_up" style="width: 2%;left: 27.7%; top: 67%;position: absolute;">

      <!-- 水泵 -->
      <img :src="driver_data.water_pump_light === 0 ? driver_light_green_close : driver_light_green_open" style="position: absolute;width: 1%;left: 4%;top: 76.7%;">
      <!-- 预热 -->
      <img :src="driver_data.preheat_light === 0 ? driver_light_yellow_close : driver_light_yellow_open" style="position: absolute;width: 1%;left: 4%;top: 79.4%;">
      <!-- 燃烧 -->
      <img :src="driver_data.burning_light === 0 ? driver_light_yellow_close : driver_light_yellow_open" style="position: absolute;width: 1%;left: 4%;top: 82.1%;">
      <!-- 故障 -->
      <img :src="driver_data.fault_light === 0 ? driver_light_red_close : driver_light_red_open" style="position: absolute;width: 1%;left: 4%;top: 85.3%;">
      <!-- 通风 -->
      <img :src="driver_data.air_light  === 0 ? driver_light_green_close : driver_light_green_open" style="position: absolute;width: 1%;left: 4%;top: 89%;">
      <!-- 制冷 -->
      <img :src="driver_data.cold_light  === 0 ? driver_light_green_close : driver_light_green_open" style="position: absolute;width: 1%;left: 4%;top: 92%;">
      <!-- 备用 -->
      <img :src="driver_data.spare_light === 0 ? driver_light_red_close : driver_light_red_open" style="position: absolute;width: 1%;left: 4%;top: 95%;">

      <!-- 水泵 -->
      <img src="@/assets/images/driver/driver-switch.png" style="position: absolute;width: 4.5%;left: 8.3%;top: 79%;transform-origin: center center;"
      :style="rightUpSwitch">
      <!-- 通风 -->
      <img src="@/assets/images/driver/driver-switch.png" style="position: absolute;width: 4.5%;left: 8.3%;top: 90%;transform-origin: center center;"
      :style="rightDownSwitch">
      <!-- 防浪板 -->
      <img :src="driver_data.wave_breaker === 0 ? driver_provide_wave_down : driver_provide_wave_up" style="position: absolute;top: 77.7%;left: 18.3%;width: 2.2%;">
      <!-- 夜视镜 -->
      <img src="@/assets/images/driver/driver-snooper-scope.png" style="position: absolute;left: 24%;top: 77.6%;width: 3.8%;">
      <!-- AMT带载启动 -->
      <img :src="driver_data.start_amt === 0 ? driver_light_big_close : driver_light_big_open" style="position: absolute;left: 15.6%; top: 88.5%; width: 3%;">
      <!-- 调压器复位 -->
      <img :src="driver_data.reset_voltage_regulator === 0 ? driver_light_big_close : driver_light_big_open" style="position: absolute;left: 20.6%; top: 88.5%; width: 3%;">
      <!-- 熄火 -->
      <img :src="driver_data.stalling === 0 ? driver_light_big_close : driver_light_big_open" style="position: absolute;left: 25.6%; top: 88.5%; width: 3%;">
      <!-- 选气预热 -->
      <img src="@/assets/images/driver/driver-key.png" style="position: absolute; left: 31.6%;top: 88.3%;width: 4.8%;transform-origin: center center;"
      :style="leftSwitch">
      <!-- 大的开关 -->
      <img :src="driver_data.park_handle === 0 ? driver_switch_handle_down : driver_switch_handle_up" style="position: absolute; left: 31.5%;top:55.5%;width: 6.2%;">

    </div>
</template>

<script>
export default {
    props: ['driver_data'],
    data() {
        return {
            driver_switch_down : require("@/assets/images/driver/driver-switch-down.png"),
            driver_switch_up : require("@/assets/images/driver/driver-switch-up.png"),
            driver_switch_handle_down : require("@/assets/images/driver/driver-switch-handle-down.png"),
            driver_switch_handle_up : require("@/assets/images/driver/driver-switch-handle-up.png"),
            driver_light_big_close : require("@/assets/images/driver/driver-light-big-close.png"),
            driver_light_big_open : require("@/assets/images/driver/driver-light-big-open.png"),
            driver_provide_wave_down: require("@/assets/images/driver/driver-provide-wave-down.png"),
            driver_provide_wave_up: require("@/assets/images/driver/driver-provide-wave-up.png"),
            driver_light_green_close: require("@/assets/images/driver/driver-light-green-close.png"),
            driver_light_green_open: require("@/assets/images/driver/driver-light-green-close.png"),
            driver_light_red_close: require("@/assets/images/driver/driver-light-red-close.png"),
            driver_light_red_open: require("@/assets/images/driver/driver-light-red-close.png"),
            driver_light_yellow_close: require("@/assets/images/driver/driver-light-yellow-close.png"),
            driver_light_yellow_open: require("@/assets/images/driver/driver-light-yellow-close.png"),
        }
    },
    computed: {
        leftSwitch(){
            let degValue = 0
            if(this.driver_data.left_switch === 1){
                degValue = 40
            } else if (this.driver_data.left_switch === 2){
                degValue = 90
            } else if (this.driver_data.left_switch === 3){
                degValue = 130
            } 
            return {transform: `rotate(${degValue}deg)`}
        },
        rightUpSwitch () {
            return {transform: `rotate(${this.driver_data.right_up_switch * 60}deg)`}
        },
        rightDownSwitch () {
            return {transform: `rotate(${this.driver_data.right_down_switch * 60}deg)`}
        }
    }
}
</script>