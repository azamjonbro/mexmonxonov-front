<template >
    <main class="container main-container">
        <HomeHero/>
        <HomeCourseSlider/>
        <StatsSection/>
    </main>
</template>
<script>
    import { defineAsyncComponent } from "vue";
export default {
    components:{
        HomeHero: defineAsyncComponent(() => import("./HomeHero.vue")),
        HomeCourseSlider: defineAsyncComponent(() => import("./HomeCourseSlider.vue")),
        StatsSection: defineAsyncComponent(() => import("./StatsSection.vue")),
    }
}
</script>
<style >
    
</style>