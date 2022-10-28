<template>
  <div class="p-4">
    <div class="d-flex gap-4 flex-wrap">
      <bookmarkListItem v-for="i in 10" :key="i" />
    </div>
  </div>
</template>

<script>
import bookmarkListItem from "./BookmarkListItem.vue"
export default {
  components: {
    bookmarkListItem,
  },
}
</script>
