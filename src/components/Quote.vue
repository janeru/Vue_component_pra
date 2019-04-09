<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body quote">
        <!-- <app-delete v-for="(quote,i) in quotes" :key="i"></app-delete> -->
        <div class="delete" :quotes="quotes" :key="passIndex" @click="deleteQuote(passIndex)">X</div>
        <!-- 放slot在這邊，就是外部任何東西內容都可以放入slot裡面 -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quotes", "passIndex"],

  methods: {
    deleteQuote(passIndex) {
      this.$emit("quoteDeleted", passIndex);
    }
  }
};
</script>

<style>
.panel-body {
  font-family: "Arizonia", cursive;
  font-size: 24px;
  color: #6e6e6e;
}

.quote {
  cursor: pointer;
}

.quote:hover {
  background-color: #ffe2e2;
}
.delete {
  width: 35px;
  height: 40px;
  position: relative;
  left: 90%;
  border-radius: 20%;
  border: 2px solid black;
  text-align: center;
}
</style>