<template>
<div>
  <TheHeader />
  <div class="top bg-white">
    <h1 class="text-3xl text-center">Here is a list of Organizations and Ways You Can Help</h1>
    <h3 class="text-lg p-3 text-justify">If you want to see a list of organizations that you can be a part of and find ways to help Missing Children, I have created a small list for you. If you have other organizations that you trust or know about it, don't hesitate to let me know and I can add them to this list.</h3>
  </div>
  <slice-zone type="page" uid="help" />
</div>
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  components: {
    SliceZone
  }
};
</script>
