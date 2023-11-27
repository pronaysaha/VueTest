<template>
    <div>
      <form @submit.prevent="submitForm">
        <!-- Employee Details -->
        <label>Name:</label>
        <input v-model="employee.name" required>
  
        <label>Email:</label>
        <input v-model="employee.email" type="email" required>
  
        <label>Phone:</label>
        <input v-model="employee.phone" required>
  
        <label>Address:</label>
        <input v-model="employee.address" required>
  
        <!-- Department Selection -->
        <label>Department:</label>
        <select v-model="employee.department_id" required>
          <option v-for="department in departments" :key="department.id" :value="department.id">
            {{ department.name }}
          </option>
        </select>
  
        <!-- Achievements -->
        <div v-for="(achievement, index) in employee.achievements" :key="index">
          <label>Achievement:</label>
          <select v-model="achievement.id" required>
            <option v-for="achievementOption in achievementOptions" :key="achievementOption.id" :value="achievementOption.id">
              {{ achievementOption.name }}
            </option>
          </select>
  
          <label>Achievement Date:</label>
          <input v-model="achievement.achievement_date" type="date" required>
  
          <button type="button" @click="removeAchievement(index)">Remove</button>
        </div>
  
        <button type="button" @click="addAchievement">Add Achievement</button>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        employee: {
          name: '',
          email: '',
          phone: '',
          address: '',
          department_id: null,
          achievements: [{ id: null, achievement_date: null }],
        },
        departments: [], // Populate this with data from API
        achievementOptions: [], // Populate this with data from API
      };
    },
    methods: {
      addAchievement() {
        this.employee.achievements.push({ id: null, achievement_date: null });
      },
      removeAchievement(index) {
        this.employee.achievements.splice(index, 1);
      },
      submitForm() {
        // Send data to API for employee creation
        console.log(this.employee);
      },
    },
    mounted() {
      // Fetch departments and achievement options from API
      // Populate this.departments and this.achievementOptions
    },
  };
  </script>
  