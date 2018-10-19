<template>
    <header>
        <div class="container">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                    </a>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary">
                                    <strong>Регистрация</strong>
                                </a>
                                <a class="button is-light">
                                    Логин
                                </a>
                            </div>
                        </div>
                        <div class="navbar-item">
                            <a class="button is-light">
                                <strong>Мой заказ</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {

    }
</script>

<style scoped lange="sass">
    .navbar-btn a {
        color: white;
    }

    .li-pointer {
        cursor: pointer;
    }

    .li-pointer:hover {
        cursor: pointer;
    }
</style>