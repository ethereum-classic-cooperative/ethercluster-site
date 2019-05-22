<template>
    <div class="container-fluid footer">
        <div class="row">
            <div class="col-sm-4 text-center">
                <h4 class="footer-category">Connect With Us On Social Media</h4>
                <hr style="border-color:#33ff99;">
                <br>
                <font-awesome-icon :icon="['fab', 'github']" size="3x" :style="{ color: '#33ff99' }"></font-awesome-icon><br><br>
                <font-awesome-icon :icon="['fab', 'twitter']" size="3x" :style="{ color: '#33ff99' }"></font-awesome-icon><br><br>
                <font-awesome-icon :icon="['fab', 'medium']" size="3x" :style="{ color: '#33ff99' }"></font-awesome-icon><br><br>
                <font-awesome-icon :icon="['fab', 'discord']" size="3x" :style="{ color: '#33ff99' }"></font-awesome-icon><br><br>
            </div>
            <div class="col-sm-4">
                <img src="../assets/phoenix.png" class="img-fluid" alt="">
            </div>
            <div class="col-sm-4">
                <h4 class="footer-category">Ethercluster is proudly built by the Ethereum Classic Cooperative.</h4>
                <p>If you want to learn more about Ethereum Classic, sign up for our newsletter below!</p>
                <form>
                    <input style="width:50%;" type="text"/><br>
                    <button class="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
    .footer {
        background-color: black;
    }
    .fa-color {
        color: white;
    }
    .footer-category {
        color: white;
        margin-top: 164px;
    }
</style>