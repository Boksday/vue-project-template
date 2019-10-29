<template>
        <el-aside>
          <div class="button-wrapper">
           <!-- 회원가입 버튼 -->
           <el-button v-if="!session.id" class="login-btn" @click="goRouter('/login')">로그인</el-button>
           <el-button v-else class="login-btn" @click="logout()">로그아웃</el-button>
           <!-- 로그인 버튼 -->

         </div>

         <div class="user-info" v-if="!session.id"> 로그인을 해주세요.</div>
         <div class="user-info" v-else>{{session.name}}님 환영합니다.</div>
         <div class="item">
           <el-button @click="goRouter('/product-list')">상품목록</el-button>
         </div>
        </el-aside>
</template>
<script src="https://developers.kakao.com/sdk/js/kakao.min.js"/>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      loginUser: sessionStorage.getItem('loginUser'),
      name: ''
    }
  },
  methods: {
    ...mapMutations(['setSession']),
    ...mapActions(['loadSession', 'destroySession']),
    goRouter (url) {
      this.$router.push(url)
    },
    logout () {
      if (confirm('로그아웃 하시겠습니까?')) {
        this.destroySession()
        Kakao.Auth.logout(function(res) {
          console.log(res + "logout");
        })
        this.$router.push('/')
      }
    }
  },
  computed: {
    ...mapState({
      session: (state) => state.user.session
    })
  },
  created () {
    this.loadSession()
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
