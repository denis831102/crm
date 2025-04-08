<template>
  <div>
    <h1 class="hMain" @click.prevent="$router.push({ name: 'profile' })">
      Інформаційна система VUE 3 (testing 2)
    </h1>
    <RouterView class="sRout" />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 20px;
}
* {
  margin: 0;
  /* padding: 0; */
  box-sizing: border-box;
}
.hMain {
  padding: 15px;
  background: #56897847;
  box-shadow: 1px 0px 9px 3px #568989;
}
.sRout {
  display: flex;
  /* border: 1px solid teal; */
  margin: 10px 0;
  background: #f4f7f7;
  padding: 20px 0;
}
</style>
