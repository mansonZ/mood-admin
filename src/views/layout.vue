<template>
    <div class="layout-container">
        <Nav></Nav>
        <div class="layout-box">
            <PageHeader></PageHeader>
        </div>
        <Router-view></Router-view>
    </div>
</template>
<script>
import Nav from '../components/nav.vue';
import PageHeader from '../components/page-header.vue';
export default {
    components: {
        Nav, 
        PageHeader
    },
    data() {
        return {};
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
};
</script>
<style>
.layout-box{
    margin-left: 220px;
}
</style>