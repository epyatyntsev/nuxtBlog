<template>
  <section>
    <h1>Posts by {{author.name}}</h1>
    <div class="row row-eq-height">
      <blogItem v-for="post in userPosts" :key="post.id" :post="post"/>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import blogItem from '~/components/blogItem'

export default {
  async asyncData({ params, $axios }) {
    let userPosts = await $axios.get(`/posts?userId=${params.id}`)
    return {
       userPosts: userPosts.data,
    }
  },

  components: {
    blogItem
  },

  data: () => ({
    author: {}
  }),

  computed: {
    ...mapState('users', ['allUsers'])
  },

  created() {
    this.author = this.allUsers.find(user => user.id == this.$route.params.id)
  }
}
</script>

<style lang="scss">
.content {
  margin-top: 20px;
}
</style>
