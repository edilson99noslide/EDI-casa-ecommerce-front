<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const headers = ['nome', 'email']

const rows = [
  {
    name: 'nome',
    email: 'email@example.com'
  }
]
</script>

<template>
  <div class="border rounded-md overflow-x-auto">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead v-for="(header, headerIndex) in headers" :key="'col-header-' + headerIndex">
            {{ header }}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(row, headerIndex) in rows" :key="'row-' + headerIndex">
          <TableCell
            v-for="(rowCel, rowIndex) in row"
            :key="rowIndex"
          >
            {{ rowCel }}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
