<template>
    <div>
        1111
             <div class="head">
            <img src="" alt="">
        </div>

    </div>
</template>

<script>
export default {
    beforeCreate() {

        if(!this.$store.state.islogin){
          this.$router.push({path:'/login'})
        }
    },
}
</script>

<style lang="less">
    
</style>