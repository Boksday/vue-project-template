<template>
    <div class="login-wrapper">
        <div class="box-card">
            <div class="title item">로그인</div>
            <el-input class="input item" type="text" placeholder="아이디를 입력하세요" v-model="test"></el-input>
            <el-input class="input item" type="password" placeholder="비밀번호를 입력하세요"></el-input>
            <el-input class="input-btn item" type="submit" value="로그인"></el-input>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      test: ''
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
</style>
