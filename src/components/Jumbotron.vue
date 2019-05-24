<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 text-left">
                    <h1 class="display-4">{{ msg }}</h1>
                    <h2>Open Source Ethereum-based Cloud Architecture</h2>
                    <p class="lead">Our free service allows instant access to Ethereum Classic network and Kotti test network.</p>
                    <p class="lead">You can instantly use it or follow our docs for running your own Ethercluster endpoint</p>
                </div>
            </div><br><hr><br>
            <div class="row">
                <div class="col-sm-2">
                    <a class="btn btn-connect" data-toggle="collapse" href="#etcConnect" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Connect to ETC
                    </a>
                </div>
                <div class="col-sm-2">
                    <a class="btn btn-connect" data-toggle="collapse" href="#kottiConnect" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Connect to Kotti
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 collapse" id="etcConnect">
                    <div class="card card-body">
                        Connect to <span class="endpoint-link">https://www.ethercluster.com/rpc</span> to access ETC RPC Endpoint
                    </div>
                </div>
                <div class="col-sm-6 collapse" id="kottiConnect">
                    <div class="card card-body">
                        Connect to <span class="endpoint-link">https://www.ethercluster.com/kotti</span> to access Kotti RPC Endpoint
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Yantramanav&display=swap");
@import url("https://fonts.googleapis.com/css?family=Inconsolata&display=swap");

.jumbotron {
    background-color: #33ff99 !important;
    font-family: 'Yantramanav', sans-serif;
    color: black;
}

.btn-connect {
    background-color: black !important;
    color: #33ff99 !important;
    margin-bottom: 15px;
}

.card {
    font-family: 'Inconsolata', monospace;
    color: #33ff99 !important;
    background-color: black !important;
}

.endpoint-link {
    color: red;
}
</style>
