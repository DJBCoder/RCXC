<template>
    <div>
        <img src="@/assets/images/gunner/gunner-hydraulic-intensifier-switch.png" style="position: absolute; width: 5%;left: 37.5%;top: 40%;transform-origin: 10% center;"
      :style="hydraulicintensifier">
    </div>
</template>

<script>
export default {
    props: ['gunner_data'],
    computed: {
        hydraulicintensifier(){
            return  {transform: `rotate(${-this.gunner_data.hydraulic_intensifier}deg)`}
        }
    },
}
</script>