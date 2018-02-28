<template>
  <div>
    <!-- Header -->
    <div v-if="!hasResponded">
      <div class="w3-container">
        <h1 class="w3-center w3-text-teal">
          Details for the request
        </h1>
        <div class="w3-center">
          <button @click.prevent="goBack" class="w3-btn w3-blue w3-margin">
            <i class="fa fa-arrow-circle-o-left "> Back</i>
          </button>
          <button @click.prevent="updateResponse('ACCEPTED')" class="w3-btn w3-green w3-ripple w3-margin">
            <i class="fa fa-a"></i> ACCEPT</button>
          <button @click.prevent="updateResponse('REJECTED')" class="w3-btn w3-red w3-ripple w3-margin">
            <i class="fa fa-a"></i> REJECT</button>
        </div>
        <ul class="w3-ul w3-border w3-white w3-margin">
          <li>
            <h3 class="w3-center">Request Details</h3>
          </li>
          <li>
            <strong>Task: {{bookingDetails.task}}</strong>
          </li>
          <li>
            <strong>Deadline:</strong> {{bookingDetails.deadline}}</li>
          <li>
            <strong>Status: </strong>{{bookingDetails.status}}</li>
          <li>
            <strong>Item to Service:</strong> {{bookingDetails.item}}</li>
          <li>
            <strong>Description</strong>
            <div>
              {{bookingDetails.description}}
            </div>
          </li>
          <li>
            <h3 class="w3-center">Sender Details</h3>
          </li>
          <li>
            <div>
              <b>Name: </b>{{subscriberDetails.name}}
              <b> National ID: </b>{{subscriberDetails.national_id}}
              <b>Gender: </b>{{subscriberDetails.gender}}
              <br>
              <br>
              <b>Phone: </b> {{subscriberDetails.phone}}
              <b> Email address: </b>{{subscriberDetails.email}}
              <br>
              <br>
              <b>Physical Address: </b>{{subscriberDetails.p_address}}
              <b> Street: </b>{{subscriberDetails.street}}
              <b>Estate: </b>{{subscriberDetails.estate}}

            </div>
          </li>
        </ul>
      </div>
    </div>
    <div slot="form-status">
        <div v-if="hasResponded" class="w3-light-teal w3-border w3-border-green w3-margin w3-round-large w3-center">
          <h2>Response has been update successfully !</h2>
          <button @click.prevent="goBack" class="w3-btn w3-blue w3-margin">
            <i class="fa fa-arrow-circle-o-left "> Back</i>
          </button>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    let url = 'http://localhost:3000/api/bookings/req/' + this.$route.params.rqid
    console.log(url)
    axios.get(url)
      .then(response => {
        this.bookingDetails = response.data
        this.returnSubscriberDetails(response.data.user_id)
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  },
  data() {
    return {
      hasResponded:false,
      svcprv_id: this.$route.params.id,
      rqid: this.$route.params.rqid,
      bookingDetails: {},
      subscriberDetails: {}
    }
  },
  methods: {
    returnSubscriberDetails(user) {
      let url = 'http://127.0.0.1:3000/api/users/' + user
      axios.get(url)
        .then(response => {
          this.subscriberDetails = response.data
        })
        .catch(e => {
          console.log(e)
        })
    },
    updateResponse(req_res) {
      let url = 'http://127.0.0.1:3000/api/bookings/edit/' + this.rqid

      axios.put(url, { "status": req_res })
        .then(response => {
          //console.log(response.data)
          // alert("Request response updated")
          this.hasResponded = true
        })
        .catch(e => {
          console.log(e)
        })
    },
    goBack() {
      window.history.go(-1)
    }
  }
}
</script>

<style>

</style>
