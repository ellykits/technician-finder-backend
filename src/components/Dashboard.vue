<template>
  <div>
    <!-- Header -->
    <header id="header-div">
      <div class="w3-container">
        <h1 class="w3-center w3-margin-bottom">
          <b>{{companyDetails.company_name}}</b>
          <p class="w3 w3-margin-0  w3-medium">({{companyDetails.category}})</p>
        </h1>
        <div class="w3-margin-bottom w3-bottombar w3-border-yellow w3-padding-16">
          <button @click="current_page = 'company-profile'" class="w3-bar-item w3-btn w3-mobile w3-brown" style="width:16%">
            <i class="fa fa-home w3-margin-right"></i>Profile </button>
          <button @click="current_page = 'update-company'" class="w3-bar-item w3-btn w3-mobile w3-green" style="width:16%">
            <i class="fa fa-edit w3-margin-right"></i>Update </button>
          <button @click="current_page = 'company-subscribers'" class="w3-bar-item w3-btn w3-mobile w3-teal " style="width:16%" >
            <i class="fa fa-users w3-margin-right"></i>Subscribers</button>
          <button @click="current_page = 'company-enquiries'" class="w3-bar-item w3-btn w3-mobile w3-blue " style="width:16%">
            <i class="fa fa-question w3-margin-right"></i>Enquiries</button>
          <button @click="current_page = 'company-reports'" class="w3-bar-item w3-btn w3-mobile w3-orange" style="width:16%" >
            <i class="fa fa-bar-chart w3-margin-right"></i> Reports</button>
          <button @click="$router.push('/login/')" class="w3-bar-item w3-btn w3-mobile w3-red" style="width:16%" >
            <i class="fa fa-sign-out w3-margin-right"></i> Logout</button>
        </div>
      </div>
    </header>
   <component class="content" v-bind:is="current_page"></component>
  </div>
</template>

<script>
import homeNavigation from './Home-Navigation'
import companyProfile from './CompanyProfile'
import updateCompany from './UpdateCompany'
import companySubscribers from './Subscribers'
import companyReports from './Reports'
import companyEnquiries from './Enquiries'
import axios from 'axios'

export default {
  created() {
    let url = 'http://localhost:3000/api/service-providers/' + this.$route.params.id
    console.log(url)
    axios.get(url)
      .then(response => {
        this.companyDetails = response.data
        //console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  },
  data() {
    return {
      current_page:'company-profile',
      companyTitle: 'Company Title',
      companyDetails: {}
    }
  },
  components: {
    'navigation': homeNavigation,
    'company-profile': companyProfile,
    'company-reports': companyReports,
    'company-enquiries': companyEnquiries,
    'company-subscribers': companySubscribers,
    'update-company': updateCompany
  }
}
</script>

<style scoped>
.content{
  width:80%;
  margin:0px auto;
}
</style>
