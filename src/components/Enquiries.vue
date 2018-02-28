<template>
  <div id="subscribers" class="w3-white w3-container  w3-padding-16 ">
    <h3 class="w3-center ">CURRENT REQUESTS</h3>
    <div class="w3-border w3-border-yellow">
      <table class="w3-table w3-white">
        <thead>
          <th>Request ID</th>
          <th>Name of Item</th>
          <th>Task</th>
          <th>Deadline</th>
          <th>Status</th>
        </thead>
        <tbody>
          <tr ref="stat" v-for="request of bookingDetails">
            <td>
              <button @click="$router.push('/dashboard/'+current_id+ '/'+ request._id)" class="w3-btn w3-pale-blue">{{request._id}}</button>
            </td>
            <td>{{request.item}}</td>
            <td>{{request.task}}</td>
            <td>{{request.deadline}}</td>
            <td v-bind:style="{color:setColor}">{{request.status}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created() {
   // console.log("The value in status" + this.$refs.stat)
    let url = 'http://localhost:3000/api/bookings?techy=' + this.$route.params.id
    console.log(url)
    axios.get(url)
      .then(response => {
        this.bookingDetails = response.data
        //console.log(response.data)
        return
      })
      .catch(e => {
        console.log(e)
      })
  },
  computed: {

  },
  data() {
    return {
      current_id: this.$route.params.id,
      bookingDetails: {},
      subscriberDetails: {},
      requestResponse: '',
      setColor: this.$refs.stat === 'REJECTED' ? 'red' : 'green'
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
