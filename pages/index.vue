<template>
  <section>
    <div class="row row-eq-height">
      <blogItem v-for="post in postToShow" :key="post.id" :post="post"/>
    </div>
  </section>
</template>

<script>
import blogItem from '~/components/blogItem'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  fetch ({ store, params }) {
    return store.dispatch('posts/GET_POSTS')
  },
  components: { blogItem },

  computed: {
    ...mapState('posts', ['postToShow'])
  },

  created () {
    if (process.browser) { 
      window.addEventListener('scroll', this.handleScroll);
    }
  },

  destroyed () {
    if (process.browser) { 
      window.removeEventListener('scroll', this.handleScroll);
    }
  },

  methods: {
    ...mapActions('posts', ['MORE_POSTS']),

     handleScroll (e) {
      if ((window.innerHeight + window.pageYOffset)>= document.body.offsetHeight) {
        this.MORE_POSTS()
      }
    }
  }
}
</script>
