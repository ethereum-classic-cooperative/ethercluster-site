<template>
    <div class="container-fluid footer">
        <div class="row">
            <div class="col-sm-4 text-center">
                <h4 class="footer-category">Social</h4>
                <hr style="border-color:#33ff99;">
                <br>
                <font-awesome-icon :icon="['fab', 'github']" size="3x" :style="{ color: '#33ff99' }"></font-awesome-icon><br><br>
                <font-awesome-icon :icon="['fab', 'twitter']" size="3x" :style="{ color: '#33ff99' }"></font-awesome-icon><br><br>
                <font-awesome-icon :icon="['fab', 'medium']" size="3x" :style="{ color: '#33ff99' }"></font-awesome-icon><br><br>
                <font-awesome-icon :icon="['fab', 'discord']" size="3x" :style="{ color: '#33ff99' }"></font-awesome-icon><br><br>
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
        margin-top: 20px;
    }
</style>