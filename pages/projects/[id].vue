<template>
  <main id="project-main">
    <div class="orientation-info">
      <NuxtLink class="link-to-projects" to="/projects">Project</NuxtLink>
      <span class="separator"> > </span>
      <span class="orientation-info-name">{{ project.name }}</span>
    </div>

    <section>
      <div class="project-info-container">
        <div class="project-info">
          <h1 class="project-name">{{ project.name }}</h1>
          <div class="project-area-container">
            <h6 class="project-area">Project area:</h6>
            <NuxtLink class="project-area-link" :to="'/areas/' + project.areas.id">{{ project.areas.name.toUpperCase() }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="image-description-container">
        <div class="project-image">
          <img id="main-img" :src="'/img/projects/' + project.id + '.png'" />
        </div>
        <div class="project-description">
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>

    <p class="involved"> People involved </p>

    <div class="people-container">
      <section class="people">
        <div class="supervisor-container">
          <div class="title">SUPERVISOR</div>
          <PersonCard :name="supervisor.name" 
            :role="supervisor.role"
            :link="'/people/' + supervisor.id" 
            :image="'/img/people/P' + supervisor.id + '.avif'"/>
        </div>
        <div class="workers-container">
          <div class="worker-row">
            <PersonCard v-for="worker in workers" 
              :name="worker.name" 
              :role="worker.role" 
              :link= "'/people/' + worker.id"
              :image="'/img/people/P' + worker.id + '.avif'" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
  const route = useRoute();
  const id = route.params.id;

  import { createClient } from '@supabase/supabase-js'
  const supabaseUrl = useRuntimeConfig().public.supabaseURL
  const supabaseKey = useRuntimeConfig().public.supabaseKEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data:project, error } = await supabase
  .from('projects')
  .select("* , people(*), areas(*)")
  .eq('id',id)
  .single()

  if (error)  console.log(error)
  console.log(project)
  let supervisor;
  let workers = [];
  for (let p of project.people) {
    if (p.id == project.supervisorId) {
      supervisor = p;
    } else {
      workers.push(p);
    }
  }
</script>


<style scoped>
  #project-main {
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
    text-align: center;
    width: fit-content;
    color: #023047;
    padding-left: 2%;
    background-color: white;
    border-radius: 7%;
  }

  .link-to-projects:hover {
    text-decoration: underline;
  }

  .separator {
    margin: 0 10px;
  }

  .orientation-info-name {
    margin: 0 10px;
    text-decoration: underline;
  }

  .project-info-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom:  5%;
  }

  .project-info {
    text-align: center;
    font-size: x-large;
    justify-content: center;
    padding-right: 2%;
    padding-left: 2%;
    background-color: rgba(2, 48, 71, 0.9);
    border-radius: 7px;
    color: white;
    width: 20%;
  }

  .project-name {
    margin-bottom: -25px;
  }
  .project-area-container {
    margin-top: -5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: -10px;
  }

  .project-area-link {
    color: white;
    font-weight: bolder;
    font-size: small;
  }

  .project-area-link:hover {
    text-decoration: underline;
  }
  .image-description-container {
    display: flex;
    flex-wrap: flex-start;
    align-items: center;
    padding-left: 20%;
    padding-right: 20%;
    margin-bottom: 5%;
    border-bottom: 2px solid lightgray;
    border-top: 2px solid lightgray;

  }

  .project-image {
    flex: 0 0 auto;
    margin-right: 100px;
    width: 40%;
    height: auto;
    justify-content: center;
  }

  #main-img {
    width: 100%;
    height: auto;
    border-radius: 7px;
    object-fit: cover;
  }

  .project-description {
    flex: 1 1 auto; 
    font-size: 18px;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 1%;
    border-radius: 7px;
  }

  .involved {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: larger;
    font-weight: bold;
    color: #023047;
  }
  
  .people-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 7%;
  }

  .people {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgba(2, 48, 71, 1);
    width: 80%;
  }
  
  .supervisor-container {
    margin-top: 20px;
    padding-top: 20px;
    text-align: center;
    margin-right: 5%;
  }

  .title {
    font-weight: bold;
    text-align: center;
    color: white;
    background-color: rgba(2, 48, 71, 0.9);;
    border-radius: 7px;
  }

  .workers-container {
    margin-top: 38px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3%;
  }

  .worker-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    align-items: center;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
  
  .project-info-container {
    margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
  padding: 0 10%;
}

.project-info {
  text-align: center;
  font-size: x-large;
  background-color: rgba(2, 48, 71, 0.9);
  border-radius: 7px;
  color: white;
  width: 100%;
  margin-bottom: 20px;
}
    .image-description-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  margin-bottom: 5%;
  border-bottom: 2px solid lightgray;
  border-top: 2px solid lightgray;
}

.project-image {
  margin-top: 20%;
  margin-right: 0;
  margin-bottom: 20px;
  width: 100%;
}

.project-description {
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1%;
  border-radius: 7px;
  text-align: center;
  width: 100%;
}


}
</style>
