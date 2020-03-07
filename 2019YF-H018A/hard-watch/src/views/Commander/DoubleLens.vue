<template>
    <div>
        <img src="@/assets/images/commander/commander-double-lens.png" class="commander-double-lens"
        :style="doublelens">
    </div>
</template>

<script>
export default {
    props: {
        double_lens: {
            type: Number,
            default: 0
        }
    },
    computed: {
        doublelens(){
            return { transform: `rotate(${this.double_lens * 30}deg)` }
        }
    }
}
</script>

<style scoped>
    .commander-double-lens{
        position: absolute;
        width: 3.5%;
        top: 35.5%;
        left: 90.8%;
        transform-origin: center 10%;
    }
</style>