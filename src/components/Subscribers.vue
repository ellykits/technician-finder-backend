<template>
  <div id="subscribers" class="w3-white w3-container  w3-padding-16 ">
    <h3 class="w3-center ">LIST OF SUBSCRIBED USERS</h3>
    <div class="w3-border w3-border-yellow">
      <table class="w3-table">
        <thead>
          <th>Name of Subscriber</th>
          <th>Remove</th>
        </thead>
        <tbody>
          <tr v-for="subscriber of mySubscribers">
            <td>{{subscriber}}</td>
            <td>
              <button @click.prevent="" class="w3-btn w3-red">
                <i class="fa fa-trash"></i>
              </button>
            </td>
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
    let url = 'http://localhost:3000/api/service-providers/' + this.$route.params.id
    console.log(url)
    axios.get(url)
      .then(response => {
        this.companyDetails = response.data
        this.mySubscribers = response.data.subscribers
        //console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  },
  data() {
    return {
      companyDetails: {},
      mySubscribers: []
    }
  }
}
</script>

<style>

</style>
