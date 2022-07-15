<script setup lang="ts">
const refreshIndex = ref(0)
const { data, refresh, error } = await useKql({
  query: 'kirby.page("home")',
  select: {
    id: true,
    title: true,
    // description: true,
    headline: true,
    subheading: true,
  },
})

console.log(data.value)
console.log(error.value)
</script>

<template>
  <div>
    <h1>Send KQL Queries</h1>
    <p>
      KQL Data is being proxied by a Nuxt server route and passed back to the
      client.
    </p>
    <hr />
    <h2>Response</h2>
    <pre>{{ JSON.stringify(data?.result, undefined, 2) }}</pre>
    <p>Refreshed: {{ refreshIndex }} times</p>
    <button @click="refresh(), refreshIndex++">Refresh</button>
  </div>
</template>
