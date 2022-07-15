<template>
  <div>
    <header>
      <NuxtLink to="/">
        Index
      </NuxtLink>
      <NuxtLink to="/blocks">
        <span>Kirby Blocks</span>
      </NuxtLink>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
header {
  display: flex;
  gap: 1rem;
}
</style>
