<template class="content">
    <main id="people">
        <section id="team-intro">
            <div id="Team">
                <div id="meet-the-team-container">
                    <h1 id="meet-the-team">
                        Meet the team
                    </h1>
                </div>
                <h2 id="team-introduction">
                    Our team has broad industry experience and deep domain knowledge. We have successfully led organizations in high-growth and challenging environments.
                </h2>
            </div>
        </section>
        
        <section>
            <div id="card-container">
                <PersonCard v-for = "person of employees"
                    :name = "person.name"
                    :role = "person.role"
                    :link = "'/people/' + person.id"
                    :image = "'/img/people/P' + person.id + '.avif'"
                />
            </div>
        </section>
    
        <section class="ceo">
            <div class="ceo-container">
                <div class="ceo-description">
                    <h2 style="text-decoration: underline;">Our CEO</h2>
                    <h3>Excels in leading and inspiring a talented team, driving collaborative efforts, and maximizing individual strengths to achieve exceptional results.</h3>
                </div>
                <div class="ceo-card">
                    <PersonCard
                    :name = "ceo.name"
                    :role = "ceo.role"
                    :link = "'/people/' + ceo.id"
                    :image = "'/img/people/P' + ceo.id + '.avif'"
                />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import PersonCard from '~/components/PersonCard.vue';
import { createClient } from '@supabase/supabase-js'

console.log("supabaseURL = " + useRuntimeConfig().public.supabaseURL)

const supabaseUrl = useRuntimeConfig().public.supabaseURL
const supabaseKey = useRuntimeConfig().public.supabaseKEY
const supabase = createClient(supabaseUrl, supabaseKey)

const { data, error } = await supabase
  .from('people')
  .select()
let employees = new Array();
let ceo;

for (let person of data) {
    if (person.id == 10)
        ceo = person; 
    else 
        employees.push(person)
}



</script>

<style scoped>
    #people
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
        align-items: center;
    }

    #team-intro
    {
        background-image: url("@/assets/img/team_background.avif");
        background-size: cover;
        width: 100vw;
        min-height: 40vh; 
        background-position-y: 65%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        color: white;
        margin-bottom: 3%;
        padding: 2rem;
        text-shadow: 1px 1px black;
    }

    #Team {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /*margin-left: auto;*/
        width: 50vw;
        margin-right: 5%;
        text-align: center;
    }

    #meet-the-team-container
    {
        text-align: right; 
        margin-bottom: 20px;
    }
    
    #meet-the-team
    { 
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 20px; 
        border: 7px solid white;
        width: 100%;
        text-align: center;
        padding: 10%;
       
    }

    #team-introduction {
        text-align: center; 
        padding: 3%;
        font-size: 1.5rem;

    }

    #card-container {
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

.ceo-container {
    display: flex;
    flex-direction: row;
    width: 70%;
    margin: 0 auto;
    background-color: #023047;
    align-items: center;
    margin-bottom: 10%;
    flex-wrap: wrap;
}

.ceo-description {
    flex: 1;
    padding: 10%;
    color: white;
    
}

.ceo-card {
    flex: 1;
}

@media (max-width: 768px) {
        #team-intro {
            min-height: 30vh; /* Adjust the height for smaller screens */
            padding: 1rem; /* Reduce the padding */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        #meet-the-team {
            font-size: 2rem; /* Adjust the font size for smaller screens */
            padding: 0.5rem; /* Reduce the padding */
            margin: 0;
        }

        #team-introduction {
            font-size: 1rem; /* Adjust the font size for smaller screens */
            margin: 0;
        }

        .ceo-container {
            justify-content: center;
        }
    }
</style>
