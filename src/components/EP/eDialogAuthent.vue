<template>
  <el-dialog
    :modelValue="props.visible"
    title="Авторизація"
    width="500"
    :before-close="handleClose"
  >
    <el-form
      :model="form"
      label-width="auto"
      style="max-width: 600px; border: 0"
    >
      <el-form-item label="Прізвище">
        <el-input v-model="form.login" />
      </el-form-item>
      <el-form-item label="Пароль">
        <el-input v-model="form.password" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="enter">Увійти</el-button>
        <el-button @click="close">Скасувати</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, defineProps, defineEmits, computed } from "vue";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const props = defineProps({
  visible: Boolean,
});

const emit = defineEmits([]);

const form = reactive({
  login: "",
  password: "",
});

const store = useStore();
const getUsers = computed(() => store.getters.getUsers);
const changeAuthenticated = (val) => store.commit("changeAuthenticated", val);

const router = useRouter();

const enter = () => {
  emit("update:visible", false);

  if (+form.password == getUsers.value[0].password) {
    changeAuthenticated(true);
    router.push({ name: "crm" });
  } else {
    router.push({ name: "profile" });
    ElMessage.error("Oops, пароль не вірний");
  }
};

const close = () => {
  router.push({ name: "profile" });
};

const handleClose = () => {
  ElMessage.warning("Oops, для авторизації треба ввести логін і пароль");
};
</script>
