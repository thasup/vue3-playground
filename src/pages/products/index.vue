<script setup lang="ts">
interface TableHeader {
  title: string
  key: string
}

const productStore = useProductStore()
const { productList: items } = toRefs(productStore)

const headers: TableHeader[] = [
  {
    title: 'Name',
    key: 'title',
  },
  {
    title: 'Price',
    key: 'price',
  },
  {
    title: 'Brand',
    key: 'brand',
  },
]

onMounted(() => {
  productStore.getDeviceList()
})
</script>

<template>
  <div
    class="device"
  >
    <PageHeader title="Products" />
    <VTable
      class="table-rounded"
      fixed-header
      hide-default-footer
      disable-sort
    >
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header.key"
          >
            {{ header.title }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="!items.length">
          <td
            colspan="4"
            class="text-center"
          >
            No Data
          </td>
        </tr>
        <template v-else>
          <tr
            v-for="(row, index) in items"
            :key="index"
          >
            <td>
              {{ row.title }}
            </td>
            <td>
              {{ row.price }}
            </td>
            <td>
              {{ row.brand }}
            </td>
          </tr>
        </template>
      </tbody>
    </VTable>
  </div>
</template>
