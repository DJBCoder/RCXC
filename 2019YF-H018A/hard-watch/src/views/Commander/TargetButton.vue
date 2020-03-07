<template>
    <div>
        <!-- <img :src="targetmain" style="position: absolute;width: 2.5%;left: 87%;top: 18.5%;"> -->
        <img :src="targetmain" class="target-main">
        <img :src="targetbackup" class="target-backup">
    </div>
</template>

<script>
const commander_target_gray = require("../../assets/images/commander/commander-target-gray.png")
const commander_target_red = require("../../assets/images/commander/commander-target-red.png") 
export default {
    props: {
        target_main: {
            type: Number,
            default: 0
        },
         target_backup: {
            type: Number,
            default: 0
        }
    },
    computed: {
        targetmain() {
            return this.target_main === 0 ?  commander_target_gray : commander_target_red
        },
        targetbackup() {
            return this.target_backup === 0 ? commander_target_gray : commander_target_red
        }
    },
}
</script>

<style scoped>
    .target-main {
        position: absolute;
        width: 2.5%;
        left: 87%;
        top: 18.5%;
    }
    .target-backup {
        position: absolute;
        width: 2.5%;
        left: 93%;
        top: 18.5%;
    }
</style>