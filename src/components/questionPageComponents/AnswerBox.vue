<template>
  <div class="ABContainer" v-show="!hidden">
    <div class="VoteAnswerCon">
      <div class="operations">
        <add-vote
          :votesCount="data.votesCount"
          :docID="data.aID"
          :vote="data.avote"
          collection="answers"
        />
        <!-- <v-icon class="reportIcon" title="إبلاغ" outline
          >report</v-icon
        > -->
        <Report
          collection="answers"
          :docID="data.aID"
          :reported="data.aReport"
        />
        <Delete
          v-if="data.isOwner"
          collection="answers"
          :docID="data.aID"
          :deleteFun="deleteFun"
        />
      </div>
      <p class="aBody" v-html="data.body"></p>
    </div>
    <div class="DateUserInfo">
      <p>اجيب في {{ data.createdAt }}</p>
      <div class="userInfo">
        <v-avatar
          class="avatar"
          color="primary"
          :size="$vuetify.breakpoint.xsOnly ? '30' : '40'"
        >
          <img v-if="data.uImg" :src="data.uImg" :alt="data.displayName" />
          <v-icon v-else :small="$vuetify.breakpoint.xsOnly" color="background"
            >account_circle</v-icon
          >
        </v-avatar>
        <p>{{ data.uName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import AddVote from './AddVote.vue'
import Delete from './Delete.vue'
import Report from './Report.vue'
export default {
  name: 'AnswerBox',
  components: { AddVote, Report, Delete },
  data() {
    return {
      hidden: false,
    }
  },
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
  methods: {
    deleteFun() {
      this.hidden = true
    },
  },
}
</script>

<style lang="scss">
.ABContainer {
  box-shadow: $boxShadow;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0 2rem 0;
  .VoteAnswerCon {
    display: flex;
    gap: 0.5rem;
    flex-direction: row-reverse;
    .operations {
      display: flex;
      flex-direction: column;
      align-items: center;
      // .reportIcon:active{
      //   color: red;
      // }
    }
    // .material-symbols-outlined {
    //   font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
    // }
    .aBody {
      flex: auto;
    }
  }
  .DateUserInfo {
    direction: rtl;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 1rem;
  }
  .userInfo {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
}
</style>
