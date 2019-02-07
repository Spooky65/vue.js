
<template>
    <li>
        <router-link tag="a" v-bind:to="'/detail/'+movie.id">
        {{ shared_data.movies.title }}
        </router-link>
        <router-link tag="button" to="/modifier">
        modifier
        </router-link>

        <button v-on:click="supp">delete</button>
    </li>
</template>

<script> 
export default{
    props: ['movie'],
    data : function(){
        return{
            data: {
                shared_data: window.shared_data
            }
        }
    },
    methods: {
        supp:function(){
            this.$emit('remove',this.movie);
        },
        edit:function(){
            this.$emit('edit',this.movie);
        },
    }
}

</script>

<style>

</style>