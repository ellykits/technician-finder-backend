<template>
  <div class="w3-white w3-container w3-padding-16 ">
    <h3 v-if="companyDetails.company_id === ''" class="w3-red w3-padding w3-center">Its your first time to login in please update company ID and Password!</h3>
    <div class="w3-border w3-border-yellow">
      <ul class="w3-ul">
        <li>
          <h3 class="w3-center">Company Details</h3>
        </li>
        <li>
          <strong>Name of Company: {{companyDetails.company_name}}</strong>
        </li>
        <li>Category: {{companyDetails.category}}</li>
        <li>Speciality: {{companyDetails.speciality}}</li>
        <li>Servicing location: {{companyDetails.service_location}}</li>
        <li>Working days and hours : {{companyDetails.working_hrs}} - {{companyDetails.working_days}}</li>
        <li>
          <h3 class="w3-center">Contact and address details</h3>
        </li>
        <li>
          <strong>Website: {{companyDetails.company_name}}</strong>
        </li>
        <li>Email: {{companyDetails.category}}</li>
        <li>Phone: {{companyDetails.speciality}}</li>
        <li>Located at: {{companyDetails.p_address}}</li>
        <li>Country, region and county : {{companyDetails.country}} - {{companyDetails.region}} - {{companyDetails.county}}</li>
        <li>
          <h3 class="w3-center">Products and services</h3>
        </li>
        <li>
          <strong>Products: {{companyDetails.products}}</strong>
        </li>
        <li>Brands/ Models: {{companyDetails.brands}}</li>
        <li>Services: {{companyDetails.services}}</li>
        <li>Offer warranty: {{companyDetails.warranty}}</li>
        <li>Ratings : {{companyDetails.ratings}}</li>

      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
      companyDetails: {}
    }
  }
}
</script>

<style>

</style>
