<template>
    <div>
      <img src="@/assets/images/commander/commander-high-low-handle.png" class="high-low-handle" :style="highlowhandle">
      <img src="@/assets/images/commander/commander-high-low-grade.png" class="high-low-grade">
    </div>
</template>

<script>
export default {
    props: {
        hight_low_switch: {
            type: Number,
            default: -10            
        } 
    },
    computed: {
        highlowhandle() {
            let deg = this.hight_low_switch > 45 ? 45 : ( this.hight_low_switch < -10 ? -10 : this.hight_low_switch)
            deg = (deg + 10) / 55 * -46.5
            return {transform: `rotate(${deg}deg)`}
        }
    }
}
</script>

<style scoped>
    .high-low-handle {
        position: absolute;
        width: 7.5%;
        left: 86.8%;
        top: 6.5%;
        transform-origin: 92% center;
    }
    .high-low-grade {
        position: absolute; 
        width: 5%;
        top: 3.5%;
        left: 89.5%;
    }
</style>