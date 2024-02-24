<template>
<div class="items-center justify-center max-w-screen h-16 bg-gray-700">
  <ul class="flex justify-center items-center">
    <li class="mt-5 text-slate-200 mr-16 border-b border-transparent hover:border-white transition duration-300">
      <router-link to="/" class="no-underline">Home</router-link>
    </li>
    <li class="mt-5 text-slate-200 mr-16 border-b border-transparent hover:border-white transition duration-300">
     <router-link to="/gold" class="no-underline">Gold</router-link>
    </li>
    <li class="mt-5 text-slate-200 mr-16 border-b border-transparent hover:border-white transition duration-300">
      <router-link to="/favorites">Favorite Stocks</router-link>
    </li>
  </ul>
</div>
</template>

<script>


</script>