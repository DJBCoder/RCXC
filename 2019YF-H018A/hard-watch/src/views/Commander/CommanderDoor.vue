<template>
    <div class="commander-container">
        <img src="@/assets/images/commander/commander-door.png" class="commander-door" :style="doorangle">
    </div>
</template>

<script>
export default {
    props: {
        // 舱门的旋转角度
        door_angle: {
            default: 0,
            type: Number
        }
    },
    computed: {
        // 计算门的角度
        doorangle(){
            return { transform: `rotate(${this.door_angle}deg)` }
        }
    },
}
</script>

<style scoped>
   .commander-door {
       position: absolute;
       width: 15%;
       left: 66%;
       top: 3%;
       transform-origin: center center;
   }
</style>