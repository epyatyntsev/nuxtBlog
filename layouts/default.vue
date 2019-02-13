<template>
  <div>
    <header>
      <h1> <nuxt-link to="/"> Simple Blog </nuxt-link></h1>
    </header>

    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/assets/css/grid.css';
header{
  padding: 20px;
  text-align: center;
  background: teal;
  margin-bottom: 20px;
  h1 {
    font-size: 45px;
    a {
      color: #fff;
      transition: all 0.2s ease;
      &:hover {
        color: #fff;
        opacity: .8;
        text-decoration: none
      }
    }
  }
}
.column {
  margin-bottom: 20px;
  .item {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    height: 100%;
    padding: 10px;
    transition: box-shadow 0.2s ease;

    h2 {
      text-transform: capitalize;
      font-size: 25px
    }

    &:hover {
       box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
  }
}
</style>

