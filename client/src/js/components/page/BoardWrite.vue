<template>
    <div>
        <div class="input-wrapper">
            <div class="title-wrapper">
                <el-input v-model="title" type="text" placeholder="제목을 입력하세요."></el-input>
            </div>
            <div class="writer-info">
                <b>작성자</b> &nbsp;{{user.id}}
            </div>
            <div class="content-wrapper">
               <el-input v-model="content" class="content-input" type="textarea" resize="none" ></el-input>
            </div>

            <div class="button-wrapper">
                <el-button @click="writeOk()">작성</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      title: '',
      content: ''

    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user.session
    })
  },
  methods: {
    ...mapActions(['insertBoard']),
    writeOk () {
      if (confirm('작성하시겠습니까?')) {
        const board = {
          no: 0,
          title: this.title,
          content: this.content,
          writer: this.user.id,
          date: '',
          view_count: 0
        }
        this.insertBoard(board).then((res) => {
          this.$router.push('/board')
        })
      }
    }
  }
}
</script>

<style>
    .writer-info {
        padding:10px;
        margin:10px;
        color:#50545A
    }
    .input-wrapper {
        margin: 0 100px;
        background-color: #e1e1e1;
        border-radius: 5px;
        padding: 5px;
    }
    .title-wrapper, .content-wrapper{
        background-color: white;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
    }
    .content-wrapper{
        height:500px;
    }
    .el-textarea__inner {
        height:500px !important;
    }
</style>
