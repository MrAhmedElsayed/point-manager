<template>
  <layout-config :showNav="showNav">
    <template v-slot:layout-content>
      <div class="container">
        <div class="row justify-content-center">
          <div class="mx-4 col-11 my-4">
            <b-form-file
              v-model="file"
              :state="Boolean(file)"
              placeholder="Choose a file or drop it here..."
              accept=".csv, .txt, .xlsx, .xls"
            ></b-form-file>
          </div>
        </div>

        <hr class="border border-info" />

        <div class="row justify-content-center">
          <div class="mx-3 col-12">
            <CoordTable />
          </div>
        </div>
      </div>
    </template>
  </layout-config>
</template>

<script>
import LayoutConfig from "@/components/LayoutConfig";
import CoordTable from "@/components/CoordTable";

export default {
  name: "ImportPoints",
  components: {
    CoordTable,
    LayoutConfig,
  },
  data: () => ({
    showNav: true,
    file: null,
  }),
};
</script>

<style scoped>
.table-div {
  /*width: 100%;*/
  /*height: 250px;*/
  /*border: 2px solid red;*/
}
</style>
