<template>
  <q-page padding>
    <data-table
      title="Ganhos"
      :columns="columns"
      :rows="rows"
      @edit-row="edit"
      @delete-row="inactive"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import DataTable from 'src/components/DataTable.vue'

export default defineComponent({
  name: 'EarningsIndexPage',
  components: { DataTable },
  data() {
    return {
      columns: [],
      rows: [],
    }
  },
  mounted() {
    this.get()
  },
  methods: {
    edit(row) {
      console.log('Editar:', row)
    },
    inactive(row) {
      console.log('Deletar:', row)
    },
    async get() {
      const { data } = await this.$api.get('/earnings')

      console.log(data)
    },
  },
})
</script>
