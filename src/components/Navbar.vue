<template>
    <nav class="navbar navbar-custom">
        <a class="navbar-brand text-link"  href="#">
            <img src="../assets/logo.png" width="300px" height="auto" class="d-inline-block align-top" alt="">
        </a>
        <div>
            <a href="https://ethereum-classic-cooperative.github.io/docs-ethercluster/"><button class="btn" type="submit">Docs</button></a>
            <button class="btn" type="submit">About</button>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
    .navbar-custom {
        background-color: white;
        margin-left: 0px !important;
    }

    .text-link {
        color: black;
    }
</style>
