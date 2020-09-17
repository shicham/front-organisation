<template>
  <div class="app-block">
    <b-card no-body class="card card-bordered card-stretch">
    <div class="card-inner-group">
      <div class="card-inner position-relative card-tools-toggle">
        <div class="card-title-group">
          <div class="card-tools"><Actions></Actions></div>
          <div class="card-tools mr-n1"><Filters></Filters></div>
        </div>
      </div>
      <div class="card-inner p-0">
        <div class="table-wrap table-responsive bd-0">
          <table class="app-tb-list app-tb-ulist no-footer">
            <thead>
              <tr class="app-tb-item app-tb-head">
                <th class="app-tb-col app-tb-col-check">
                  <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" unchecked-value="not_accepted"></b-form-checkbox>
                </th>
                <th class="app-tb-col sorting"><span class="sub-text">User</span></th>
                <th class="app-tb-col app-col-mb sorting"><span class="sub-text">Balance</span></th>
                <th class="app-tb-col app-col-mb sorting"><span class="sub-text">Phone</span></th>
                <th class="app-tb-col app-col-mb sorting"><span class="sub-text">Verified</span></th>
                <th class="app-tb-col app-col-mb sorting"><span class="sub-text">Last login</span></th>
                <th class="app-tb-col app-col-mb sorting"><span class="sub-text">Status</span></th>
                <th class="app-tb-col app-tb-col-tools text-right sorting"></th>
              </tr>
            </thead>
            <tbody>
            <tr class="app-tb-item odd" v-for="user in users.list" v-bind:key="user.id">
                <td class="app-tb-col app-tb-col-check ">
                  <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" unchecked-value="not_accepted"></b-form-checkbox>
                </td>
                <td class="app-tb-col">
                  <a href="/demo3/user-details-regular.html">
                    <div class="user-card">
                      <div class="user-avatar bg-primary">
                        <span>AB</span>
                      </div>
                      <div class="user-info">
                        <span class="tb-lead">{{user.fname}} {{user.lname}}<span class="dot dot-success d-md-none ml-1"></span></span>
                        <span>{{user.email}}</span>
                      </div>
                    </div>
                  </a>
                </td>
                <td class="app-tb-col tb-col-mb"><span class="tb-amount">35040.34 <span class="currency">USD</span></span></td>
                <td class="app-tb-col tb-col-md"><span>+811 847-4958</span></td>
                <td class="app-tb-col tb-col-lg">
                  <ul class="list-status">
                    <li>
                      <b-icon icon="info-circle" v-bind:class="{'text-success': user.mailVerified, 'text-danger': !user.mailVerified }" class="text-success" ></b-icon>
                      <span>Email</span>
                    </li>
                    <li>
                      <b-icon icon="info-circle" ></b-icon>
                      <span>{{ user.mailVerifiedAt | formatDateTime(user.dateFormat) }}</span>
                    </li>
                  </ul>
                </td>
                <td class="app-tb-col tb-col-lg"><span>{{ user.lastLogin | formatDateTime(user.dateFormat) }}</span></td>
                <td class="app-tb-col tb-col-md">
                <span class="tb-status text-success" v-bind:class="getUsetStatus(user.status).class">{{getUsetStatus(user.status).label}}</span>
                </td>
                <td class="app-tb-col app-tb-col-tools dropc" id="popover-target-1">
                  <b-dropdown size="lg"  dropup variant="link" toggle-class="text-decoration-none" no-caret >
                    <template v-slot:button-content ><b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="three-dots"></b-icon></template>
                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                  </b-dropdown></td>
              </tr>
              
            </tbody>
          </table>
          <b-popover custom-class="popover-bg-trans" target="popover-target-1" triggers="hover" >
            <ul class="app-tb-actions gx-3">
              <li><b-icon class="btn-icon" icon="person-dash-fill" width="1.1em" height="1.1em"></b-icon></li>
              <li><b-icon class="btn-icon" icon="envelope-fill" width="1.1em" height="1.1em"></b-icon></li>
            </ul>
          </b-popover>
        </div>
       </div>
       </div>
    </b-card>

  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Actions from './Actions.vue'
import Filters from './Filters.vue'

export default {
  name: 'Index',
  components: {
    Actions,Filters
  },
  data() {
    return {}
  },
  methods: {
    getUsetStatus(status){
      let sts = {};
      switch (status) {
        case 'active':
          sts = {key:'active', label:this.$t("user.status."+status), class: 'text-success'}
          break;
        case 'inactive':
          sts = {key:'inactive', label:this.$t("user.status."+status), class: 'text-danger'}
          break;
      }
      return sts;
    }
  },
  computed: {
   ...mapGetters({users: 'User/results',filter: 'User/filter'})
  },
  created() {
    this.$store.dispatch("User/find", this.filter);
  }
}
</script>