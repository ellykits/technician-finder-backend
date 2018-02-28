<template>
  <form @submit.prevent="registerCompany" class="content w3-border-yellow w3-border w3-white w3-margin-bottom w3-padding">
    <form-component>
      <div slot="form-header">
        <h3 class="w3-center">UPDATE DETAILS FORM</h3>
      </div>
      <div slot="form-content" v-show="!isUpdateSuccess">
        <div class="">
          <p>Account</p>
          <div class="w3-row w3-row-padding">
            <div class="w3-column w3-half">
              <label class="w3-text-teal">
                <b class="w3-left">Set CompanyID</b>
              </label>
              <input class="w3-input w3-border w3-light-grey" ref="company_id" v-model="companyDetails.company_id" type="text">
            </div>
            <div class="w3-column w3-half">
              <label class="w3-text-teal">
                <b class="w3-left">Password</b>
              </label>
              <input class="w3-input w3-border w3-light-grey" ref="password" v-model="companyDetails.password" type="password">
            </div>
          </div>
          <p>Basic Details</p>
          <div class="w3-section">
            <label class="w3-text-teal">
              <b class="w3-left">Company Name</b>
            </label>
            <input class="w3-input w3-border w3-light-grey" ref="company_name" v-model="companyDetails.company_name" type="text">
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
            <input class="w3-input w3-border w3-light-grey" ref="speciality" v-model="companyDetails.speciality" type="text">
            <label class="w3-text-teal">
              <b class="w3-left">Where do you offer your service (e.g Shop, Office)</b>
            </label>
            <input class="w3-input w3-border w3-light-grey" ref="service_location" v-model="companyDetails.service_location" type="text">
            <label class="w3-text-teal">
              <b class="w3-left">Do you offer Warranty?</b>
            </label>
            <select class="w3-select w3-border w3-light-grey" ref="warranty" v-model="companyDetails.warranty">
              <option>Yes</option>
              <option>No</option>
            </select>
            <hr>
            <p>Products and Services</p>
            <label class="w3-text-teal">
              <b class="w3-left">List of your Products(Note: Separated by comma)</b>
            </label>
            <textarea class="w3-input w3-border w3-light-grey" ref="products" v-model="companyDetails.products"></textarea>
            <label class="w3-text-teal">
              <b class="w3-left">Describe the brands/models(Note: Separated by comma e.g 'HP,Dell')</b>
            </label>
            <textarea class="w3-input w3-border w3-light-grey" ref="brands" v-model="companyDetails.brands"></textarea>
            <label class="w3-text-teal">
              <b class="w3-left">List of services that you offer (Note: Separated by comma)</b>
            </label>
            <textarea class="w3-input w3-border w3-light-grey" ref="services" v-model="companyDetails.services"></textarea>
            <hr>
            <p>Contact and address</p>
            <div class="w3-row w3-row-padding">
              <div class="w3-column w3-half">
                <label class="w3-text-teal">
                  <b class="w3-left">Company Website</b>
                </label>
                <input class="w3-input w3-border w3-light-grey" ref="website" v-model="companyDetails.website" type="text">
              </div>
              <div class="w3-column w3-half">
                <label class="w3-text-teal">
                  <b class="w3-left">Company Email</b>
                </label>
                <input class="w3-input w3-border w3-light-grey" ref="email" v-model="companyDetails.email" type="text">
              </div>
            </div>
            <div class="w3-row w3-row-padding">
              <div class="w3-column w3-half">
                <label class="w3-text-teal">
                  <b class="w3-left">Phone Contact</b>
                </label>
                <input class="w3-input w3-border w3-light-grey" ref="phone" v-model="companyDetails.phone" type="text">
              </div>
              <div class="w3-column w3-half">
                <label class="w3-text-teal">
                  <b class="w3-left">Physical Location</b>
                </label>
                <input class="w3-input w3-border w3-light-grey" ref="p_address" v-model="companyDetails.p_address" type="text">
              </div>
            </div>
            <div class="w3-row w3-row-padding">
              <div class="w3-column w3-third">
                <label class="w3-text-teal">
                  <b class="w3-left">Country</b>
                </label>
                <input class="w3-input w3-border w3-light-grey" ref="country" v-model="companyDetails.country" type="text">
              </div>
              <div class="w3-column w3-third">
                <label class="w3-text-teal">
                  <b class="w3-left">Region</b>
                </label>
                <input class="w3-input w3-border w3-light-grey" ref="region" v-model="companyDetails.region" type="text">
              </div>
              <div class="w3-column w3-third">
                <label class="w3-text-teal">
                  <b class="w3-left">County</b>
                </label>
                <input class="w3-input w3-border w3-light-grey" ref="county" v-model="companyDetails.county" type="text">
              </div>
            </div>

            <p>Other details</p>
            <div class="w3-row w3-row-padding">
              <div class="w3-column w3-half">
                <label class="w3-text-teal">
                  <b class="w3-left">Work Days</b>
                </label>
                <input class="w3-input w3-border w3-light-grey" ref="working_days" v-model="companyDetails.working_days" type="text">
              </div>
              <div class="w3-column w3-half">
                <label class="w3-text-teal">
                  <b class="w3-left">Working Hours</b>
                </label>
                <input class="w3-input w3-border w3-light-grey" ref="working_hrs" v-model="companyDetails.working_hrs" type="text">
              </div>
            </div>
          </div>
          <div class="w3-section w3-center">
            <button class="w3-btn w3-blue-grey">
              <i class="fa fa-save"></i> Save</button>
          </div>
        </div>
      </div>
      <div slot="form-status">
        <div v-show="isUpdateSuccess" class="w3-light-teal w3-border w3-border-green w3-margin w3-round-large w3-center">
          <h2>Update has been successfull!</h2>
          <p>Clik the profile button to view updated details</p>
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
  created() {
    let url = 'http://localhost:3000/api/service-providers/' + this.$route.params.id
    console.log(url)
    axios.get(url)
      .then(response => {
        this.companyDetails = response.data
        // console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  },
  data() {
    return {
      assignedCompanyID: '',
      isUpdateSuccess: false,
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
        services: '',
        region: '',
        county: '',
        country: ''
      }
    }
  },
  components: {
    'form-component': formComponent
  },
  methods: {
    registerCompany() {
      //Here i used axios but i will be using firebase instead
      let url = 'http://127.0.0.1:3000/api/service-providers/update/' + this.$route.params.id
      axios.put(url, this.companyDetails)
        .then(response => {
          JSON.stringify(response)
          this.isUpdateSuccess = true
          console.log(response)
        })
        .catch(e => {
          alert('Registration failed: ' + e)
          console.log(e)
        })
    }
  }
}
</script>

<style>

</style>
