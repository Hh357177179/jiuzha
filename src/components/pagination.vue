<template>
      <!-- :current-page.sync="currentPage" -->
      <!-- v-bind="$attrs" -->
  <div :class="{'hidden':hidden}" class="pagination-container">
    <el-pagination
      :background="background"
      :page-size.sync="pageSize"
      :page-sizes="pagesizes"
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
/* eslint-disable */
// import { scrollTo } from '@/utils/scrollTo'
export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 3
    },
    limit: {
      type: Number,
      default: 20
    },
    pagesizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'prev, pager, next'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    },
    scrollNum: {
      type: Number,
      default: 0
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get() {
        return this.limit
      },
      set(val) {
        this.$emit('update:limit', val)
      }
    }
  },
  mounted() {
    // console.log(this.page)
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('pagination', { page: this.currentPage, limit: val })
      if (this.autoScroll) {
        // scrollTo.scrollTo(this.scrollNum, 800)
      }
    },
    handleCurrentChange(val) {
      this.$emit('pagination', { page: val, limit: this.pageSize })
      if (this.autoScroll) {
        // scrollTo.scrollTo(this.scrollNum, 800)
      }
    }
  }
}
/* eslint-enable */
</script>

<style>
/* .pagination-container{

}
.pagination-container .el-pager li{
  height: 30px;
  line-height: 30px;
} */
.pagination-container .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #4DD0E1;
    color: #fff;
}
</style>

<style scoped>
/* .pagination-container {
  background: #fff;
  padding: 32px 16px;
}
.pagination-container.hidden {
  display: none;
} */
</style>
