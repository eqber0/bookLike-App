<template>
  <appHeader />
  <div class="flex flex-row">
    <Sidebar @category-changed="updateBookmarkList" />
    <appBookmarkList v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>Bookmark bulunmamaktadır.</div>
  </div>
</template>

<script>
import Sidebar from "@/components/Home/Sidebar.vue"
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      bookmarkList: [],
    }
  },
  created() {
    this.$appAxios
      .get("/bookmarks?_expand=category&_expand=user")
      .then((bookmark_list_response) => {
        this.bookmarkList = bookmark_list_response?.data || []
      })
  },
  methods: {
    updateBookmarkList(categoryId) {
      const url = categoryId
        ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`
        : `/bookmarks?_expand=category&_expand=user`
      this.$appAxios.get(url).then((bookmark_list_response) => {
        this.bookmarkList = bookmark_list_response?.data || []
      })
    },
  },
}
</script>
