<template >
    <main class="container main-container">
        <HomeHero/>
        <HomeCourseSlider/>
        <div class="statistics">
            <StatsSection class="stats"/>
            <Lead class="lead"/>
        </div>
</main>
</template>
<script>
    import { defineAsyncComponent } from "vue";
export default {
    components:{
        HomeHero: defineAsyncComponent(() => import("./HomeHero.vue")),
        HomeCourseSlider: defineAsyncComponent(() => import("./HomeCourseSlider.vue")),
        StatsSection: defineAsyncComponent(() => import("./StatsSection.vue")),
        Lead: defineAsyncComponent(() => import("../../components/Lead.vue")),
    }
}
</script>
<style >
@media (max-width:768px){
    .stats{
        padding: 24px;
    }
    .statistics{
        flex-direction: column;
    }
}
</style>