<template>
  <div id="login" class="contentBg mb-9" v-if="login">
    <div class="flex items-center justify-center h-screen">
      <div class="w-1/3 h-1/2 mx-auto p-6 bg-white rounded-lg shadow-md hover:border-b-gray-300">
        <div class="text-center mb-4">
          <h2 class="text-xl font-semibold">Register / Login</h2>
        </div>
        <div>
          <!-- Login Form -->
          <form @submit.prevent="handleLogin">
            <div class="mb-4">
              <label for="email" class="block mb-1">Email</label>
              <input type="email" id="email" v-model="email" class="w-full px-3 py-2 border rounded-md" placeholder="Enter your email" required>
            </div>
            <div class="mb-4">
              <label for="password" class="block mb-1">Password</label>
              <input type="password" id="password" v-model="password" class="w-full px-3 py-2 border rounded-md" placeholder="Enter your password" required>
            </div>
            <div class="flex flex-col items-center mt-4">
              <button type="submit" class="w-1/4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login</button>
            </div>
          </form>
          <div class="flex items-center justify-center mt-2.5">or</div>
          <!-- Register Button -->
          <button @click="handleRegister" class="flex items-center justify-center mt-2.5 w-1/4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { register, login } from '@/firebase/firebaseAuth';

const email = ref('');
const password = ref('');

const handleRegister = async () => {
  await register(email.value, password.value);
};

const handleLogin = async () => {
  await login(email.value, password.value);
};
</script>
