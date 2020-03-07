<template>
    <div class="gunner-container">
        <GunnerLight :gunner_data="gunnerData"/>
        <BombType :gunner_data="gunnerData"/>
        <BottomLeft :gunner_data="gunnerData"/>
        <RightBottom :gunner_data="gunnerData"/>
        <BottomRight :gunner_data="gunnerData"/>
        <RightTop :gunner_data="gunnerData"/>
        <GunnerHandle :gunner_data="gunnerData"/>
    </div>
</template>

<script>
import GunnerLight from './GunnerLight'
import BombType from './BombType'
import BottomLeft from './BottomLeft'
import RightBottom from './RightBottom'
import BottomRight from './BottomRight'
import RightTop from './RightTop'
import GunnerHandle from './GunnerHandle'
export default {
    components: {
        GunnerLight,
        BombType,
        BottomLeft,
        RightBottom,
        BottomRight,
        RightTop,
        GunnerHandle
    },
    data() {
        return {
            gunnerData: null,
        }
    },
    created() {
        this.gunnerData = this.$root.gunnerData
    },
}
</script>

<style scoped>
    .gunner-container {
        background-image: url("../../assets/images/gunner/gunner-background.png");
        background-size: 100% 100%;
    }
</style>