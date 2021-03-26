<template>
  <div>
    <div class="block">
      <el-image style="width: 100px; height: 100px" class="image" :src="src"></el-image>
    </div>
    <div class="card-header">
      <el-card class="box-card">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="Login" prop="login">
            <el-input required v-model="ruleForm.login"></el-input>
          </el-form-item>
          <el-form-item label="Senha" prop="password">
            <el-input required v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button plain type="warning" @click="resetForm('ruleForm')">Limpar</el-button>
            <el-button type="success" @click="submitForm('ruleForm')">Entrar</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import auth from "../mixins/rules/auth.js";
export default {
  mixins: [auth],
  data() {
    return {
      ruleForm: {
        login: "",
        password: ""
      },
      src:
        "https://www.iconpacks.net/icons/1/free-user-login-icon-305-thumb.png"
    };
  },
  computed: mapState({
    isLoading: state => state.moduleA.isLoading,
    token: state => state.moduleA.token
  }),
  watch: {
    token: {
      handler() {
        this.$router.push("/auth-page");
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          return this.$store.dispatch("moduleA/login", this.ruleForm);
        }
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
