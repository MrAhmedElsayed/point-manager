<template>
  <layout-config :show-nav="showNav" class="position-relative h-100">
    <template v-slot:layout-content>
      <div class="container mx-auto text-center">
        <div class="app-logo d-flex align-items-center justify-content-center">
          <div>
            <b-icon-bullseye scale="4" variant="info"></b-icon-bullseye>
          </div>
        </div>
        <h2 class="app-name mt-5">Points Manager</h2>
        <div class="container mx-auto text-center mt-5">
          <router-link
            to="/import"
            class="btn btn-outline-success btn-block btn-lg p-4 roboto-condensed-font"
          >
            Import
          </router-link>
          <router-link
            to="/export"
            class="mt-5 btn btn-outline-success btn-block btn-lg p-4 roboto-condensed-font"
          >
            Export
          </router-link>
        </div>
      </div>
      <router-link
        to="/help"
        class="position-absolute"
        style="top: 85%; right: 10%"
      >
        <b-icon-question-circle
          scale="1.5"
          variant="info"
        ></b-icon-question-circle>
      </router-link>
    </template>
  </layout-config>
</template>

<script>
import LayoutConfig from "@/components/LayoutConfig";
export default {
  name: "HomeView",
  components: { LayoutConfig },
  data: () => ({
    showNav: false,
  }),
};
</script>

<style scoped>
h1 {
  font-family: "Righteous", serif;
}
.app-logo {
  height: 100px;
  width: 100px;
  border: 2px solid red;
  border-radius: 10px;
  margin: 41px auto 15px auto;
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
}

.app-logo > div {
  width: 70px;
  height: auto;
}

.app-name {
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 37px;
  align-items: center;
  text-align: center;
  background: -webkit-linear-gradient(rgb(137, 245, 180), rgb(6, 98, 64));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Righteous", cursive;
}
</style>
