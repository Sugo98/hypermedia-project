<template>
  <main id="person-main">
    <div class="orientation-info">
      <NuxtLink class="link-to-team" to="/people">Team</NuxtLink>
      <span class="separator"> > </span>
      <span class="orientation-info-name">{{ person.name }}</span>
    </div>
    
    <section>
      <div class="person-info-container">
        <div class="person-info">
          <h1 class="person-name">{{person.name}}</h1>
          <h3 class="person-role">{{ person.role }}</h3>
        </div>
      </div>
    </section>

    <section>
      <div class="image-description-container">
        <div class="person-image">
          <img id="main-img" :src="`/img/people/P${person.id}.avif`" />
        </div>
        <div class="person-description">
          <p>{{ person.description }}</p>
        </div>
      </div>
    </section>

    <div class="projects-container">
      <section class="projects">
        <div class="supervisor-carousel-container">
          <div class="supervisor-container">
            <div class="title">SUPERVISOR</div>
            <ProjectCard :name="supervisor.name" 
              :description="supervisor.description"
              :link="'/projects/' + supervisor.id" 
              :image="'/img/projects/' + supervisor.id + '.png'"/>
          </div>
          <div class="carousel-container">
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
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;


import { createClient } from '@supabase/supabase-js'
const supabaseUrl = useRuntimeConfig().public.supabaseURL
const supabaseKey = useRuntimeConfig().public.supabaseKEY
const supabase = createClient(supabaseUrl, supabaseKey)

const { data:person, error } = await supabase
  .from('people')
  .select("* ,projects(*)")
  .eq('id',id)
  .single()

let currentIndex = ref(0);
const projects = person.projects;

let supervisor;
let worksOn = [];

for (let project of projects) {
  if (project.supervisorId == person.id)
    supervisor = project;
  else 
    worksOn.push(project);
}

const displayedProjects = computed(() => {
  let temp = worksOn.slice(currentIndex.value, currentIndex.value + 3);

  if (temp.length < 3) {
    temp = temp.concat(worksOn.slice(0, 3 - temp.length));
  }

  return temp;
});

function previous() {
  currentIndex.value--;
  if (currentIndex.value < 0) {
    currentIndex.value = worksOn.length - 1;
  }
}

function next() {
  currentIndex.value++;
  if (currentIndex.value === worksOn.length) {
    currentIndex.value = 0;
  }
}

console.log(worksOn)
</script>

<style scoped>
#person-main {
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
  width: 100vw;
  color: #023047;
  padding-left: 2%;
  background-color: white;
  width: fit-content;
}

.link-to-team:hover {
  text-decoration: underline;
}

.separator {
  margin: 0 10px;
}

.orientation-info-name {
  margin: 0 10px;
  text-decoration: underline;
}

.person-info-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5%;
}

.person-info {
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

.person-name {
  margin-bottom: 7px;
}
.person-role {
  margin-top: 0;
}

.image-description-container {
  display: flex;
  flex-wrap: flex-start;
  align-items: center;
  padding-left: 20%;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-right: 20%;
  margin-bottom: 5%;
  border-bottom: 2px solid lightgray;
  border-top: 2px solid lightgray;
}

.person-image {
  flex: 0 0 auto;
  margin-right: 100px;
  width: 40%;
  height: auto;
  justify-content: center;
}

#main-img {
  width: 100%;
  height: auto;
  border-radius: 7%;
  object-fit: cover;
}


.person-description {
  flex: 1 1 auto; 
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1%;
  border-radius: 7px;
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

  .supervisor-carousel-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
  
  .supervisor-container {
    margin-top: 20px;
    padding-top: 20px;
    text-align: center;
  }

  .title {
    font-weight: bold;
    text-align: center;
    color: white;
    background-color: rgba(2, 48, 71, 0.9);;
    border-radius: 7px;
  }

  .carousel-container {
    margin-top: 38px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3%;
    width: 80%;
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
    background-color: rgb(253, 207, 184);
    border-radius: 100%;
  }

  @media (max-width: 768px) {

    .person-info-container {
    margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
  padding: 0 10%;
}

.person-info {
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

.person-image {
  margin-top: 20%;
  margin-right: 0;
  margin-bottom: 20px;
  width: 100%;
}

.person-description {
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1%;
  border-radius: 7px;
  text-align: center;
  width: 100%;
}
  }
</style>
