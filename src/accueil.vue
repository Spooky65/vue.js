<template>
<div>
    
    Search : <input type="text" v-model="search" />

    <ul>
        <movie-item v-for="(movie, index) in movies_search" v-bind:key="movie.title" v-bind:movie="movie" v-on:edit="edit" v-on:remove="remove(index)"></movie-item>
    </ul>
    <router-link tag="button" to="/ajouter">
        ajouter
    </router-link>
    
</div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello",
            movie_to_add: {},
            movie_to_edit: null,
            search: "",
            data: {
                shared_data: window.shared_data
            }
        }
    },

    methods: {
        goBack () {
        window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/')
        },
        remove: function(index) {
            this.movies.splice(index, 1)
        },
        movies_search: function() {
            return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1);
        }
    },

    created: function() {
        console.log("Created")
    },

    computed: {
        firstletter: function() {
            return this.message[0]
        },
        
    }
}
</script>

<style>
#msg {
  color: red;
}
</style>