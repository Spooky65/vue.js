<template>
<div>

    <p>title : {{movies.title}}</p>
    <p>year : {{movies.year}}</p>
    <p>synopsys : {{movies.synopsys}}</p>
    
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

</style>