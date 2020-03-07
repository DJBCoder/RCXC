<template>
    <div class="container">
        <Gunner class="gunner"/>
        <!-- 竖方向分割线 -->
        <div class="column-line"></div>
        <Commander class="commander"/>
        <!-- 横方向分割线 -->
        <div class="row-line"></div>
        <Driver class="driver"/>
    </div>
</template>

<script>
import Commander from '@/views/Commander'
import Gunner from '@/views/Gunner'
import Driver from '@/views/Driver'
export default {
    components: {
        Commander,
        Gunner,
        Driver
    }
}
</script>

<style scoped>
/* 最外层容器的样式 */
.container {
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  position: absolute;
  background-color: #51584e;
}

/* 左上容器的样式 */
.gunner {
  height: 52%;
  width: 62.8%;
  float: left;
}

/* 竖方向的分割线的样式 */
.column-line {
  background-color: #7e8073;
  background-size: 100% 100%;
  height: 52%;
  width: 0.4%;
  float: left;
}

/* 右上角容器的样式 */
.commander { 
  height: 52%;
  width: 36.8%;
  float: left;
}

/* 横方向的分割线的样式 */
.row-line {
  background-color: #7e8073;
  background-size: 100% 100%;
  height: 0.8%;
  width: 100%;
  float: left;
}

/* 下面容器的样式 */
.driver {
  height: 47.2%;
  width: 100%;
  float: left;
}
</style>