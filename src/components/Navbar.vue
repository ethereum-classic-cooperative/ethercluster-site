<template>
    <nav class="navbar navbar-custom">
        <a class="navbar-brand text-link"  href="#">
            <img src="../assets/logo.png" width="300px" height="auto" class="d-inline-block align-top" alt="">
        </a>
        <div>
            <a href="https://docs.ethercluster.com/"><button class="btn" type="submit">Docs</button></a>
            <a href="https://medium.com/ethereum-classic/ethercluster-an-open-source-alternative-to-infura-b8799b2122d3"><button class="btn" type="submit">About</button></a>
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
