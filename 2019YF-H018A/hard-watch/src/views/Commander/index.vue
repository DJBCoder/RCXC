<template>
    <div class="commander-container">
      <ComamnderDoor :door_angle="commanderData.door_angle"/>
      <HighLowWatch :hight_low_switch="commanderData.hight_low_switch"/>
      <DoubleLens :double_lens="commanderData.double_lens"/>
      <TargetButton :target_main="commanderData.target_main" :target_backup="commanderData.target_backup"/>
      <BombType :smoke_bomb="commanderData.smoke_bomb" :shrapnel_bomb="commanderData.shrapnel_bomb" 
      :auto_handle_switch="commanderData.auto_handle_switch" 
      :smoke_shrapnel_switch="commanderData.smoke_shrapnel_switch" />
    </div>
</template>

<script>
// 舱门
import ComamnderDoor from './CommanderDoor'
// 高低观察
import HighLowWatch from './HighLowWatch'
// 倍镜
import DoubleLens from './DoubleLens'
// 目标指示
import TargetButton from './TargetButton'
// 烟雾榴弹转换界面
import BombType from './BombType'
export default {
    data() {
        return {
            commanderData: null
        }
    },
    components: {
        ComamnderDoor,   // 舱门
        HighLowWatch,    // 高低观察
        DoubleLens,     // 倍镜
        TargetButton,   // 目标指示
        BombType,       // 弹种选择
    },
    created() {
        this.commanderData = this.$root.commanderData
    },
}
</script>

<style scoped>
.commander-container {
    background-image: url("../../assets/images/commander/commader-background.png");
    background-size: 100% 100%;
}
</style>