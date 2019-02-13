<template>
  <div>
    <h1>{{post.title}}</h1>
    <small>Author: <b>{{allUsers.find(user => user.id === post.userId).name}}</b></small>
    <p class="content">{{post.body}}</p>

    <div class="comments">
      <h2>{{this.comments.length}} comments:</h2>
      <commentItem v-for="comment in comments" :key="comment.id" :comment="comment" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import commentItem from '~/components/commentItem'  

export default {
  async asyncData({ params, $axios }) {
    let post = await $axios.get(`/posts/${params.id}`)
    let comments = await $axios.get(`/comments?postId=${params.id}`)
    return {
       post: post.data,
       comments: comments.data
    }
  },

  components: {
    commentItem
  },

  computed: {
    ...mapState('users', ['allUsers'])
  }
}
</script>

<style lang="scss">
.content {
  margin-top: 20px;
}
</style>
