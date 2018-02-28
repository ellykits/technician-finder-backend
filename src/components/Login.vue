<template>
  <form @submit.prevent="login" class="content">
    <form-component>
      <div slot="form-header">
        <h3 class="w3-center">LOGIN TO SERVICE</h3>
      </div>
      <div slot="form-content">
        <div class="w3-border-yellow w3-border w3-white w3-margin-bottom w3-padding">
          <div class="w3-section">
            <label class="w3-text-teal">
              <b class="w3-left">Company ID</b>
            </label>
            <input required class="w3-input w3-border w3-light-grey" ref="company_id" type="text">
            <br>
            <label class="w3-text-teal">
              <b class="w3-left">Password</b>
            </label>
            <input required class="w3-input w3-border w3-light-grey" ref="password" type="password">
          </div>
          <div class="w3-section">
            <button class="w3-btn w3-black">
              <i class="fa fa-sign-in"></i> Login</button>
            <button @click.prevent="$router.push('/register/')" class="w3-btn w3-teal">
              <i class="fa fa-plus"></i> Register</button>
          </div>
        </div>
      </div>
      <div v-if="loginHasFailed" slot="form-status">
        <div class="w3-red w3-padding w3-margin-bottom ">
          <h3>Login Failed!</h3>
          <p>Please check your Company ID and Password.</p>
        </div>
      </div>
      <div slot="form-footer">

      </div>
    </form-component>
  </form>
</template>

<script>
import axios from 'axios'
import formComponent from './FormComponent'
export default {
  data() {
    return {
      loginHasFailed: false,
      details: {}
    }
  },
  components: {
    'form-component': formComponent
  },
  methods: {
    login() {
      //Here i used axios but i will be using firebase instead
      let url = 'http://127.0.0.1:3000/api/service-providers?id=' + this.$refs.company_id.value + '&pass=' + this.$refs.password.value
      //console.log('url is' + url)
      axios.get(url)
        .then(response => {
          if (response != null) {
            //console.log(response.data)
            if (response.data.company_id === this.$refs.company_id.value && response.data.password === this.$refs.password.value) {
              window.location = '/dashboard/' + response.data._id
              // alert('we are ready to go')
            } else {
              this.loginHasFailed = true
            }
          } else {
            this.loginHasFailed = true
          }
        })
        .catch(e => {
          alert('Login failed: ' + e)
          console.log(e)
        })
    }
  }
}
</script>

<style scoped>
.content {
  width: 40%;
  margin: 0px auto;
}
</style>
