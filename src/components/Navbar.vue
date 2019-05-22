<template>
    <nav class="navbar navbar-custom">
        <a class="navbar-brand text-link"  href="#">
            <img src="../assets/logo.png" width="30px" height="auto" class="d-inline-block align-top" alt="">
            Ethercluster
        </a>
        <div>
            <button class="btn" type="submit">Docs</button>
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
    }

    .text-link {
        color: black;
    }
</style>
