<template>
    <div>
      <img src="@/assets/images/gunner/gunner-missile-pushbutton.png" style="position: absolute;width: 3.1%;left: 47.5%;top:28%;">
      <img src="@/assets/images/gunner/gunner-missile-pushbutton.png" style="position: absolute;width: 3.1%;left: 51.8%;top:28%;">
    
      <!-- 高飞装定准备 -->
      <img src="@/assets/images/gunner/gunner-missile-director-wheel.png" style="position: absolute;width: 2.5%;left: 57.4%;top: 5.5%;transform-origin: center center;"
      :style="gaofeiInstallationPreparation">

      <!-- 复位 -->
      <img src="@/assets/images/gunner/gunner-missile-director-init.png" style="position: absolute; width: 1.7%;left: 57.8%; top: 18.9%;">
      <img src="@/assets/images/gunner/gunner-light-red-close.png" style="position: absolute; width: 1.4%;left: 58%;top: 15%;">

      <!-- 电视 -->
      <img :src="gunner_data.gunner_tv === 0 ? gunner_missile_down : gunner_missile_up" style="position: absolute; width: 1.7%;left: 57.8%;top: 24.3%;">
      <!-- 加热 -->
      <img :src="gunner_data.gunner_hooter === 0 ? gunner_missile_down : gunner_missile_up" style="position: absolute; width: 1.7%;left: 57.8%;top: 30.1%;">
      <img :src="gunner_data.gunner_hooter === 0 ? gunner_light_red_close : gunner_light_red_open" style="position: absolute; width: 1.4%;left: 55.1%; top: 30.8%;">
      <!-- 导弹 -->
      <img :src="gunner_data.gunner_missile === 0 ? gunner_missile_down : gunner_missile_up" style="position: absolute; width: 1.7%;left: 57.8%;top: 35.9%;">
      <img :src="gunner_data.gunner_missile === 0 ? gunner_light_red_close : gunner_light_red_open" style="position: absolute; width: 1.4%;left: 55.1%; top: 36.7%;">
      <!-- 首末节 -->
      <img :src="gunner_data.gunner_beg_end === 0 ? gunner_missile_down : gunner_missile_up" style="position: absolute; width: 1.7%;left: 53.1%;top: 35.9%;">
      <img :src="gunner_data.gunner_beg_end === 0 ? gunner_light_red_close : gunner_light_red_open" style="position: absolute; width: 1.4%;left: 50.6%;top: 36.7%;">

    </div>
</template>

<script>
export default {
    props: ['gunner_data'],
    data() {
        return {
            gunner_light_red_close : require("@/assets/images/gunner/gunner-light-red-close.png"),
            gunner_light_red_open : require("@/assets/images/gunner/gunner-light-red-open.png"),
            gunner_missile_down : require("@/assets/images/gunner/gunner-missile-down.png"),
            gunner_missile_up : require("@/assets/images/gunner/gunner-missile-up.png")
        }
    },
    computed: {
        gaofeiInstallationPreparation(){
            let degValue = 0
            if (this.gunner_data.gaofei_installation_preparation > 0) {
                degValue = this.gunner_data.gaofei_installation_preparation == 4 ? 
                this.gunner_data.gaofei_installation_preparation * 25 + 8 : this.gunner_data.gaofei_installation_preparation * 25
            } else {
                degValue = this.gunner_data.gaofei_installation_preparation * 35
            }
            return {transform: `rotate(${degValue}deg)`}
        }
    },
}
</script>