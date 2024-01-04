<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae dolorum vero itaque saepe iure. Quibusdam error aliquid vitae recusandae magnam unde. Aperiam corporis error in reiciendis voluptatem tenetur debitis.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit aliquam maxime alias blanditiis labore itaque praesentium, quaerat incidunt expedita numquam totam aut? Dicta amet quae cum suscipit rerum, quis ut.</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  // const { data } = await useFetch('/api/main?name=mario', {
  //   method: 'post',
  //   body: { age: 30 }
  // })

  const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>