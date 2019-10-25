<template>
    <el-container>
      <b-header></b-header>
      <el-container class="container-body">
        <b-aside />

        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>
      <el-footer>Copyright © 1996-2017 LOTTE. All Rights reserved.</el-footer>
    </el-container>

</template>

<script>
import bHeader from './js/components/layout/Header'
import bAside from './js/components/layout/Aside'

export default {
  components: {
    bHeader, bAside
  },

  name: 'app'
}
</script>

<style>

footer {
  background-color: rgb(80,84,90);
  color: #DDDDDD;
  line-height: 60px;
  font-size: 13px
}
footer, main{
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1)
}
section{
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden
}
body {
  margin : 0px;
  font-family: "NotoKR","San-Serif";
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;

}
</style>
