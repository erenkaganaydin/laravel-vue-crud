<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"categoryAdd"}' class="btn btn-primary">Create Category</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Category</h4>
                </div>
                <div class="card-body">
                     <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="categories.length > 0">
                                <tr v-for="category in categories" :key="key">
                                    <td>{{ category.id }}</td>
                                    <td>{{ category.title }}</td>
                                    <td>{{ category.description }}</td>
                                    <td>
                                        <router-link :to='{ name:"categoryEdit" , params:{ id:category.id } }' class="btn btn-success">Edit</router-link>
                                        <button type="button" @click="deleteCategory(category.id)" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Categories Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>    

<script>
import axios from "axios";

export default {
   name:"categories",
     beforeMount(){
        this.getCategories()
    },
    data(){
        return{
            categories:[]
        }
    },
  
    methods:{
        async getCategories(){
            await axios.get('/api/category').then(response=>{
                this.categories = response.data
                console.log(this.categories.length)
            }).catch(error=>{
                console.log(error)
                categories = []
            })
        },
        deleteCategory(id){
            if(confirm("Are you sure to delete this category ?")){
                axios.delete('/api/category/'+id).then(respone=>{
                    this.getCategories()
                    
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>