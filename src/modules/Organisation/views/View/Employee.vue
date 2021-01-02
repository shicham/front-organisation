<template>
  <div class="app-block">
    <b-card no-body class="bd-0">
    <div class="card-inner-group">
      <div class="card-inner position-relative card-tools-toggle">
        <div class="card-title-group">
          <div class="card-tools"></div>
          <div class="card-tools mr-n1"></div>
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
                <th class="app-tb-col sorting"><span class="sub-text">{{$t('i18n.Organisation')}}</span></th>
                <th class="app-tb-col app-col-mb sorting"><span class="sub-text">{{$t('i18n.InternalCode')}}</span></th>
                <th class="app-tb-col app-col-mb sorting"><span class="sub-text">{{$t('i18n.Contact')}}</span></th>
                
                <th class="app-tb-col app-col-mb sorting"><span class="sub-text">{{$t('i18n.status.Status')}}</span></th>
                <th class="app-tb-col app-tb-col-tools text-right sorting"></th>
              </tr>
            </thead>
            <tbody>
            <tr class="app-tb-item odd" v-bind:class="{'app-tb-item-selected' : person.selected}" v-for="person in persons.list" v-bind:key="person.id">
                <td class="app-tb-col app-tb-col-check ">
                  <b-form-checkbox  v-model="person.selected" ></b-form-checkbox>
                </td>
                <td class="app-tb-col">
                  <div>
                    <div class="user-card">
                      <div class="user-avatar bg-primary">
                        <span>{{ person.firstname | substrin(2) }}</span>
                      </div>
                      <div class="user-info">
                        <span class="tb-lead">{{person.gender}} {{person.firstname}} {{person.lastname}}<span class="dot dot-success d-md-none ml-1"></span></span>
                        <span>{{person.typeLabel}}-</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="app-tb-col tb-col-mb">
                  <span class="tb-amount"><span class="currency">{{person.internalCode}}</span></span>
                </td>
                <td class="app-tb-col tb-col-md">
                <span ></span>
                  <span class="tb-lead-sub" >{{person.primaryEmail}}</span>
                  <span class="tb-sub" >{{person.primaryPhone}}</span>
                </td>
                
                <td class="app-tb-col tb-col-md">
                  <span class="tb-status text-success" v-bind:class="getUsetStatus(person.statusCode).class">
                    {{getUsetStatus(person.statusCode).label}}
                  </span>
                </td>
                <td class="app-tb-col app-tb-col-tools dropc" id="popover-target-1">
                  <b-dropdown size="lg"  dropup variant="link" toggle-class="text-decoration-none" no-caret >
                    <template v-slot:button-content >
                      <b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="three-dots"></b-icon>
                    </template>
                    <b-dropdown-item :to="{ name: 'OrganisationView', params: { personId: person.id } }">
                      <b-icon  width="1.1em" height="1.1em" class="btn-icon" icon="eye"></b-icon> {{$t('i18n.viewDetail')}}
                    </b-dropdown-item>
                  </b-dropdown></td>
              </tr>
              
            </tbody>
          </table>
         
        </div>
       </div>
       </div>
    </b-card>

  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: 'Employee',
  components: {
    
  },
  data() {
    return {}
  },
  methods: {
    getUsetStatus(status){
      let sts = {};
      switch (status) {
        case 'activiteActive':
          sts = {key:'active', label:this.$t("i18n.statusEmp."+status), class: 'text-success'}
          break;
        case 'inactive':
          sts = {key:'inactive', label:this.$t("i18n.statusEmp."+status), class: 'text-danger'}
          break;
      }
      return sts;
    }
  },
  computed: {
   ...mapGetters({persons: 'person/results',filter: 'person/filter'})
  },
  created() {
    this.$store.dispatch("person/find", this.filter);
  }
}
</script>