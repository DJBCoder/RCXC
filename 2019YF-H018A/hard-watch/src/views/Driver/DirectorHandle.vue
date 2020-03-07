<template>
    <div>
      <!-- 方向盘 -->
      <img src="@/assets/images/driver/driver-steering-wheel.png" 
      style="position: absolute;top: 79.8%;left: 41.5%;transform-origin: center center;width: 9.5%;"
      :style="directorPanel">
      <div style="position: absolute; display: inline-block;width: 14.5%; height: 3%;border: #082e1f solid 1.5px;top: 86%; left: 53%;"></div>
      <div style="position: absolute; display: inline-block; width: 2%; height: 2.7%; background-color: #082e1f;top: 86.3%; left: 53.2%;"
      :style="doubleAddLeftCir"></div>
      <div style="position: absolute; display: inline-block; width: 2.5%; height: 2.7%; background-color: #18503a;top: 86.3%; left: 55.25%;"
      :style="doubleLeftCir"></div>
      <div style="position: absolute; display: inline-block; width: 2.5%; height: 2.7%; background-color: #4a7b48;top: 86.3%; left: 57.79%;"
      :style="signalLeftCir"></div>
      <div style="position: absolute; display: inline-block; width: 2.5%; height: 2.7%; background-color: #4a7b48;top: 86.3%; left: 60.35%;"
      :style="signalRightCir"></div>
      <div style="position: absolute; display: inline-block; width: 2.5%; height: 2.7%; background-color: #18503a;top: 86.3%; left: 62.91%;"
      :style="doubleRightCir"></div>
      <div style="position: absolute; display: inline-block; width: 2%; height: 2.7%; background-color: #082e1f;top: 86.3%; left: 65.48%;"
      :style="doubleAddRightCir"></div> 
    </div>
</template>

<script>
export default {
    props: ['driver_data'],
    computed: {
        directorPanel(){
            return {transform: `rotate(${this.driver_data.directorPanel}deg)`}
        },
        doubleAddLeftCir() {
          return {backgroundColor : `${(this.driver_data.directorPanel <= -900 )  ? '#af2020' : '#082e1f'}`}
        },
        doubleLeftCir() {
          return {backgroundColor : `${(this.driver_data.directorPanel > -900 && this.driver_data.directorPanel <= -720 ) ? '#af2020' : '#18503a'}`}
        },
        signalLeftCir() {
          return {backgroundColor : `${(this.driver_data.directorPanel > -720 && this.driver_data.directorPanel <= -360 ) ? '#af2020' : '#4a7b48'}`}
        },
        doubleAddRightCir() {
          return {backgroundColor : `${(this.driver_data.directorPanel >= 900  ) ? '#af2020' : '#4a7b48'}`}
        },
        doubleRightCir() {
          return {backgroundColor : `${(this.driver_data.directorPanel >= 720 && this.driver_data.directorPanel < 900 ) ? '#af2020' : '#18503a'}`}
        },
        signalRightCir() {
          return {backgroundColor : `${(this.driver_data.directorPanel >=360 && this.driver_data.directorPanel < 720 ) ? '#af2020' : '#082e1f'}`}
        },
    },
}
</script>