<template>
  <div>
    <div class="p-2 grid grid-cols-8 gap-4">
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
