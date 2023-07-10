<!-- Person card: this card will be used to display a single person and can be used as a link to jump to the page of said person.
     The card has two faces: 
      - front shows the person picture and name
      - back shows the person name and role
-->
<template>
  <main>
    <NuxtLink :to="link" class="personLink">
      <div class="person-card" @mouseover="hovered = true" @mouseleave="hovered = false">
        <div class="person-card-inner" :class="{ flipped: hovered }">
          <div class="person-card-front">
            <div class="person-image-container">
              <img class="img" :src="image" />
            </div>
            <span class="person-name">{{ name }}</span>
          </div>
          <div class="person-card-back">
            <h1 class="person-name">{{ name }}</h1>
            <h2 class="person-role">{{ role }}</h2>
          </div>
        </div>
      </div>
    </NuxtLink>
  </main>
</template>

<script setup>
    const hovered = ref(false)
    const props = defineProps(['name', 'role', 'link', 'image'])
    //console.log(props)
</script>

<style scoped>
    .personLink
    {
        text-decoration: none;
        justify-content: center;
    }
    
    .person-card
    {
        display: flex;
        flex-flow: column;
        padding: 20px;
        border-radius: 0px;
        width: fit-content;
        height: fit-content;
        margin: auto;
        justify-content: center;
        background-color: transparent;
        border: 1px solid lightgray;
    }   

    .person-image-container
    {
        display: flex;
        justify-content: center;
        border-radius: 10px;
        padding: 2px;
        width: 250px;
        height: 250px;
    }

    .img
    {
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        height: auto;
        width: auto;
        margin: auto;
        border-radius: 20px;
    }

    .person-details 
    {
        text-align: center;
    }
    .person-card {
    width: 250px; /* Set the desired width of the card */
    height: 250px; /* Set the desired height of the card */
    perspective: 1000px; /* Add 3D perspective */
    margin: auto;
  }

  .person-card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .person-card-inner.flipped {
    transform: rotateY(180deg);
  }

  .person-card-front,
  .person-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-color: white; /* Set the background color of the cards */
  }

  .person-card-back {
    transform: rotateY(180deg);
    margin-bottom: 10px;
  }

  .person-name 
  {
    font-size: large;
    font-family: sans-serif;
    font-weight: bold;
  }
  .person-role 
  {
    font-size: medium;
    font-family: sans-serif;
    font-weight: bold;
  }
</style>