<template>
    <div class="login-container">
        <el-form ref="form" :model="form" class="login-form">
            <div class="title-container">
                <h3 class="title">智迪心声网格化心理服务平台</h3>
            </div>
            <el-form-item >
                <el-input
                prefix-icon="el-icon-user"
                ref="username"
                v-model="form.username"
                placeholder="用户名"
                name="username"
                type="text"
                />
            </el-form-item>
            <el-form-item >
                <el-input
                prefix-icon="el-icon-lock"
                ref="password"
                v-model="form.password"
                placeholder="密码"
                name="password"
                type="password"
                />
            </el-form-item>
            <el-button  type="primary" style="width:100%;margin-bottom:30px;" @click="login">登录</el-button>
        </el-form>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            form:{
                username:'',
                password:''
            }
        };
    },
    computed: {},
    watch: {},
    methods: {
        login(){
            this.$router.push({ path: "/layout" });
        }
    },
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
    .login-container{
        min-height: 100%;
        width: 100%;
        background-color: #2d3a4b;
        overflow: hidden;
    }
    .login-form{
        width: 420px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;
    }
    .title-container{
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #eee;
        margin-bottom: 40px;
    }
</style>