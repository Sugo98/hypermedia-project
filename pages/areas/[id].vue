<!-- Single area page -->
<template>
    <main id="area-main">
      <div class="orientation-info">
        <NuxtLink class="link-to-areas" to="/areas">Areas</NuxtLink>
        <span class="separator"> > </span>
        <span class="orientation-info-name">{{ area.name }}</span>
      </div>

      <section>
        <div class="area-info-container" :style="{backgroundImage: 'url(/img/areas/' + area.name.toLowerCase() + '1.jpg)'}">
          <div class="area-info">
            <h1 class="area-name">{{area.name}}</h1>
          </div>
        </div>
      </section>

      <section>
        <div class="description-container">
          <div class="description">
            {{ area.description }}
          </div>
          <div>
            
          </div>
        </div>
      </section>
      
    <div class="projects-container">
      <section class="projects">
          <div class="carousel-container">
            <p class="projects-in-area">PROJECTS IN THIS AREA</p>
            <div class="carousel">
              <div class="projects-row">
                <ProjectCard v-for="project in displayedProjects" 
                  :key="project.id"
                  :name="project.name"
                  :description="project.description"
                  :link="'/projects/' + project.id"
                  :image="'/img/projects/' + project.id + '.png'"/> 
              </div>
              <div class="buttons-container">
                <div class="button"> 
                  <img class="button-img" @click="previous" src="@/assets/img/prev.png"/>
                </div>
                <div class="button"> 
                  <img class="button-img" @click="next" src="@/assets/img/next.png"/>
                </div>
              </div>
            </div>  
          </div>
      </section>
    </div>
  </main>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const route = useRoute();
  const id = route.params.id;
  // const { data: area } = await useFetch(useRuntimeConfig().public.baseURL + '/server/areas/' + id);
  
  import { createClient } from '@supabase/supabase-js'
  const supabaseUrl = useRuntimeConfig().public.supabaseURL
  const supabaseKey = useRuntimeConfig().public.supabaseKEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data:area, error } = await supabase
    .from('areas')
    .select("* ,projects(*)")
    .eq('id',id)
    .single()

  //if (error) console.log(error)
  //console.log(area.name.toLowerCase())

  let currentIndex = ref(0);
  const projects = area.projects;

  // Function to display the projects only three at a time in a cyclic way
  const displayedProjects = computed(() => {
    let temp = projects.slice(currentIndex.value, currentIndex.value + 3);
    
    if (temp.length < 3)
      temp = temp.concat(projects.slice(0, 3 - temp.length))
    
    return temp; 
  });
  
  // Function to cycle backward through the projects
  function previous() {
    currentIndex.value--
    if (currentIndex.value < 0) {
      currentIndex.value = projects.length - 1;
    }
  }
  
  // Function to cycle forward through the projects
  function next() {
    currentIndex.value++
    if (currentIndex.value === projects.length) {
      currentIndex.value = 0;
    }
  }
</script>


<style scoped>
#area-main {
  width: 100vw;
  display: flex;
  flex-direction: column;
}

  .orientation-info {
  position: fixed;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  justify-content: flex-start;
  text-align:left;
  width: fit-content;
  color: #023047;
  padding-left: 2%;
  background-color: white;
  border-radius: 7px;
  }


  .link-to-areas:hover {
  text-decoration: underline;
}

.separator {
  margin: 0 10px;
}

.orientation-info-name {
  margin: 0 10px;
  text-decoration: underline;
}

.area-info-container {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    padding-top: 20%;
    background-size: cover;
    min-height: 20vh;
    padding: 2rem;
}

.area-name {
  color: white;
  font-size: 3rem;
  font-weight: bold;
  border: 7px solid white;
  padding: 10%;
  width: 100%;
  text-align: center;
  text-shadow: 1px 1px black;
  box-shadow: 1px 1px black;
}

 .description-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 63.3%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0%;
  margin-bottom: 0%;
  background-size: cover;
  min-height: 20vh;
}

.description {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10%;
  background-color: #023047;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  box-sizing: border-box; /* Include padding in the width calculation */
}

  
.projects-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 7%;
  }

  .projects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    width: 80%;
  }

 
 
  .carousel-container {
    margin-top: 38px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3%;
    width: 80%;
    background-color: rgba(232, 232, 232, 0.5);
  }

  .projects-in-area {
    text-align: center;
    color: #023047;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
  }

  .projects-row {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 1em;
    align-items: center;
    margin-top: 20px;
  }

  .buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 40%;
    margin-right: 40%;
    
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button:hover {
    cursor: pointer;
  }

  .button:active {
    opacity: 0.5;
  }

  .button-img {
    width: 40%;
    height: auto;
    filter: invert();
    /* Since we are inverting the color we should put the opposite background color */ 
    background-color: rgb(253, 207, 184);
    border-radius: 100%;
  }

  /* Specify different style for when the page is too small */
  @media (max-width: 768px) {
  .area-name {
    font-size: 2rem; /* Adjust the font size for smaller screens */
    padding: 5%; /* Adjust the padding for smaller screens */
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
