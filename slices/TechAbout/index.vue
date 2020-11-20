<template>
<div>
  <div>
    <h1 class="text-3xl text-center bg-white"> {{ $prismic.asText(slice.primary.title) }}  </h1>
    <prismic-rich-text :field="slice.primary.description" class="text-lg p-3 text-justify bg-white" />
  </div>
  <div v-for="(item, index) in slice.items" :key="index">
    <section class="md:flex md:items-stretch rounded-lg overflow-hidden shadow-2xl bg-gray-400 m-5">
      <div class="flex1">
        <img :src="item.thumb.url + '&w=320&h=320&fit=fill&fill=solid&fill-color=CBD5E0'" class="object-cover h-full w-full"/>
      </div>
      <article class="flex-1">
        <div class="p-8 flex flex-col h-full justify-between space-y-8">
          <div class="space-y-8">
            <h1 class="font-bold text-lg md:text-4xl leading-snug text-black-600 text-center">
              {{ $prismic.asText(item.sectionTitle)}}
            </h1>
            <prismic-rich-text class="text-justify pad-2" :field="item.details" :key="index" />
            <pre :key="index" class="pre"> {{ $prismic.asText(item.code) }} </pre>
          </div>
        </div>
      </article>
    </section>
  </div>
</div>
</template>
<script>
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
pre {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid #f36d33;
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
}
</style>

