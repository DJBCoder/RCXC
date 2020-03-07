<template>
    <div>
        <!-- 穿破榴攻灯 -->
      <img :src="bombTypeLight" class="gunner-light" style="top: 5.7%;left: 24.9%;">
      <!-- 穿破榴攻 开关 -->
      <img src="@/assets/images/gunner/gunner-fire-control-switch-button.png" 
      style="width: 4.4%; left: 23.3%;position: absolute;top: 11.9%;transform-origin: center center;" 
      :style="bombTypeSwitch">
      <!-- 稳像 装表 -->
      <img :src="imageSurfaceSwitch" class="gray_light " style="top: 23.8%;left: 22.1%;">
      <!-- 穿破榴攻 电源 -->
      <img :src="bombTypePower" class="gray_light " style="top: 23.8%;left: 27.5%;">
      <!-- 穿破榴攻 转盘-->
      <img src="@/assets/images/gunner/gunner-fire-control-drum-wheel.png" 
      style="width: 9.5%;left:30.4%;top:12.9%;position: absolute;transform-origin: 71% center;"
      :style="bombTypeWheel">
    </div>
</template>

<script>
export default {
    props: ['gunner_data'],
    data() {
        return {
            gunner_fire_control_status_close : require('@/assets/images/gunner/gunner-fire-control-status-close.png'),
            gunner_light_green_open : require('@/assets/images/gunner/gunner-light-green-open.png'),
            gunner_light_red_open : require('@/assets/images/gunner/gunner-light-red-open.png'),
            gunner_fire_control_button_down : require("@/assets/images/gunner/gunner-fire-control-button-down.png"),
            gunner_fire_control_button_up : require("@/assets/images/gunner/gunner-fire-control-button-up.png")
        }
    },
    computed: {
        bombTypeLight() {
            
            if(this.gunner_data.bomb_type_power === 0) {
                return this.gunner_fire_control_status_close
            } else {
                if (this.gunner_data.bomb_type_light === 0) {
                    return this.gunner_fire_control_status_close
                } else if (this.gunner_data.bomb_type_light === 1){
                    return this.gunner_light_green_open
                } else {
                    return this.gunner_light_red_open
                }
            }
        },
        bombTypeWheel() {
            return {transform: `rotate(${90 - this.gunner_data.bomb_type_wheel}deg)`}
        },
        bombTypePower() {
            return this.gunner_data.bomb_type_power === 0 ? this.gunner_fire_control_button_down : this.gunner_fire_control_button_up
        },
        bombTypeSwitch() {
            let initDeg = -20  + this.gunner_data.bomb_type_switch * 30
            initDeg = this.gunner_data.bomb_type_switch >= 4 ? initDeg + 10 : initDeg
            return {transform: `rotate(${initDeg}deg)`}
        },
        imageSurfaceSwitch() {
            return this.gunner_data.image_surface_switch === 0 ? this.gunner_fire_control_button_down : this.gunner_fire_control_button_up
        }
    },
}
</script>

<style scoped>
    .gunner-light {
        width: 1.1%;
        position: absolute;
    }
    .gray_light{
        position: absolute; 
        width: 1.3%;
    }
</style>