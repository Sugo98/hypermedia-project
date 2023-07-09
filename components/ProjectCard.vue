<template>
    <main>
        <NuxtLink :to="link" class="divLink">
            <div class="card">
                <div class="image-container">
                    <img class="img" :src="image" />
                </div>
                <span class="details">{{ name }}</span>
                <!-- <span class="details">{{ description }}</span> -->

            </div>
        </NuxtLink>   
    </main>
</template>

<script setup>
    const props = defineProps(['name', 'description', 'link', 'image'])
</script>

<style scoped>
    .divLink
    {
        text-decoration: none;
        justify-content: center;
        flex: 0 0 auto;
    }
    
    .card
    {
        display: flex;
        flex-flow: column;
        padding: 20px;
        border: 1px solid lightgrey;
        border-radius: 0px;
        width: fit-content;
        height: fit-content;
        margin: auto;
        justify-content: center;
        margin: 0 auto;
        max-width: 250px;
        flex: 0 0 33.33%;
        background-color: white;
        
    }
    .card:hover 
    {
        border: 1px solid #023047;
    }
    

    .image-container
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
        background-color: white;
    }

    .details 
    {
        text-align: center;
        font-size: large;
        font-family: sans-serif;
        font-weight: bold;
        color: white;
        background-color: #023047;
        border-radius: 7px;
    }
</style>
