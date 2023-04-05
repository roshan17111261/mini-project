<template>
  <div class="col-5">
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Enter your Name</label>
        <input type="text" class="form-control" name="name" v-model="name">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" name="email" placeholder="name@example.com" v-model="email">
      </div>
      <div class="mb-3">
        <div>
          <label for="Password" class="col-form-label">Password</label>
        </div>
        <div >
          <input type="password" name="Password" class="form-control" v-model="password" >
        </div>
        <div>
          <span id="passwordHelpInline" class="form-text">
            Minimum length 8 character.
          </span>
        </div>
      </div>

      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" name="check">
        <label class="form-check-label" for="check">Check me out</label>
      </div>
      <button @click="submit" type="button" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "ContactView",
  data(){
     return{
      name: null,
      email: null,
      password: null,

     }
  },
  methods:{
    submit(e){
      
      const loginForm = {

        name:this.name,
        email:this.email,
        password :this.password
       }
       console.log(loginForm);
       sessionStorage.setItem('loginForm',JSON.stringify(loginForm));
      
    }
  }
}
</script>