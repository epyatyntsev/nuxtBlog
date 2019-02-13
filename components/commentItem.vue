<template>
  <div class="comment">
    <h4>{{comment.name}}</h4>
    <small>Author: <b>{{comment.email}}</b></small>
    <p>{{comment.body}}</p>
  </div>
</template>

<script>

export default {
  props: ['comment'],

}
</script>

<style lang="scss" scoped>
.comment{
  margin-bottom: 20px;
  padding: 10px;
  background: #eaeaea;

  h4 {
    margin-bottom: 0px
  } 

  p {
    margin-bottom: 0;
    margin-top: 10px
  }
}
</style>

