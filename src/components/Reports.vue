<template>
  <div id="report" class="w3-white w3-container w3-padding-16">
    <h3 class="w3-center ">VIEW AND DOWNLOAD REPORTS</h3>
    <div class="w3-border w3-border-yellow">
      <div class="w3-container w3-center w3-padding w3-margin">
        <button @click.prevent="createCompanyProfileReport" class="w3-btn">
          <i class="fa  fa-download"></i> Company Profile</button>
        <button @click.prevent="createSubscribersReport" class="w3-btn">
          <i class="fa  fa-download"></i> Subscribers</button>
        <button @click.prevent="createRequestReport" class="w3-btn">
          <i class="fa  fa-download"></i> Enquiries</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const jsPDF = require('jspdf')
require('jspdf-autotable')

export default {
  data() {
    return {
      companyDetails: {},
      mySubscribers: {},
      bookingDetails: {}
    }
  },
  created() {
    this.fetchSubscribers()
    this.fetchEnquiries()
    this.fetchCompanyDetails()
  },
  methods: {
    fetchSubscribers() {
      let url = 'http://localhost:3000/api/service-providers/' + this.$route.params.id
      console.log(url)
      axios.get(url)
        .then(response => {
          this.companyDetails = response.data
          this.mySubscribers = response.data.subscribers
          //console.log(response.data)
          //console.log(this.mySubscribers)
        })
        .catch(e => {
          console.log(e)
        })
    },
    fetchCompanyDetails() {
      let url = 'http://localhost:3000/api/service-providers/' + this.$route.params.id
      console.log(url)
      axios.get(url)
        .then(response => {
          this.companyDetails = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    fetchEnquiries() {
      let url = 'http://localhost:3000/api/bookings?techy=' + this.$route.params.id
      console.log(url)
      axios.get(url)
        .then(response => {
          this.bookingDetails = response.data
          return
        })
        .catch(e => {
          console.log(e)
        })
    },
    createSubscribersReport() {
      let columns = ["ID", "Names"]
      let data = []
      for (let i = 0; i <= this.mySubscribers.length; i++) {
        data.push([i + 1, this.mySubscribers[i]])
      }
      let doc = new jsPDF('l')
      doc.autoTable(columns, data)
      doc.save("subscribers.pdf")
    },
    createCompanyProfileReport() {
      let columns = ["ID", "Name", "Category", "Speciality", "Website", "Email", "Service Location"]
      let data = []
      let counter = 1
      let detail = this.companyDetails
      data.push([counter, detail.company_name, detail.category, detail.speciality,
        detail.website, detail.email, detail.service_location])


      let doc = new jsPDF('l')
       doc.text("Company Details", 7, doc.autoTable.previous.finalY + 1)
      doc.autoTable(columns, data, {
        startY: doc.autoTable.previous.finalY + 15,
        margin: { horizontal: 7 },
        bodyStyles: { valign: 'top' },
        styles: { overflow: 'linebreak', columnWidth: 'wrap' },
        columnStyles: { text: { columnWidth: 'auto' } }
      })
        doc.save("profile.pdf")
    },
    createRequestReport() {
      let columns = ["ID", "Request ID", "Task", "Item", "Description", "Deadline", "Status"]
      let data = []
      let counter = 1
      this.bookingDetails.forEach(function (bookingRequest) {
        data.push([counter, bookingRequest._id, bookingRequest.task, bookingRequest.item,
          bookingRequest.description, bookingRequest.deadline, bookingRequest.status])
        counter++
      }, this)

      let doc = new jsPDF('l')
      doc.text("List of Enquiries", 7, doc.autoTable.previous.finalY + 1)
      doc.autoTable(columns, data, {
        startY: doc.autoTable.previous.finalY + 15,
        margin: { horizontal: 7 },
        bodyStyles: { valign: 'top' },
        styles: { overflow: 'linebreak', columnWidth: 'wrap' },
        columnStyles: { text: { columnWidth: 'auto' } }
      })
        doc.save("enquiries.pdf")
    }
  }
}
</script>

<style>

</style>
