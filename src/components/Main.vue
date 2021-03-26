<template>
  <div class="common-layout">
    <router-view />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    isLoading: state => state.moduleA.isLoading,
    notify: state => state.moduleA.notify
  }),
  watch: {
    isLoading(val) {
      if (val) {
        return this.$loading({
          lock: true,
          text: "Aguarde...",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
      }
      this.$loading().close();
    },
    notify(val) {
      this.$notify({
        title: val.title,
        message: val.label,
        type: val.type
      });
    }
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
