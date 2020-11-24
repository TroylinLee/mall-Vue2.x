<template>
  <div class="comments">
    <div class="header">
      <span class="title left">用户评价</span>
      <span class="more right">
        更多
        <i><img src="~assets/img/common/arrow-left.svg" alt=""></i>
      </span>
    </div>
    <div class="user-comment"
         v-for="(item, index) in commentsInfo"
         :key="index">
      <div class="user">
        <img class="avatar" :src="item.user.avatar" alt="">
        <span class="name">{{item.user.uname}}</span>
      </div>
      <div class="comment">
        <p class="content">{{item.content}}</p>
        <p class="other">
          <span class="date">{{item.created | showDate}}</span>
          <span>{{item.style}}</span>
        </p>
        <div class="images" v-if="item.images">
          <img
            v-for="(img, indey) in item.images"
            :key="indey"
            :src="img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { formatDate } from 'common/utils'
  export default {
    name: 'DetailComment',
    props: {
      commentsInfo: Array
    },
    filters: {
      showDate(value) {
        let date = new Date(value * 1000)
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .comments {
    padding: 5px 10px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
    .header {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
      .title {
        font-size: 15px;
      }
      .more {
        font-size: 13px;
        margin-right: 10px;
        img {
          width: 13px;
          height: 13px;
          position: relative;
          top: 2px;
          background-color: #ccc;
        }
      }
    }
    .user-comment {
      .user {
        padding: 10px 0 5px;
        .avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
        }
        .name {
          position: relative;
          font-size: 15px;
          top: -15px;
          margin-left: 10px;
        }
      }
      .comment {
        padding: 0 5px 15px;
        .content {
          font-size: 14px;
          color: #777;
          line-height: 1.5;
        }
        .other {
          font-size: 12px;
          color: #999;
          margin-top: 10px;
          .date {
            margin-right: 8px;
          }
        }
        .images {
          margin-top: 10px;
          img {
            width: 70px;
            height: 70px;
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>