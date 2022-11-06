<template>
  <layout-config :showNav="showNav">
    <template v-slot:layout-content>
      <h1>Export Points</h1>
    </template>
  </layout-config>
</template>

<script>
import LayoutConfig from "@/components/LayoutConfig";
export default {
  name: "ExportPoints",
  components: {
    LayoutConfig,
  },
  data: () => ({
    showNav: true,
  }),
};
</script>

<style scoped></style>
