<template>
  <div class="user-info">
    <img src="~assets/img/profile/avatar.svg" alt="" class="avatar">
    <div class="info">
      <p class="login">登录/注册</p>
      <p class="phone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </p>
    </div>
    <div class="arrow">
      <img src="~assets/img/common/arrow-left.svg" alt="" class="arrow">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserInfo',
  }
</script>

<style lang="scss" scoped>
  .user-info {
    height: 85px;
    background-color: var(--color-tint);
    padding: 6px 15px;
    display: flex;
    color: #fff;
    .avatar {
      width: 70px;
      height: 70px;
    }
    .info {
      padding-left: 15px;
      flex: 1;
      .login {
        margin-top: 15px;
      }
      .phone {
        img {
          width: 20px;
          height: 30px;
          vertical-align: middle;
          margin-left: -5px;
        }
        span {
          font-size: 13px;
        }
      }
    }
    .arrow {
      width: 20px;
      line-height: 85px;
    }
  }
</style>