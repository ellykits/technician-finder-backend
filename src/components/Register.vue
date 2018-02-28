<template>
  <form @submit.prevent="registerCompany" class="content">
    <form-component>
      <div slot="form-header">
        <h3 class="w3-center">REGISTER COMPANY</h3>
      </div>
      <div slot="form-content" v-show="!isRegistrationSuccess">
        <div class="w3-border-yellow w3-border w3-white w3-margin-bottom w3-padding">
          <p>Basic Details</p>
          <div class="w3-section">
            <label class="w3-text-teal">
              <b class="w3-left">Company Name</b>
            </label>
            <input required class="w3-input w3-border w3-light-grey" ref="company_name" v-model="companyDetails.company_name" type="text">
            <label class="w3-text-teal">
              <b class="w3-left">Select category</b>
            </label>
            <select required class="w3-select w3-border w3-light-grey" ref="category" v-model="companyDetails.category">
              <option selected="selected">-- Select best choice --</option>
              <option>Agriculture</option>
              <option>Arts, crafts, and collectibles</option>
              <option>Baby</option>
              <option> Beauty and fragrances</option>
              <option>Books and magazines</option>
              <option>Business to business</option>
              <option>Clothing, accessories, and shoes</option>
              <option> Computers, accessories, and services</option>
              <option>Education</option>
              <option>Electronics and telecom</option>
              <option>Entertainment and media</option>
              <option>Financial services and products</option>
              <option>Food retail and service</option>
              <option>Gifts and flowers</option>
              <option>Government</option>
              <option>Health and personal care</option>
              <option>Home and garden</option>
              <option>Nonprofit</option>
              <option>Pets and animals</option>
              <option>Religion and spirituality (for profit)</option>
              <option>Retail (not elsewhere classified)</option>
              <option>Services - other</option>
              <option>Sports and outdoors</option>
              <option>Toys and hobbies</option>
              <option>Travel</option>
              <option>Vehicle sales</option>
              <option>Vehicle service and accessories</option>
            </select>
            <label class="w3-text-teal">
              <b class="w3-left">Describe your speciality(e.g Computer Repair)</b>
            </label>
            <input required class="w3-input w3-border w3-light-grey" ref="speciality" v-model="companyDetails.speciality" type="text">
            <label class="w3-text-teal">
              <b class="w3-left">Where do you offer your service (e.g Shop, Office)</b>
            </label>
            <input required class="w3-input w3-border w3-light-grey" ref="service_location" v-model="companyDetails.service_location" type="text">
            <div class="w3-section">
              <button class="w3-btn w3-blue-grey w3-center"><i class="fa fa-save"></i> Save</button>
            </div>
          </div>
        </div>
      </div>
      <div slot="form-status">
        <div v-show="isRegistrationSuccess" class=" w3-white w3-light-teal w3-border w3-border-green w3-margin w3-round-large w3-center">
          <h2>Registration has been successfull!</h2>
          <b>
            <p>Click the button below to continue</p>
          </b>
          <button @click.prevent="goToDashboard" class="w3-button w3-ripple w3-yellow w3-border w3-padding w3-margin">
            <i class="fa fa-edit"></i> Update Company Details</button>
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
      uniqueId: '',
      isRegistrationSuccess: false,
      companyDetails: {
        company_id: '',
        password: '',
        company_name: '',
        category: '',
        speciality: '',
        service_location: '',
        warranty: '',
        p_address: '',
        brands: '',
        phone: '',
        email: '',
        website: '',
        products: '',
        services: ''
      }
    }
  },
  components: {
    'form-component': formComponent
  },
  methods: {
    registerCompany() {
      //Here i used axios but i will be using firebase instead
      let url = 'http://127.0.0.1:3000/api/service-providers/create/'
      axios.post(url, this.companyDetails)
        .then(response => {
          JSON.stringify(response)
          this.isRegistrationSuccess = true
          this.uniqueId = response.data._id
          //console.log(response)
        })
        .catch(e => {
          alert('Registration failed: ' + e)
          console.log(e)
        })
    },
    goToDashboard(){
      this.$router.push('/dashboard/'+this.uniqueId)
    }
  }
}
</script>

<style>

</style>
