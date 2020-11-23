<template>
  <div class="max-w-4xl relative p-8 bg-gray-200 m-auto border-4 border-black rounded-md border-double">
    <div class="head max-w-full bg-yellow-500">
    </div>
    <div class="page max-w-full">
      <div class="page max-w-full">
        <div class="w-1/3 float-left">
          <h3 class="text-center text-3xl"> {{ $prismic.asText(slice.primary.title) }}  </h3>
          <img :src="slice.primary.image.url + '?w=300'" /> 
        </div>
        <div class="w-2/3 float-right">
          <div class="w-2/3 pt-10 p-2 float-left text-lg">
            <ul class="list-disc pl-4">
              <li>Missing Since: {{ $prismic.asText(slice.primary.missingSince) }} </li>
              <li>Current Age: {{ $prismic.asText(slice.primary.age) }} </li>
              <li>Race: {{ $prismic.asText(slice.primary.race) }} </li>
              <li>Sex: {{ $prismic.asText(slice.primary.sex) }} </li>
              <li>Eyes: {{ $prismic.asText(slice.primary.eyes) }} </li>
              <li>Hair: {{ $prismic.asText(slice.primary.hair) }} </li>
              <li>Marks, scars, etc: {{ $prismic.asText(slice.primary.marks) }} </li>
            </ul>
          </div>
          <div class="w-1/3 float-right object-bottom pt-40">
            <img :src="slice.primary.altImage.url + '?w=300'" />
          </div>
        </div>
      </div>
      <prismic-rich-text class="p-4 clear-both" :field="slice.primary.description" />
      <div>
        <h2 class="text-3xl">Contact Details</h2>
        <h4>Primary Agency: {{ $prismic.asText(slice.primary.contactAgency) }}</h4>
        <h4>Contact Number: {{ $prismic.asText(slice.primary.contactNumber) }}</h4>
        <h4>Case Number: {{ $prismic.asText(slice.primary.contactCase) }}</h4>
      </div>
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

</style>

