<template>
    <div>

    </div>
</template>
<script>

export default {
    components : [],
    data(){
        return {
            today : new Data()
        }
    },
    computed : { 
        AfterYear(){
            return this.today.setFullYear(this.today.getFullYear() + 1);
        }
    },
    methods : {},
    watch : {
        
    },
    crated() {},
    mounted() {}
}
</script>
<style>

</style>