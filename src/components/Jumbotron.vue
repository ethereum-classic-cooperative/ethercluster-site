<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row">
                <div class="col-sm-7 text-left">
                    <h1 class="display-4">{{ msg }}</h1>
                    <h2>Open Source Ethereum-based Cloud Architecture</h2>
                    <p class="lead">Our free service allows instant access to Ethereum Classic (ETC) and Ethereum (ETH) main network and Kotti and Goerli test networks.</p>
                    <p class="lead">You can instantly use our endpoint from the buttons below.</p>
                    <p>If you would like to build your own Ethercluster for any EVM-based chain, follow our <a href="https://ethereum-classic-cooperative.github.io/docs-ethercluster/">docs</a> for running your own Ethercluster endpoint. You will learn the most cutting-edge tools in DevOps and Infra-as-Code, including Terraform, Kubernetes and Docker.
                    </p>
                </div>
                <div class="col-sm-5">
                    <img src="../assets/lady_ethercluster.png" style="width: 100%; height: auto">
                </div>
            </div><br><hr><br>
            <div class="row">
                <div class="col-sm-3">
                    <a class="btn btn-connect" data-toggle="collapse" href="#etcConnect" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Connect to ETC
                    </a>
                </div>
                <div class="col-sm-3">
                    <a class="btn btn-connect" data-toggle="collapse" href="#kottiConnect" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Connect to Kotti
                    </a>
                </div>
                <div class="col-sm-3">
                    <a class="btn btn-connect" data-toggle="collapse" href="#mordorConnect" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Connect to Mordor
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <a class="btn btn-connect" data-toggle="collapse" href="#goerliConnect" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Connect to Goerli
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 collapse" id="etcConnect">
                    <div class="card card-body">
                        Connect to <span class="endpoint-link">https://www.ethercluster.com/etc</span> to access ETC RPC Endpoint
                    </div>
                </div>
                <div class="col-sm-4 collapse" id="kottiConnect">
                    <div class="card card-body">
                        Connect to <span class="endpoint-link">https://www.ethercluster.com/kotti</span> to access Kotti RPC Endpoint
                    </div>
                </div>
                <div class="col-sm-4 collapse" id="mordorConnect">
                    <div class="card card-body">
                        Connect to <span class="endpoint-link">https://www.ethercluster.com/mordor</span> to access Mordor RPC Endpoint
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 collapse" id="goerliConnect">
                    <div class="card card-body">
                        Connect to <span class="endpoint-link">https://www.ethercluster.com/goerli</span> to access Goerli RPC Endpoint
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
