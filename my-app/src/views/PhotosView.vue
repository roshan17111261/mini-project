<template>
    <div>
      <h1> This is PhotsView</h1>
      <div v-for="img in images">
        <a :href="img.url" target="_blank">
        <img :src="img.url" :title="img.title" />
        <p> {{ img.title }}</p>
      </a>
        <br/>
      </div>
    </div>
  </template>
  <script>
  
  import { getPhotos} from '../services/photos'

  export default {
      name:"PhotoView",
      data(){
        return{
          images:[]
        }
        
      },
      async mounted()
      {
        console.log('mounted');
        this.images = await getPhotos();

      }
  }
  

  </script>