<template>
  <div class="p-4">
    <div class="d-flex gap-4 flex-wrap">
      <bookmarkListItem :item="item" v-for="item in items" :key="item.id" />
    </div>
  </div>
</template>

<script>
import bookmarkListItem from "./BookmarkListItem.vue"
export default {
  components: {
    bookmarkListItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
