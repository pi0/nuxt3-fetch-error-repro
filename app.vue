<script setup lang="ts">
const refreshIndex = ref(0)
const { data, refresh } = await useKql({
  query: 'site',
  select: {
    title: true,
    children: {
      query: 'site.children',
      select: {
        id: true,
        title: true,
        isListed: true,
      },
    },
  },
})
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
