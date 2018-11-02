<template>
    <div class="columns is-centered">
        <div class="column">
            <div class="s-user-info">
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
        }
    }
</script>