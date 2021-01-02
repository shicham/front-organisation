<template>
  <div>
    

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      size="lg"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      hide-header hide-footer
    >
      <div class="modal-body-lg">
      <h5 class="title">Update Profile</h5>
      <ul class="app-nav nav nav-tabs">
        <li class="nav-item"><a class="nav-link active">{{$t('i18n.Information')}}</a></li>
        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#address">{{$t('i18n.Address')}}</a></li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active">
        
        <form ref="form" @submit.stop.prevent="handleSubmit">
        <div class="row gy-4">
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label" for="Name">{{$t('i18n.Name')}}</label>
                <input type="text" class="form-control form-control-lg" id="Name" v-bind:value="organisation.name" :placeholder="$t('i18n.Name')">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label" for="InternalCode">{{$t('i18n.InternalCode')}}</label>
                <input type="text" class="form-control form-control-lg" id="InternalCode" v-bind:value="organisation.internalCode" :placeholder="$t('i18n.InternalCode')">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label" for="Type">{{$t('i18n.Type')}}</label>
                <div class="form-control-wrap ">
                  <div class="form-control-select">
                    <select class="form-control" id="default-06">
                      <option value="default_option" v-for="type in organisationTypes.list" v-bind:key="type.id">{{type.name}}</option>
                    </select>
                  </div>
              </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label" for="Type">{{$t('i18n.Hierarchy')}}</label>
                <div class="form-control-wrap ">
                  <div class="form-control-select">
                    <select class="form-control" id="default-06">
                      <option value="default_option" v-for="parent in organisations.list" v-bind:key="parent.id">
                        {{parent.name}}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          <div class="col-12">
            <ul class="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
              <li><button type="submit" class="btn btn-lg btn-primary">Update Profile</button></li>
              <li><a href="#" data-dismiss="modal" class="link link-light">Cancel</a></li>
            </ul>
          </div>
        </div>
        </form>
        
        </div>
      </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    data() {
      return {
        name: '',
        nameState: null,
        submittedNames: [],
        org: {}
      }
    },
    computed: {
     ...mapGetters({organisations: 'organisation/results',organisation: 'organisation/result',organisationTypes: 'organisationType/results'})
    },
    created() {
      this.$store.dispatch("organisationType/find",{});
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        console.log('org',this.org)
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
  }
</script>