<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">个人中心</div>
    </nav-bar>
    <UserInfo />
    <AccountInfo />
    <NormalList :list-data="vipList"/>
    <NormalList :list-data="serviceList"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import UserInfo from './childComps/UserInfo'
  import AccountInfo from './childComps/AccountInfo'
  import NormalList from './childComps/NormalList'

  export default {
    name: 'Profile',
    components: {
      NavBar,
      UserInfo,
      AccountInfo,
      NormalList
    },
    data() {
      return {
        vipList: [
          {icon: 'message.svg', info: '我的消息'},
          {icon: 'pointer.svg', info: '积分商城'},
          {icon: 'vip.svg', info: '会员卡'},
        ],
        serviceList: [
          {icon: 'cart.svg', info: '我的购物车'},
          {icon: 'shopping.svg', info: '下载购物APP'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .profile {
    background-color: #f2f2f2;
    .profile-nav {
      color: #fff;
      background-color: var(--color-tint);
    }
  }
</style>