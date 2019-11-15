<template>
    <div>
        <div class="board-wrapper">
            <table class="board-table">
                <thead>
                    <th>글 번호</th>
                    <th>제목</th>
                    <th>글쓴이</th>
                    <th>날짜</th>
                    <th>조회수</th>
                </thead>
                <tbody>
                    <tr class="board-tr" v-for="(board,index) in pageBoard" :key="index" @click="detailPage(board.no)">
                        <td class="board-el board-no">{{board.no}}</td>
                        <td class="board-el board-title">{{board.title}}</td>
                        <td class="board-el board-writer">{{board.writer}}</td>
                        <td class="board-el board-date">{{board.date}}</td>
                        <td class="board-el board-view-count">{{board.viewCount}}</td>
                    </tr>
                </tbody>
            </table>

        </div>

        <div class="pagination">
          <el-pagination
            @current-change="curChange"
            :page-size="pageSize"
            :pager-count="5"
            layout="prev, pager, next"
            :total="boardList.length">
          </el-pagination>
        </div>
        <div class="btn-wrapper">
            <el-button @click="writePage">글쓰기</el-button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      currentPage: 1,
      pageBoard: [],
      pageSize: 5
    }
  },
  methods: {
    ...mapActions(['getBoardList', 'getBoard']),
    writePage () {
      this.$router.push('/board/write')
    },
    detailPage (no) {
      const board = {
        no: no
      }
      this.getBoard(board).then((res) => {
        console.log(res.data)
      })
      this.$router.push('/board/detail')
    },
    curChange (no) {
      console.log(no)
      let start = (no - 1) * this.pageSize
      let end = start + this.pageSize
      this.pageBoard = this.boardList.slice(start, end)
    }
  },
  computed: {
    ...mapState({
      boardList: (state) => state.board.boardList
    })
  },
  created () {
    this.getBoardList().then((res) => {
      this.pageBoard = res.slice(0, this.pageSize)
    })
    console.log(this.boardList)
    console.log(this.pageBoard)
  }
}
</script>

<style>
    .board-wrapper {
        margin: 5px 50px;
    }
    .board-table {
        width: 100%;
        border-collapse: collapse
    }
    .board-table th {
        background-color:#50545a ;
        padding:10px ;
        color: #DDD;
        font-size: 14px;
        text-align: left
    }
    .btn-wrapper {
        margin : 5px 50px;
    }
    .board-no {
        width:7%;
        height: 30px;
        text-align: center;

    }
    .board-title{
        width: 50%
    }
    .board-writer{
        width: 20%
    }
    .board-date{
        width: 10%
    }
    .board-el{
        border-bottom: 1px #50545a solid;
        height: 40px;
        font-size: 15px;
        padding:5px;
    }
    .board-tr {
        cursor:pointer;
    }
    tbody :hover{
        background-color: #e1e1e1;
    }
    .pagination{
      text-align: center
    }
</style>
