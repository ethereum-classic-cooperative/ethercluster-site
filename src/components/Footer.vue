<template>
    <div class="container-fluid footer">
        <div class="row">
            <div class="col-sm-4 text-center">
                <h4 class="footer-category">Connect With Us On Social Media</h4>
                <hr style="border-color:#33ff99;">
                <br>
                <a href="https://github.com/ethereum-classic-cooperative/"><font-awesome-icon :icon="['fab', 'github']" size="3x" :style="{ color: '#33ff99' }"></font-awesome-icon><br><br></a>
                <a href="https://twitter.com/eth_classic"><font-awesome-icon :icon="['fab', 'twitter']" size="3x" :style="{ color: '#33ff99' }"></font-awesome-icon><br><br></a>
                <a href="https://medium.com/ethereum-classic"><font-awesome-icon :icon="['fab', 'medium']" size="3x" :style="{ color: '#33ff99' }"></font-awesome-icon><br><br></a>
                <a href="https://discord.gg/WnNteTb"><font-awesome-icon :icon="['fab', 'discord']" size="3x" :style="{ color: '#33ff99' }"></font-awesome-icon><br><br></a>
            </div>
            <div class="col-sm-4 offset-sm-4">
                <h4 class="footer-category">Ethercluster is proudly built by the <a href="https://www.etccooperative.org">Ethereum Classic Cooperative</a>, a nonprofit in service to the ETC ecosystem.</h4>
                <p style="color:white">Learn more about ETC <a href="https://www.ethereumclassic.org">here</a> and be sure to check out our <a href="https://etcsummit.com">2019 Summit</a> happening in October!</p>
                <hr style="border-color:#33ff99;">
                <img src="../assets/phoenix.png" class="img-fluid" alt="">
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
