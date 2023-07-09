<template>
    <main id="area-page">
      <div class="first-content" :style="{backgroundImage: 'url(/img/areas/' + area.name + '1.jpg)'}">
      <div class="area-name"> 
        {{ area.name }}
      </div>
    </div>
    <div>
      Description: {{ area.description }}
    </div>

    <div class="carousel">
      <button @click="previous">Previous</button>
      <div class="cards-container">
        <ProjectCard v-for="project of displayedProjects" 
          :name="project.name" 
          :description="project.description"
          :link="'/projects/' + project.id"
          :image="'/img/projects/' + project.id + '.png'" />
      </div>
      <button @click="next">Next</button>
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

  if (error) console.log(error)
  console.log(area)

  let currentIndex = ref(0);
  const projects = area.projects;

  const displayedProjects = computed(() => {
    let temp = projects.slice(currentIndex.value, currentIndex.value + 3);
    
    if (temp.length < 3)
      temp = temp.concat(projects.slice(0, 3 - temp.length))
    
    return temp; 
  });
  
  function previous() {
    currentIndex.value--
    if (currentIndex.value < 0) {
      currentIndex.value = projects.length - 1;
    }
  }
  
  function next() {
    currentIndex.value++
    if (currentIndex.value === projects.length) {
      currentIndex.value = 0;
    }
  }
</script>


<style scoped>
  #area-page{
    padding-top: 1%;
    justify-content: center;
    background-size: 100%;
  }

  .first-content
  {
    background-size: cover;
    background-position: center;
    height: 800px;


  }

  .area-name {
  position: absolute;
  left: 50px; /* Adjust the left value according to your preference */
  top: 50%;
  transform: translate(50%, -50%);
  font-size: 60px; /* Adjust the font size according to your preference */
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9); /* Add text shadow */
  border: 10px solid white;
  padding: 1%;
}

  

.carousel {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cards-container {
      display: flex;
    }

    .card {
      flex: 0 0 33.33%;
    }

    button {
      margin: 0 10px;
    }
  
  .carousel {
    display: flex;
    align-items: center;
  }
  
  .cards-container {
    display: flex;
  }
  
  .card {
    flex: 0 0 33.33%;
  }
  
  button {
    margin: 0 10px;
  }
</style>
