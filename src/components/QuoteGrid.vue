<template>
  <div class="row">
    <!-- 想再子組件上面監聽，就必須加上native -->
    <!-- <app-quote v-for="(quote,i) in quotes" :key="i" @click.native="deleteQuote">{{quote}}</app-quote>
    -->
    <app-quote
      @quoteDeleted="deleteQuote"
      v-for="(quote,i) in quotes"
      :key="i"
      :passIndex="i"
    >{{quote}}</app-quote>
  </div>
</template>

<script>
import Quote from "./Quote";
export default {
  props: ["quotes"],
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote(passIndex) {
      this.$emit("quoteDeleted", passIndex);
    }
  }
};
</script>

<style>
</style>