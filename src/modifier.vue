<template>
<div>
    
        New movie<br />
        Title : <input type="text" v-model="movie_to_edit.title" /><br />
        Year : <input type="text" v-model="movie_to_edit.year" /><br />
        Synopsys : <textarea v-model="movie_to_edit.synopsys"></textarea><br />
        <button v-on:click="save">Save</button>
   
</div>
</template>

<script>
export default {
    data(){
        return {
            message: "Hello",
            movie_to_add: {},
            movie_to_edit: null,
            search: "",
            movies: {
                shared_data: window.shared_data
            }
        }
    },

    methods: {
       

        
        save: function() {
            this.movie_to_edit = null
        },
        remove: function(index) {
            this.movies.splice(index, 1)
        }
    },

    created: function() {
        console.log("Created")
    },

    computed: {
        firstletter: function() {
            return this.message[0]
        },
        movies_search: function() {
            return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1);
        }
    }
}
</script>

<style>
#msg {
  color: red;
}
</style>