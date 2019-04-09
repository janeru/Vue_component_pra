<template>
  <div class="container">
    <!-- 監聽quoteAdded，newQuote是一個function，要去執行新增過來的quote -->
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>

    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click X button on a Quote to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid";
import NewQuote from "./components/NewQuote";
import Header from "./components/Header";
export default {
  data: function() {
    return {
      quotes: ["Just a Quote to see something"],
      maxQuotes: 10
    };
  },
  methods: {
    //   newQuote裡面有帶著component傳過來的quote
    newQuote(quote) {
      if (quote !== "") {
        if (this.quotes.length >= this.maxQuotes) {
          return alert("Please delete quotes first!");
        }
        this.quotes.push(quote);
      } else {
        alert("Please enter quotes!");
      }
    },
    deleteQuote(passIndex) {
      this.quotes.splice(passIndex, 1);
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  }
};
</script>

<style>
</style>
