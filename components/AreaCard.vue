<template>
    <main>
        <NuxtLink :to="link" class="divLink">
            <div class="card" :style="{backgroundImage: 'url(' + image + ')'}">
                <div class="details">
                    <span class="name"> {{ name }} </span>
                    <span class="description"> {{ description }}</span>
                </div>
            </div>
        </NuxtLink>   
    </main>
</template>

<script setup>   
    const props = defineProps(['name', 'link', 'image']);
    console.log(props)
</script>

<style scoped>
    .divLink
    {
        text-decoration: none;
    }
    
    .card
    {
        display: flex;
        flex-flow: column;
        padding: 20px;border: 1px solid black;
        
        border-radius: 20px;
        width: 350px;
        height: 300px;
        margin: auto;
        transition: opacity 0.3s;
        background-size: cover;
        background-position: center;
        color: white;
        
    }
    .card:hover 
    {
        opacity: 0.5;
    }
    

    .image-container
    {
        display: flex;
        justify-content: center;
        border: 2px dashed red;
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
    }

    .details 
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        /*background-color: rgba(0, 0, 0, 0.5); /* Aggiunta di un background trasparente per il contenuto */
        padding: 10px;
        border-radius: 10px;
    }
    
</style>