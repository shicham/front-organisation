<template>
<div class="card-inner card-inner-lg">
<div class="app-block-head app-block-head-lg">
        <div class="app-block-between">
          <div class="app-block-head-content">
            <h4 class="app-block-title">{{$t('i18n.Infomation')}}</h4>
            <div class="app-block-des">
              <p>Basic info, like your name and address, that you use on Nio Platform.</p>
            </div>
          </div>
        </div>
</div>
<div class="app-block">
  <div class="app-data data-list">
    <div class="data-head"><h6 class="overline-title">Basics</h6></div>
    <div class="data-item" v-b-modal.modal-prevent-closing>
      <div class="data-col">
        <span class="data-label">{{$t('i18n.Name')}}</span>
        <span class="data-value">{{organisation.name}}</span>
      </div>
      <div class="data-col data-col-end">
        <span class="data-more">
          <b-icon  class="btn-icon" icon="chevron-right"></b-icon>
        </span>
      </div>
    </div>
    <div class="data-item">
      <div class="data-col">
        <span class="data-label">{{$t('i18n.Type')}}</span>
        <span class="data-value">{{organisation.typeLabel}}</span>
      </div>
      <div class="data-col data-col-end">
        <span class="data-more">
          <b-icon  class="btn-icon" icon="chevron-right"></b-icon>
        </span>
      </div>
    </div>
    <div class="data-item">
      <div class="data-col">
        <span class="data-label">{{$t('i18n.Manager')}}</span>
        <span class="data-value">{{organisation.managerName}}</span>
      </div>
      <div class="data-col data-col-end">
        <span class="data-more">
          <b-icon  class="btn-icon" icon="chevron-right"></b-icon>
        </span>
      </div>
    </div>
    <div class="data-item">
      <div class="data-col">
        <span class="data-label">{{$t('i18n.Hierarchy')}}</span>
        <span class="data-value">
         {{organisation.parentLabel}} {{organisation.parentInternalCode}}
        </span>
      </div>
      <div class="data-col data-col-end">
        <span class="data-more">
          <b-icon  class="btn-icon" icon="chevron-right"></b-icon>
        </span>
      </div>
    </div>
  </div>
  <div class="app-data data-list">
    <div class="data-head"><h6 class="overline-title">{{$t('i18n.Address')}}</h6></div>
    <div class="data-item">
      <div class="data-col">
        <span class="data-label">{{$t('i18n.Address')}}</span>
        <span class="data-value" v-if="organisation.address">{{organisation.address.address.housenumber}} {{organisation.address.address.street}} </span>
      </div>
      <div class="data-col data-col-end">
        <span class="data-more">
          <b-icon  class="btn-icon" icon="chevron-right"></b-icon>
        </span>
      </div>
    </div>
    <div class="data-item">
      <div class="data-col">
        <span class="data-label">{{$t('i18n.Postcode')}}</span>
        <span class="data-value" v-if="organisation.address">{{organisation.address.address.postcode}} </span>
      </div>
      <div class="data-col data-col-end">
        <span class="data-more">
          <b-icon  class="btn-icon" icon="chevron-right"></b-icon>
        </span>
      </div>
    </div> 
    <div class="data-item">
      <div class="data-col">
        <span class="data-label">{{$t('i18n.City')}}</span>
        <span class="data-value" v-if="organisation.address">{{organisation.address.address.city}} </span>
      </div>
      <div class="data-col data-col-end">
        <span class="data-more">
          <b-icon  class="btn-icon" icon="chevron-right"></b-icon>
        </span>
      </div>
    </div>  
  </div>
</div>
<InformationEdit></InformationEdit>
</div>
</template>
<script>
import { mapGetters } from "vuex";
import InformationEdit from "./InformationEdit.vue";

export default {
  name: 'Information',
  components: {
    InformationEdit
  },
  data() {
    return {}
  },
  computed: {
   ...mapGetters({organisation: 'organisation/result'})
  },
  created() {
    
  }
}
</script>