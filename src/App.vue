<template>
    <div class="app-container">
<!--       Header-->
        <mt-header fixed title="On-Line Store"></mt-header>
<!--       Router-View-->
        <transition>
            <router-view></router-view>
        </transition>

<!--       Tabbar-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item " to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">Home</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">Member</span>
            </router-link>
            <router-link class="mui-tab-item" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">Shop Cart</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">Search</span>
            </router-link>
        </nav>

    </div>
</template>

<script>

</script>

<style scoped>
.app-container{
    padding-top: 40px ;
    padding-bottom: 50px;
    overflow-x: hidden;
}
    .v-enter
    {
        opacity: 0;
        transform: translateX(100%);

    }
.v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
    .v-enter-active,
    .v-leave-active{
        transition: all 0.5s ease;
    }

</style>
