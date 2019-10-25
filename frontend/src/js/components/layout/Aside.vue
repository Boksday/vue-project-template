<template>
        <el-aside>
          <div class="button-wrapper">
           <!-- 회원가입 버튼 -->
           <el-button class="login-btn" @click="goRouter()">로그인</el-button>
           <!-- 로그인 버튼 -->

         </div>
         <div class="user-info">로그인을 해주세요.</div>
         <div class="item">
           사이드메뉴
         </div>
        </el-aside>
</template>

<script>

export default {
  methods: {
    goRouter () {
      this.$router.push('/login')
    }
  }
}
</script>
<style>
.button-wrapper{
  margin-top:10px;
  text-align: center;
  vertical-align: super;
  padding: 0 10px;
}
.item{
  margin:10px;
  font-size:16px;
  color:#50545A;
}
aside {
   box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1)
}
.login-btn{
  width:100%;
  background-color: white !important;
  color: #DA291C !important;
  border-radius: 0px !important;
  border-color: #DA291C !important;
}
.login-btn:hover{
  width:100%;
  background-color: #DA291C !important;
  color: white !important;
  border-color: #DA291C !important;
  transition: .5s;
}
.user-info{
  text-align: center;
  margin:10px;
  margin-bottom:20px;
  font-weight: 500;
  color:#50545A;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
