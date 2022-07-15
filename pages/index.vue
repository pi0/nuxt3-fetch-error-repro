<script setup lang="ts">
const { data } = await useKqlTest({
  query: 'kirby.page("home")',
  select: ['id', 'title', 'headline', 'subheading'],
})

console.log(data.value)
</script>

<template>
  <div>
    <h1>Nuxt useFetch Hydration Error</h1>
    <p>
      This SSR rendered page should include a pre-rendered <code>pre</code> tag.
    </p>
    <hr />
    <h2>Response</h2>
    <pre>{{ JSON.stringify(data, undefined, 2) }}</pre>
  </div>
</template>
