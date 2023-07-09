<template class="content">
  <main id="AllProjects">
    <section id="projects-intro">
      <div id="projects">
        <div id="our-projects-container">
          <h1 id="our-projects">
            Our Portfolio
          </h1>
        </div>
        <h2 id="projects-introduction">
          Our venture capital portfolio showcases extensive industry expertise and profound domain understanding. We have effectively guided numerous companies in thriving through periods of rapid expansion and navigating complex business landscapes.
        </h2>
      </div>
    </section>

    <section class = form>
      <div class="filters-container">
        <div class="filter"
          :class="{ active: selectedArea === 'all' }"
          @click="selectedArea = 'all'">
            All Areas
        </div>
        <div class="filter" 
          :class="{ active: selectedArea === '0' }"
          @click="selectedArea = '0'">
            Technology
        </div>
        <div class="filter"
          :class="{ active: selectedArea === '1' }"
          @click="selectedArea = '1'">
            Healthcare
        </div>
        <div class="filter"
          :class="{ active: selectedArea === '2' }"
          @click="selectedArea = '2'">
            Energy
        </div>
      </div>
    </section>

    <section cards-section>
      <div class="cards-container">
          <ProjectCard
            v-for="project of filteredProjects"
            :key="project.id"
            :name="project.name"
            :description="project.description"
            :link="'/projects/' + project.id"
            :image="'/img/projects/' + project.id + '.png'"
          />
        </div>
    </section>
  </main>
</template>

<script setup>
  const router = useRouter()

  const queryParams = router.currentRoute.value.query

  const selectedArea = ref(queryParams.area || 'all')

  import { createClient } from '@supabase/supabase-js'
  const supabaseUrl = useRuntimeConfig().public.supabaseURL
  const supabaseKey = useRuntimeConfig().public.supabaseKEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data, error } = await supabase
    .from('projects')
    .select()

  const filteredProjects = computed(() => {
      if (selectedArea.value === 'all') {
        return data; // Return all projects if 'all' is selected
      } else {
        const filtered = data.filter(project => {return project.areaId == selectedArea.value});
        return filtered;
      }
  });
</script>

<style scoped>
  #AllProjects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    gap: 10px;
    align-items: center;
    margin-bottom: 7%;
  }

  #projects-intro
  {
    background-image: url("@/assets/img/projects_background.jpg");
    background-size: cover;
    width: 100vw;
    min-height: 40vh; 
    background-position-y: 65%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    color: white;
    margin-bottom: 1%;
    padding: 2rem;
    text-shadow: 1px 1px black;
  }

  #projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /*margin-left: auto;*/
    width: 50vw;
    margin-right: 5%;
    text-align: center;
  }

  #our-projects-container {
    text-align: right;
    margin-bottom: 1%;
  }

  #our-projects {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px; 
    border: 7px solid white;
    width: 100%;
    text-align: center;
    padding: 10%;
  }

  #projects-introduction {
    text-align: center; 
    padding: 3%;
    font-size: 1.5rem;
  }

.form {
  justify-content: right;
  text-align: right;
  padding-right: 20%;
  display: flex;
  width: 100%;
  
}

.filters-container {
  display: flex;
  justify-content: center;
  margin-bottom: 0%;
  background-color: rgba(211,211,211,0.5);
  padding: 0.5%;
  border-radius: 7px;
  gap: 0.2em;
}

.filter {
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  color: #023047;
  font-weight: bold;
}

.filter:hover {
  text-decoration: underline;
}
.filter.active {
  background-color: #023047;
  color: white;
  border-radius: 7px;
  text-decoration: none;

}
.cards-container {
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  text-decoration: none;
  border: none;
  margin-bottom: 3%;
}

@media (max-width: 768px) {
        #projects-intro {
            min-height: 30vh; /* Adjust the height for smaller screens */
            padding: 1rem; /* Reduce the padding */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        #our-projects {
            font-size: 2rem; /* Adjust the font size for smaller screens */
            padding: 0.5rem; /* Reduce the padding */
            margin: 0;
        }

        #projects-introduction {
            font-size: 1rem; /* Adjust the font size for smaller screens */
            margin: 0;
        }

        .filters-container {
          flex-direction: column;
        }
        .card-intro {
          font-size: 1.2rem;;
        }
    }
</style>
