<template>
  <div
    class="comment-info-wrap"
    v-if="Object.keys(commentInfo).length !== 0"
  >
    <div class="comment-title flex">
      <div>用户评价</div>
      <div>更多</div>
    </div>

    <div class="comment-user-info">
      <img
        :src="commentInfo.user.avatar"
        alt=""
      > <span>{{commentInfo.user.uname}}</span>
    </div>

    <div class="comment-text">{{commentInfo.content}}</div>

    <div class="comment-news">
      <div>{{commentInfo.created | showDate}} </div>
      <div class="comment-text-style">{{commentInfo.style}} </div>
    </div>
    <div class="comment-img">
      <img
        v-for="item in commentInfo.images"
        :src="item"
        alt=""
      >
    </div>
  </div>

  </div>

  </div>
</template>

<script>
import { formatDate } from '../../../common/utils'
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    showDate (value) {
      //将时间戳转换成date对象
      const date = new Date(value * 1000);
      //将date进行格式化
      return formatDate(date, 'yyyy-MM-dd');
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-info-wrap {
  padding: 0 8px;
  font-size: 14px;
  border-bottom: 4px solid #ececec;
  .comment-title {
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    padding: 10px 4px;
  }
  .comment-user-info {
    margin-top: 10px;
    display: flex;
  }
  .comment-user-info img {
    width: 50px;
    border-radius: 80px;
  }
  .comment-user-info span {
    display: block;
    margin-top: 20px;
    margin-left: 20px;
  }
  .comment-text {
    margin-top: 10px;
  }
  .comment-news {
    margin-top: 10px;
    display: flex;
    .comment-text-style {
      margin-left: 20px;
    }
  }

  .comment-img {
    margin-top: 10px;
    width: 80px;
    display: flex;
  }
  .comment-img img {
    width: 100%;
    height: 80px;
  }
}
</style>
