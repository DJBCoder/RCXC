<template>
    <div>
      <!-- 档位 -->
      <img src="@/assets/images/driver/driver-gear-pane.png" style="position: absolute; width: 7%;left: 73.8%; top: 55.6%;">
      <img src="@/assets/images/driver/driver-gear-handle.png" style="position: absolute;"
      :style="gearposition">

      <!-- 水上控制手柄 -->
      <img :src="waterHandleUp" alt="" style="position: absolute;width: 10%;left: 87%;top: 56%;">
      <img :src="waterHandleDown" alt="" style="position: absolute;width: 10%;left: 87%;top: 62%;">

      <!-- 离合 -->
      <img src="@/assets/images/driver/进度条指针.png" style="position: absolute;left: 77%;height: 1.5%;"
      :style="Clutch">
      <!-- 刹车 -->
      <img src="@/assets/images/driver/进度条指针.png" style="position: absolute;left: 86.2%;height: 1.5%;"
      :style="brake">
      <!-- 油门 -->
      <img src="@/assets/images/driver/进度条指针.png" style="position: absolute;left: 94.4%;height: 1.5%;"
      :style="throttle">
    </div>
</template>

<script>
export default {
  props: ['driver_data'],
  data() {
    return {
      driver_handle_left : require("@/assets/images/driver/driver-handle-left.png"),
      driver_handle_center : require("@/assets/images/driver/driver-handle-center.png"),
      driver_handle_right : require("@/assets/images/driver/driver-handle-right.png")
    }
  },
  computed: {
    gearposition(){
      let top = 0
      let left = 78.4
      if(this.driver_data.gear_position <= 3) {
        top = this.driver_data.gear_position * 1.7 + 55.5
      } else if (this.driver_data.gear_position === 4){
        top = 3 * 1.7 + 55.5
        left = 77.5
      } else if (this.driver_data.gear_position === 5){
        top = 3 * 1.7 + 55.5
        left = 79.1
      } else if (this.driver_data.gear_position === 6){
        top = (this.driver_data.gear_position - 2) * 1.7 + 55.5
      } else if (this.driver_data.gear_position === 7){
        top = (this.driver_data.gear_position - 2) * 1.7 + 55.5
        left = 77.4
      }
      
      // left = this.driver_data.gear_position == 5 ? 77.4 : 78.4
      return {top: `${top}%` , left : `${left}%`}
    },
    waterHandleUp(){
      return this.driver_data.water_handle_up == 0 ? this.driver_handle_left : 
      (this.driver_data.water_handle_up == 1 ? this.driver_handle_center : this.driver_handle_right)
    },
    waterHandleDown(){
      return this.driver_data.water_handle_down == 0 ? this.driver_handle_left : 
      (this.driver_data.water_handle_down == 1 ? this.driver_handle_center : this.driver_handle_right)
    },
    throttle(){
      let value = (100 - this.driver_data.throttle) /100 * 26 + 70
      return {top: `${value}%`}
    },
    Clutch(){
      let value = (100 - this.driver_data.Clutch) /100 * 26 + 70
      return {top: `${value}%`}
    },
    brake(){
      let value = (100 - this.driver_data.brake) /100 * 26 + 70
      return {top: `${value}%`}
    },
  }
}
</script>