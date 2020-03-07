<template>
    <div>
      <!-- 烟雾弹击发转盘 -->
      <img src="@/assets/images/commander/commander-switch.png" style="position: absolute;width: 2.8%;left: 67.45%;top: 36.2%;transform-origin: center center;"
      :style="smokebomb">
      <!-- 榴散弹击发转盘 -->
      <img src="@/assets/images/commander/commander-switch.png" style="position: absolute;width: 2.8%;left: 80.8%;top: 36.2%;"
      :style="shrapnelbomb">
      <!-- 手动自动选择开关 -->
      <img :src="autohandleswitch" style="position: absolute;width: 2%;top: 38.5%;left: 75.2%;">
      <!-- 烟通 榴通开关 -->
      <img :src="smokeshrapnelswitch" style="position: absolute;width: 2%;top: 43.1%;left: 75.2%;">
      <!-- 烟雾弹 灯 -->
      <img :src="smokelight" style="position: absolute;width: 2.5%;top: 45.5%;left: 67.6%;">
      <!-- 榴散弹 灯 -->
      <img :src="shrapnellight" style="position: absolute;width: 2.5%;top: 45.5%;left: 81%;">
    </div>
</template>

<script>
const commander_button_left = require("../../assets/images/commander/commander-button-left.png")
const commander_button_right = require("../../assets/images/commander/commander-button-right.png")
const commander_light_close = require("../../assets/images/commander/commander-light-close.png")
const commander_light_open = require("../../assets/images/commander/commander-light-open.png")
export default {
    props: {
        smoke_bomb: {
            type:Number,
            default: 0
        },
        shrapnel_bomb: {
            type:Number,
            default: 0
        },
        auto_handle_switch: {
            type:Number,
            default: 0
        },
        smoke_shrapnel_switch: {
            type:Number,
            default: 0
        },
    },
    computed: {
        smokebomb(){
            return {transform: `rotate(${this.smoke_bomb * 30}deg)`}
        },
        shrapnelbomb(){
            return {transform: `rotate(${this.shrapnel_bomb * 30}deg)`}
        },
        autohandleswitch(){
            return this.auto_handle_switch === 0 ? commander_button_left : commander_button_right
        },
        smokeshrapnelswitch(){
            return this.smoke_shrapnel_switch === 0 ? commander_button_left : commander_button_right
        },
        smokelight(){
            return this.smoke_shrapnel_switch === 1 ? commander_light_close : commander_light_open
        },
        shrapnellight(){
            return this.smoke_shrapnel_switch === 0 ? commander_light_close : commander_light_open
        }
    }
}
</script>

