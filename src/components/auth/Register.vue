<template>
    <div class="columns is-centered">
        <form class="column is-two-fifths" @submit.prevent="registerUser(registerData)">
            <div class="field">
                <label class="label">Имя</label>
                <div class="control">
                    <input class="input" type="text" v-model="registerData.name">
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" v-model="registerData.email">
                </div>
            </div>
            <div class="field">
                <label class="label">Пароль</label>
                <div class="control">
                    <input class="input" type="password" v-model="registerData.password">
                </div>
            </div>
            <div class="control">
                <button class="button is-primary" type="submit">Регистрация</button>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        data() {
            return {
                registerData: {
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
        computed: {
            ...mapGetters(['currentUser'])
        },
        methods: {
            ...mapActions(['registerUser'])
        }
    }
</script>

<style scoped>

</style>