<!--
    Card to display information in the list page.
    This component could be achieved with the SmallCard component by using a <slot> to insert the div with the image. The solution used here allows for better control of the layout.
    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.

    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
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