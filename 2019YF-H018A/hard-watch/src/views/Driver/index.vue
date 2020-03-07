<template>
    <div class="driver-container">
        <DriverRight :driver_data="driverData"/>
        <DriverCenterTop :driver_data="driverData"/>
        <DirectorHandle :driver_data="driverData"/>
        <DriverLeft :driver_data="driverData"/>
    </div>
</template>

<script>
import DriverRight from './DriverRight'
import DriverCenterTop from './DriverCenterTop'
import DirectorHandle from './DirectorHandle'
import DriverLeft  from './DriverLeft'
export default {
    components: {
        DriverRight,
        DriverCenterTop,
        DirectorHandle,
        DriverLeft,
    },
    data() {
        return {
            driverData: null
        }
    },
    created() {
        this.driverData = this.$root.driverData
    },
}
</script>

<style scoped>
    .driver-container {
        background-image: url("../../assets/images/driver/driver-background.png");
        background-size: 100% 100%;
    }
</style>