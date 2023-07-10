<!-- Layout of all the pages -->

<template> 
    <div class="page">
        <TheHeader />
        <!-- Main content of the page-->
        <main id ="content">
            <slot />
        </main>
        
        <TheFooter />
    </div>
</template>

<style>

body {
    /*background-color: #fdfd97;*/
    background-image: url("https://img.freepik.com/free-vector/gradient-hexagonal-background_23-2148938116.jpg?size=626&ext=jpg");
    background-size: contain;
    margin: 0;
    padding: 0;
    
}

#content {
    margin-top: 12vh;
}

.page {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
}

/* Specify different style for when the page is too small */
@media (max-width: 768px) {
    #content {
        margin-top: 22vh;
    }
}
</style>