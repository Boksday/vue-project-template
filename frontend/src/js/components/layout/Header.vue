<template>
      <el-header>
          <img class="logo-img" src="https://www.lotte.co.kr/common/w/images/img_symbol_logo.png" @click="goRouter()">
      </el-header>
</template>

<script>
export default {
  methods: {
    goRouter () {
      this.$router.push('/')
    }
  }
}
</script>
<style >
header {
  line-height: 60px;
  color: #DA291C;
  text-align: center;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1)
}
.logo-img {
  width: 50px;
  margin:5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}
</style>
