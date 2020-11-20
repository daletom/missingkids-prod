<template>
<div>
  <section class="md:flex md:items-stretch rounded-lg overflow-hidden shadow-2xl bg-gray-400 m-5">
    <div class="flex1">
      <img :src="slice.primary.orgImage.url + '&w=320&h=320&fit=fill&fill=solid&fill-color=CBD5E0'" class="object-cover h-full w-full" />
    </div>
    <article class="flex-1">
      <div class="p-8 flex flex-col h-full justify-between space-y-8">
        <div class="space-y-8">
          <h1 class="font-bold text-2xl md:text-4xl leading-snug text-orange-600 text-center">
            {{ $prismic.asText(slice.primary.title) }}
          </h1>
          <prismic-rich-text :field="slice.primary.description" class="text-base" />
        </div>
        <div class="text-center md:flex md:flex-col md:items-center">
          <prismic-link
          :field="slice.primary.ctaLink"
          class="bg-orange-600 hover:bg-orange-700 transition-colors duration-300 ease-in-out text-black block px-8 py-4 font-bold rounded-lg">
            {{ slice.primary.ctaButton }} </prismic-link>
        </div>
      </div>
    </article>
  </section>
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
