<template>
    <div class="columns is-centered">
        <div class="column">
            <div class="bd-snippet-preview">
                <table class="table">
                    <thead>
                    <tr>
                        <th>UID</th>
                        <th>Email</th>
                        <th>Имя пользователя</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            {{currentUser.uid}}
                        </td>
                        <td>
                            {{currentUser.email}}
                        </td>
                        <td>
                            {{currentUser.userName}}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <h1>Axios example</h1>
                <ul class="list-group" v-if="countriesData.length">
                    <li class="list-group-item" v-for="country in countriesData">
                        {{country.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters(['currentUser'])
        },
        data() {
            return {
                countriesData: []
            }
        },
        created() {
            this.$http.get('https://restcountries.eu/rest/v2/').then((response) => {
                this.countriesData = response.data
            });
        }
    }
</script>

<style scoped>
    h1 {
        font-weight: bold;
        font-size: 22px;
        margin-bottom: 15px;
    }
    table {
        width: 100%;
    }
    
    .list-group {
        text-align: left;
    }

    .list-group-item {
        border: 1px solid #dedada;
        border-radius: 4px;
        padding: 10px;
    }
</style>