<template>
  <!-- 要創建新的quote -->
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Quote</label>
        <textarea class="form-control" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    //   因為要將內層的quote傳到外層，要利用emit
    createNew() {
      this.$emit("quoteAdded", this.quote);
      //   並且在送出之後要將quote清掉
      this.quote = "";
    }
  }
};
</script>

<style>
</style>