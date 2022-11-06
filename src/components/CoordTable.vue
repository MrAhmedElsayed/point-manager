<template>
  <div>
    <b-table
      responsive="sm"
      striped
      hover
      bordered
      small
      :items="items"
      :fields="fields"
      class="text-center"
      ref="selectableTable"
      select-mode="single"
      selectable
      @row-selected="onRowSelected"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      :current-page="currentPage"
      :per-page="perPage"
    ></b-table>
    <b-col sm="7" md="6" class="my-1">
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="fill"
        size="sm"
        class="my-0"
      ></b-pagination>
    </b-col>
    <p>
      Selected Rows:<br />
      {{ selected }}
    </p>
  </div>
</template>

<script>
// https://bootstrap-vue.org/docs/icons#button-toolbar
export default {
  name: "CoordTable",
  data() {
    return {
      fields: ["PN", "X", "Y", "Z"],
      items: [
        { PN: 900, X: 777777.777, Y: 2222222.222, Z: 1600.543 },
        { PN: 2, X: 100, Y: 200, Z: 0 },
        { PN: 3, X: 60, Y: 30, Z: 0 },
        { PN: 60, X: 60, Y: 30, Z: 100 },
        { PN: 4, X: 180, Y: 360, Z: 11 },
        { PN: 34, X: 180, Y: 360, Z: 11 },
        { PN: 40, X: 180, Y: 360, Z: 11 },
      ],
      selected: [],
      sortBy: "PN",
      sortDesc: false,
      sortDirection: "asc",
      currentPage: 1,
      totalRows: 1,
      perPage: 5,
    };
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    onRowSelected(items) {
      this.selected = items;
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows();
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected();
    },
    selectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.selectRow(2);
    },
    unselectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.unselectRow(2);
    },
  },
};
</script>

<style scoped></style>
