
<template>
  <div class="demo-image__placeholder">
    <div class="block">
      <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
        <el-image style="width: 100%;height: 550px" :src="src">
          <template #placeholder>
            <div class="image-slot">
              <el-skeleton style="width: 100%;height: 550px" animated />
            </div>
          </template>
        </el-image>
        <div style="padding: 14px;">
          <div class="bottom card-header">
            <span class="time">{{ "Painel" }}</span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  }
};
</script>
