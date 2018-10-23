<template>
    <div class="columns is-centered">
        <div class="column is-two-fifths">
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
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters(['currentUser'])
        }
    }
</script>