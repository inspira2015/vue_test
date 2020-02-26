<template>
  <div id="app">
    <v-btn @click="sizeToFit">size to fit</v-btn>
    <v-btn @click="autoSizeAll">auto size</v-btn>
    <ag-grid-vue style="width: 1000px; height: 500px;" class="ag-theme-balham" :floatingFilter="true" :gridReady="onGridReady" :enableColResize="true" :columnDefs="columnDefs" :rowData="rowData" :enableSorting="true" :enableFilter="true">
    </ag-grid-vue>
  </div>
</template>

<script>
import { transformHeader, transformRows } from './lib/grid';
import { AgGridVue } from 'ag-grid-vue';
import "ag-grid-enterprise";

export default {
  name: "App",
    data: function() {
    return {
      payload: JSON.parse('{"header":"Item id, Group Activity name, Location, Type, Open\/Closed, Start date of first session, End date of last session, Number of sessions, Waiting for allocation, Number of sessions open for enrolment","data":{"rows":[{"id":22031,"data":[22031,"eq","YASS","Program","Open","06\/09\/2018","18\/09\/2018",13,13,13]},{"id":21860,"data":[21860,"Thursday YODSS- Zumba","YODSS","Program","Open","06\/09\/2018","06\/09\/2018",1,1,1]},{"id":21265,"data":[21265,"YODSS Music with Martijn in Eleebana","YODSS","Program","Closed","03\/09\/2018","03\/09\/2018",1,0,1]},{"id":20771,"data":[20771,"YASS Pollination & Picnic @ Royal Botanic Garden","YASS","Program","Open","22\/09\/2018","22\/09\/2018",1,3,1]},{"id":20765,"data":[20765,"YASS Movie Night @ Ella","YASS","Program","Open","21\/09\/2018","21\/09\/2018",1,3,1]},{"id":20760,"data":[20760,"YASS Dulwich Hill Village Fair","YASS","Program","Open","16\/09\/2018","16\/09\/2018",1,3,1]},{"id":20753,"data":[20753,"YASS Boys Dinner @ Wong\u0027s, Wests Ashfield","YASS","Program","Open","15\/09\/2018","15\/09\/2018",1,1,1]},{"id":20723,"data":[20723,"YASS Spring BBQ @ Ella","YASS","Program","Open","08\/09\/2018","08\/09\/2018",1,5,1]},{"id":20717,"data":[20717,"YASS Talent Show @ Ella","YASS","Program","Open","07\/09\/2018","07\/09\/2018",1,4,1]},{"id":20708,"data":[20708,"YASS Girls Dinner @ Wong\u0027s, Wests Ashfield","YASS","Program","Closed","01\/09\/2018","01\/09\/2018",1,0,1]},{"id":20681,"data":[20681,"YASS Father\u0027s Day Art & Craft @ Ella","YASS","Program","Closed","01\/09\/2018","01\/09\/2018",1,0,1]},{"id":20598,"data":[20598,"YASS Yumcha @ Phoenix Rhodes","YASS","Program","Closed","25\/08\/2018","25\/08\/2018",1,0,1]},{"id":20591,"data":[20591,"Cancelled YASS Yumcha @ Phoenix Rhodes","YASS","Program","Closed","20\/08\/2018","20\/08\/2018",1,0,1]},{"id":20582,"data":[20582,"YASS Friday Night Footy @ Ella","YASS","Program","Closed","24\/08\/2018","24\/08\/2018",1,0,1]}]}}')
    };
  },
   components: {
    AgGridVue
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.gridApi.setHeaderHeight(50);
      // this.autosizeHeaders();
    },
    sizeToFit() {
      this.gridApi.sizeColumnsToFit();
      // this.autosizeHeaders();
    },
    autoSizeAll() {
      var allColumnIds = [];
      this.columnApi.getAllColumns().forEach(function(column) {
        allColumnIds.push(column.colId);
      });
      this.columnApi.autoSizeColumns(allColumnIds);
    }
  },
  computed: {
    columnDefs() {
      return transformHeader(this.payload.header);
    },
    rowData() {
      return transformRows(this.payload.data.rows, this.columnDefs);
    }
  }
};
</script>

<style>

</style>
