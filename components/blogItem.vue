<template>
  <div class="col-4 column">
    <div class="item">
      <nuxt-link :to="'/post/' + post.id">
        <h3>{{post.title}}</h3>
      </nuxt-link>
      <p>{{post.body}}</p>
      <p>Author: <b><nuxt-link :to="'/author/' + author.id">{{author.name}}</nuxt-link></b></p>
    </div> 
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: ['post'],

  data: () => ({
    author: []
  }),

  computed: {
    ...mapState('users', ['allUsers'])
  },

  created() {
    this.author = this.allUsers.find(user => user.id === this.post.userId)
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: teal;
  transition: color 0.2s ease;

  &:hover {
    color: #003c3c;
  }
}
</style>

