<template>
    <div class="columns is-centered">
        <form class="column is-two-fifths" @submit.prevent="login(userData)">
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" v-model="userData.email">
                </div>
            </div>
            <div class="field">
                <label class="label">Пароль</label>
                <div class="control">
                    <input class="input" type="password" v-model="userData.password">
                </div>
            </div>
            <div class="control">
                <button class="button is-primary">Войти</button>
            </div>
        </form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        data() {
            return {
                userData: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions(['login'])
        }
    }
</script>