<template>
  <div class="about-us-card">
    <div class="ui-tab">
      <div
        v-for="(option, index) in options"
        :key="index"
        :class="['ui-tab-item', { active: selectedOption === option }]"
        @click="changeTab(option)"
      >
        {{ option }}
      </div>
    </div>

    <div v-if="selectedOption === 'Who We Are'" class="content">
      <h3>Ciao</h3>
    </div>

    <div v-else-if="selectedOption === 'Our Values'" class="content">
      <h3>Ciao bello</h3>
    </div>

    <div v-else-if="selectedOption === 'Contacts'" class="content">
      <Contact />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      options: ['Who We Are', 'Our Values', 'Contacts'],
      selectedOption: 'Who We Are' // L'opzione "Who We Are" è selezionata di default
    };
  },
  methods: {
    changeTab(option) {
      this.selectedOption = option;
    },
    selectContactOption() {
      this.changeTab('Contacts');
    }
  }
};
</script>

<style scoped>
.about-us-card {
  margin-top: 20px;
}

.ui-tab {
  display: flex;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}

.ui-tab-item {
  padding: 12px 20px;
  font-size: 15px; /* Imposta la dimensione del testo a 20px */
  font-weight: bolder; /* Imposta il testo in grassetto */
  cursor: pointer;
  transition: background-color 0.3s;
}

.ui-tab-item.active {
  background-color: rgb(108, 171, 192);
  color: rgb(228, 237, 238);
}

.content {
  padding: 20px;
}

.area-image {
  margin-top: 20px;
}

#image-text-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.image-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 200px;
  text-align: center;
}

.image-container {
  width: 100px;
  height: 100px;
}

.text-container {
  margin-top: 10px;
}

.img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

p {
  font-size: 14px;
}

.contact-link {
  color: #007bff;
  cursor: pointer;
}

.contact-link:hover {
  opacity: 0.7;
}
</style>
