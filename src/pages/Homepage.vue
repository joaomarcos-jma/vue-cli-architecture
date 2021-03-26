<template>
  <el-row>
    <el-col>
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/G20_developing_nations_map.svg/700px-G20_developing_nations_map.svg.png"
          class="image"
        />
        <div style="padding: 14px;">
          <div class="bottom">
            <el-button @click="goTo()" type="primary" plain>ACESSAR PORTAL</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goTo() {
      if (this.$store.state.moduleA.isLoggedIn) {
        return this.$router.push("/auth-page");
      }
      this.$router.push("/login");
    }
  }
};
</script>
