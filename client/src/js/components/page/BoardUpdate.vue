<template>
    <div>
        <div class="input-wrapper">
            <div class="title-wrapper">
                <el-input v-model="board.title" type="text" placeholder="제목을 입력하세요."></el-input>
            </div>
            <div class="writer-info">
                <b>작성자 </b> &nbsp; {{board.writer}}
            </div>
            <div class="content-wrapper">
               <el-input  v-model="board.content" class="content-input" type="textarea" resize="none" ></el-input>
            </div>

            <div class="button-wrapper">
                <el-button @click="update">수정</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {

  computed: {
    ...mapState({
      board: (state) => state.board.board
    })
  },
  methods: {
    ...mapActions(['getBoard', 'updateBoard']),
    update () {
      if (confirm('내용을 수정하시겠습니까?')) {
        const board = {
          no: this.board.no,
          title: this.board.title,
          content: this.board.content,
          writer: this.board.writer,
          date: this.board.date,
          viewCount: this.board.viewCount
        }

        this.updateBoard(board).then((res) => {
          this.$router.push('/board')
        })
      }
    }
  },
  created () {
    this.getBoard({ no: 0 })
  }
}
</script>

<style>

</style>
