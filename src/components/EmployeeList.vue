<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Department</th>
            <th>Achievements</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.name }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.phone }}</td>
            <td>{{ employee.address }}</td>
            <td>{{ employee.department.name }}</td>
            <td>
              <ul>
                <li v-for="achievement in employee.achievements" :key="achievement.id">
                  {{ achievement.name }} - {{ achievement.pivot.achievement_date }}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Add pagination here -->
  
      <!-- Add filtering options here -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        employees: [], // Populate this with data from API
      };
    },
  };
  </script>
  