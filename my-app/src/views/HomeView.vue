<template>
  <div>
    {{ name }}
    {{ email }}
    {{ password }}
  </div>
</template>
<script>
 export default {
    name:"HomeView",
    data(){
      return{
        name: null,
        email: null,
        password: null
      }
       
    },
    mounted(){
            const data = sessionStorage.getItem('loginForm');
            const parsed = JSON.parse(data);
            this.name = parsed.name;
            this.email = parsed.email;
            this.password=parsed.password;
            
        }
}
</script>