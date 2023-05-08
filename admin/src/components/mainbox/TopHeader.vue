<template>
    <el-header>
        <div class="left">
            <el-icon @click="handleCollapsed">
                <Menu />
            </el-icon>
            <span style="margin-left: 10px;">企业门户网站管理系统</span>
        </div>
        <div class="right">
            <span>欢迎admin 回来</span>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon :size="25" color="#fff">
                        <User />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleCenter">个人中心</el-dropdown-item>
                        <el-dropdown-item @click="handleLoginout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script setup>
    import {useStore} from 'vuex'
    import {useRouter} from 'vue-router'
    const store = useStore()
    const router = useRouter()
    //折叠
    const handleCollapsed = ()=>{
        store.commit("changeCollapsed")
    }
    //跳转
    const handleCenter = ()=>{
        router.push("/center")
    }
    //退出登录
    const handleLoginout = ()=>{
        localStorage.removeItem("token")
        router.push("/login")
    }
</script>

<style lang="scss" scoped>
.el-header{
    background: #2d3a4b;
    color: #fff;
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left,.right{
    display: flex;
}
.left{
    i{
        margin: auto;
        cursor: pointer;
    }
    
}
.right{
    .el-dropdown{
        margin: auto;
    }
}
</style>