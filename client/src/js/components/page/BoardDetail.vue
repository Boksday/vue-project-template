<template>
    <div>
        <div class="input-wrapper">
            <div class="title-wrapper">
                <span class="title">{{board.title}}</span>
            </div>
            <div class="writer-info">
                <div><b>작성자 </b> <span class="writer">{{board.writer}}</span></div>
                <div><b>작성일 </b> <span class="date">{{board.date}}</span></div>
                <div><b>조회수 </b> <span class="view-count">{{board.viewCount}}</span></div>
            </div>
            <div class="content-wrapper">
                {{board.content}}
            </div>

            <div class="button-wrapper">
                <el-button @click="goPage('/board')">목록</el-button>
                <el-button @click="goPage('/board/update')" v-if="user.id === board.writer">수정</el-button>
                <el-button @click="delBoard()" v-if="user.id === board.writer">삭제</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      board: (state) => state.board.board,
      user: (state) => state.user.session
    })
  },
  methods: {
    ...mapActions(['getBoard', 'deleteBoard']),
    goPage (page) {
      this.$router.push(page)
    },
    delBoard () {
      if (confirm('게시글을 삭제하시겠습니까?')) {
        const board = {
          no: this.board.no,
          title: this.board.title,
          content: this.board.content,
          writer: this.board.writer,
          date: this.board.date,
          viewCount: this.board.viewCount
        }
        this.deleteBoard(board).then((res) => {
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
