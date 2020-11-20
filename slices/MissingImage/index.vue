<template>
  <section class="section">
    <prismic-rich-text :field="slice.primary.name" class="title"  />
    <div class="relative">
      <prismic-image :field="slice.primary.thumbtack" class="thumbtack" />
      <img :src="slice.primary.missing.url + '&pad-bottom=75&pad=10&bg=E8E8EB&h=400&w=300&fit=crop&crop=faces&blend-w=.4&blend=91d45678-9d16-4831-bcc4-d62bd4da5c81_missing-stamp.png&blend-mode=normal&blend-align=bottom-right&mark-y=310&mark=https%3A%2F%2Fassets.imgix.net%2F~text%3Ftxt-align%3Dleft%26txt-font%3Dhelvetica%252Cbold%26txt-size%3D16%26txt-color%3D111%26w%3D275%26h%3D100%26txt%3D' + $prismic.asText(slice.primary.info)" 
        :alt="slice.primary.missing.alt"
        class="missing"
        width="300px"
        height="400px" />
    </div>
  </section>
</template>
<script>
import VueImgix from '~/plugins/vue-imgix.js'

export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    }
  },
}
</script>
<style scoped>
.section {
  position: relative;
  color: #111;
  padding: 4em;
  text-align: center;
  display: block;
  float: left;
}

a {
  color: #111;
}
.title {
  margin-bottom: 2em;
  background: #E8E8EB;
}

.thumbtack {
  position: absolute;
  top: -15px;
  left: 120px;
  z-index: 2;
}

</style>

