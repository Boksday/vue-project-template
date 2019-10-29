<template>
    <div class="login-wrapper">
        <div class="box-card">
            <div class="title item">로그인</div>
            <form action="post" @submit.prevent="submit">
                <el-input class="input item" type="text" placeholder="아이디를 입력하세요" v-model="id"></el-input>
                <el-input class="input item" type="password" placeholder="비밀번호를 입력하세요" v-model="password"></el-input>
                <el-input class="input-btn item" type="submit" value="로그인"></el-input>
                <KakaoLogin
                    api-key="618d7abb90ffa6b3115b71fae000e459"
                    image="kakao_login_btn_large"
                    :on-success=onSuccess
                    :on-failure=onFailure
                />
            </form>
        </div>
    </div>
</template>
<script src="https://developers.kakao.com/sdk/js/kakao.min.js"/>
<script>
import { mapActions } from 'vuex'
import sha256 from 'js-sha256'
import KakaoLogin from 'vue-kakao-login'

export default {
  data () {
    return {
      id: '',
      password: ''
    }
  },
  components: {
    KakaoLogin
  },
  methods: {
    ...mapActions(['login', 'kakaoLogin']),

    submit () {
      this.login({
        id: this.id,
        password: sha256(this.password),
        name: '',
        role: ''
      })
        .then((res) => {
          console.log(res)
          if (res.data !== '') {
            this.$router.push('/')
          } else {
            alert('아이디 또는 비밀번호가 틀렸습니다.')
          }
        })
    },
    onSuccess (data) {
      let token = data.access_token

      console.log('success')
      console.log(Kakao)

      let loginUser = {}
      Kakao.API.request({
        url: '/v1/user/me',
          success: function (res) {
          loginUser = {
              id: res.kaccount_email,
              name: res.properties.nickname,
              role: 'user'
          }
        }
      }).then((res) => {
          this.kakaoLogin(loginUser)
          this.$router.push('/')
      })

    },
    onFailure (data) {
      console.log(data)
      console.log('failure')
      alert('로그인에 실패했습니다.')
    }
  }

}
</script>

<style>
    .login-wrapper{
        margin: 10px;
        text-align: center;
    }
    .title {
        font-size: 32px;
        font-weight: 600;
        color:#50545A;
    }
    .box-card{
        width:500px;
        display: inline-block;
    }
    .input input:focus {
        color:green;
        border-color: #DA291C !important;
        transition: .3s !important
    }
    .input-btn input {
        border-color: #DA291C !important;
        color: #DA291C !important;
    }
    .input-btn input:hover {
        background-color: #DA291C !important;
        color: white !important;
        transition: .5s;
        cursor: pointer
    }
    #kakao-login-btn {
        cursor:pointer
    }
</style>
