<template>

  <div class="app-block" >
  sslis
    <table>
      <thead>
        <tr>
          <th v-for="(col, index) in cols">add</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="(col, index) in cols">a</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { unique } from '@/utils/unique.js'

export default {
  name: 'MTable',
  props: {
    cols: {
      type: Array,
      required: true,
      validator: isContent
    },
  },
  components: {},
  
  data() {
    return {
      tableData: {}
    }
  },
  methods: {
  }
}
</script>