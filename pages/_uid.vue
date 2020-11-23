<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
<div class="bg-white p-16">
<theHeader />
  <slice-zone type="page" :uid="$route.params.uid" />
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
