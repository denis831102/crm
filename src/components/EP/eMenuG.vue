<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    style="height: 50px"
  >
    <el-menu-item index="1">Співробітники</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Робочий простір</template>
      <el-menu-item index="2-1">Операція 2.1</el-menu-item>
      <el-menu-item index="2-2">Операція 2.2</el-menu-item>
      <el-menu-item index="2-3">Операція 2.3</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>Група операцій 2.4</template>
        <el-menu-item index="2-4-1">Операція 2.4.1</el-menu-item>
        <el-menu-item index="2-4-2">Операція 2.4.2</el-menu-item>
        <el-menu-item index="2-4-3">Операція 2.4.3</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Інформація</el-menu-item>
    <el-menu-item index="4">Вихід</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const activeIndex = ref("1");

// const props = defineProps({
//   dialog: Object,
// });

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
  switch (key) {
    case "1":
      //   props.dialog.value.visible = true;
      //   props.dialog.value.text = "Перевірка процеса";
      //   this.$emit("update:dialog.value.visible", true);
      break;
    case "4":
      router.push({ name: "profile" });
      break;
  }
};
</script>
