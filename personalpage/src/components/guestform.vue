<template>
  <div>
    <form @submit.prevent="submitForm" class="guestbook-form">
      <div class="flex-con type4">
      <span class="title">Guestbook:</span><br>
      </div>
      <div class="flex-con type4">
      <label for="name">Name:</label>
      <input v-model="name" type="text" id="name" required />
      </div>
      <div class="flex-con type4">
      <label for="reason">Reason for visiting:</label>
      </div>
      <div class="flex-con type4">
      <textarea v-model="reason" id="reason" required></textarea>
      </div>
      <div class="flex-con type4">
      <button type="submit">Sign Guestbook</button>
      <div v-if="submissionStatus" class="thank-you">
      </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'


const name = ref('');
const reason = ref('');
const submissionStatus = ref(null);


async function submitForm() 
{
submissionStatus.value = "Submitting...";
    try 
    {
      const { error } = await supabase
        .from('guestbooks')
        .insert([{ name: name.value, reason: reason.value }]);
  
      if (error) 
      {
        console.error("Error inserting comment:", error);
        submissionStatus.value = "Error submitting entry. Please try again.";
      } 
      else 
      {
        submissionStatus.value = "Signed successfully!";
        name.value = ''; // Clear form fields
        reason.value = '';
        emit('comment-submitted')//added
      }
    } 
    catch (err) 
    {
      console.error("An unexpected error occurred:", err);
      submissionStatus.value = "An unexpected error occurred. Please try again later.";
    }
}


</script>