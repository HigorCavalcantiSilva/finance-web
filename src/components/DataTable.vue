<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <q-input
        filled
        dense
        v-model="filter"
        placeholder="Pesquisar..."
        class="q-mt-md"
        @input="filterTable"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </q-card-section>

    <q-table
      :rows="filteredRows"
      :columns="columns"
      row-key="id"
      flat
      dense
      v-model:pagination="pagination"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn flat round icon="edit" @click="$emit('edit-row', props.row)" />
          <q-btn
            flat
            round
            icon="delete"
            color="negative"
            @click="$emit('delete-row', props.row)"
          />
        </q-td>
      </template>
    </q-table>
  </q-card>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    title: {
      type: String,
      default: 'Tabela',
    },
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filter: '',
      pagination: {
        page: 1,
        rowsPerPage: 5,
      },
    }
  },
  computed: {
    filteredRows() {
      if (!this.filter) {
        return this.rows
      }
      const filter = this.filter.toLowerCase()
      return this.rows.filter((row) =>
        Object.values(row).some((value) => String(value).toLowerCase().includes(filter)),
      )
    },
  },
  methods: {
    filterTable() {
      this.pagination.page = 1 // Reset page when filtering
    },
  },
}
</script>

<style scoped>
.q-mt-md {
  margin-top: 16px;
}
</style>
