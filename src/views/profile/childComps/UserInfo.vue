<template>
  <div id="user-info">
    <a
      href="#"
      class="clear-fix"
    >
      <slot name="user-icon">
        <div class="privateImage-svg left">
          <img
            src="../../../assets/img/profile/user center.png"
            alt=""
          >
        </div>
      </slot>

      <div class="login-info left">
        <slot name="user-nickname">
          <div class="login-info-user">登录/注册</div>
        </slot>
        <div class="phone">
          <span>
            <svg
              data-v-735ff1be=""
              fill="#fff"
              class="icon-mobile"
            >
              <use
                data-v-735ff1be=""
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#mobile"
              ></use>
            </svg>
          </span>
        </div>
      </div>
      <svg
        data-v-735ff1be=""
        fill="#fff"
        class="arrow-svg right"
      >
        <use
          data-v-735ff1be=""
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#arrow-right"
        ></use>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
#user-info {
  background-color: var(--color-text);
  padding: 15px;
  margin-top: -5px;
}

#user-info .privateImage-svg {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 30px;
}
.privateImage-svg img {
  width: 100%;
}
.left {
  float: left;
}

#user-info .arrow-svg {
  width: 11px;
  height: 22px;
  margin-top: 18px;
}

#user-info .login-info {
  color: #fff;
  margin: 10px 0 0 10px;
}

#user-info .login-info .phone {
  position: relative;

  font-size: 13px;
  margin-top: 5px;
  margin-left: 15px;
  font-weight: 300;
}

#user-info .login-info .phone .icon-mobile {
  position: absolute;
  width: 12px;
  height: 18px;
  left: -15px;
  top: 0px;
}
.login-info-user {
  width: 70px;
  height: 16px;
  margin-top: 7px;
}
</style>
