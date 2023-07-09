<template>
  <div class="content">
    <main id="areas">
      <div id="focus">
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
      </div>

      <section cards-section>
      <h1 class="card-intro"> MOST RELEVANT PROJECTS </h1>
      <div class="cards-container">
          <ProjectCard
            v-for="project of projects"
            :key="project.id"
            :name="project.name"
            :description="project.description"
            :link="'/projects/' + project.id"
            :image="'/img/projects/' + project.id + '.png'"
          />
        </div>
    </section>
    
    <div class="center-nuxtlink">
      <NuxtLink to="/projects/allProjects" class="nuxtlink">
        <div class=nav-button>
          Click here to see <b>all our project</b>
        </div>
      </NuxtLink>
    </div>

    </main>
  </div>
</template>

<script setup>
  const router = useRouter()

  const queryParams = router.currentRoute.value.query

  const selectedArea = ref(queryParams.area || 'all')

  import { createClient } from '@supabase/supabase-js'
  const supabaseUrl = useRuntimeConfig().public.supabaseURL
  const supabaseKey = useRuntimeConfig().public.supabaseKEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data:projects, error } = await supabase
    .from('projects')
    .select()
    .eq('mostRelevant',1)
  console.log(projects)
</script>


<style scoped>
  #AllProjects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    gap: 10px;
    align-items: center;
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
    text-shadow: 1px 1px black;
    margin-bottom: 3%;
    padding: 2rem;
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
    margin-bottom: 20px;
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

.nav-button {
  text-align: center;
  font-size: x-large;
  justify-content: center;
  padding: 1em;
  margin-bottom: 1em;
  background-color: rgba(2, 48, 71, 0.9);
  border-radius: 7px;
  color: white;
  border: solid rgba(2, 48, 71, 0.9);
}

.nav-button:hover {
  background-color: rgba(2, 48, 71, 0.6);
}

.card-intro {
  text-align: center;
  color: #023047;
  font-weight: bold;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}

.nuxtlink {
  text-decoration: none;
}

.nuxtlink:hover {
  text-decoration: none;
}

.center-nuxtlink {
  width: 40%;
  margin: auto;
  margin-bottom: 7%; 
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

        .card-intro {
          font-size: 1.2rem;;
        }
    }
</style>