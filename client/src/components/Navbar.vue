<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://img.icons8.com/doodle/48/000000/puzzle--v5.png" width="112" height="28">
      </a>

    </div>

    <div id="navbarBasicExample" class="navbar-menu">

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons" @click.prevent="logout">
            <a class="button is-primary">
              <strong>Logout</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
    </nav>
    </div>
</template>

<script>

export default {
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style>

</style>