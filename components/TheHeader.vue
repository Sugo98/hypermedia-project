<template>
    <header>
        <div class="header-content">
            <div class="logo-wrapper">
                <NuxtLink class="logo-link" to="/">
                    <img id="logo" src="~/assets/img/logo-yellow-dragons1.png" />
                </NuxtLink>
            </div>
            <div class="center-landmarks">
                <div id="landmarks">
                    <!-- Se vogliamo che il landmark sia attivo anche quando siamo in una sotto-pagina-->
                    <!--<NuxtLink class="nuxtlink" to="/people" :class="{ 'active-link': isPeopleActive }">PEOPLE</NuxtLink>-->
                    <NuxtLink class="nuxtlink" to="/people" exact-active-class="active-link">TEAM</NuxtLink>
                    <NuxtLink class="nuxtlink" to="/projects" exact-active-class="active-link">PROJECTS</NuxtLink>
                    <NuxtLink class="nuxtlink" to="/areas" exact-active-class="active-link">AREAS</NuxtLink>
                    <NuxtLink class="nuxtlink" to="/contacts" exact-active-class="active-link">ABOUT US</NuxtLink>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    const route = useRoute()
        const isPeopleActive = computed(() => {
        const routePath = route.path
        return routePath.startsWith('/people')
    })
</script>

<style>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.9);
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0em 2em;
}

.logo-wrapper {
    display: flex;
    align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  height: 100%;
}

#logo {
    height: 5em;
    width: auto;
    max-width: 100%;
}

.center-landmarks {
    
    display: flex;
}

#landmarks {
    display: flex;
    font-weight: bold;
    gap: 1em;
    flex-wrap: nowrap;
}

a {
    color: #023047;
    padding: 1em;
    position: relative;
}

.nuxtlink {
    text-decoration: none;
}

.nuxtlink:hover {
    text-decoration: underline;
}

.active-link {
    color: white;
    background-color: #023047;
    border-radius: 7px;
    box-sizing: border-box;
    text-decoration: none;
}

.active-link:hover {
    text-decoration: none;
}

@media (max-width: 768px) {
    /* Styles specific to screens with a maximum width of 768px (e.g., mobile devices) */
    .header-content {
        padding: 0.5em; /* Further reduce padding for smaller screens */
    }

    #logo {
        height: 3em; /* Reduce logo size further for smaller screens */
    }

    #landmarks {
        flex-direction: column; /* Stack landmarks vertically on smaller screens */
        align-items: center;
        gap: 0.1em; /* Add some spacing between landmarks */
    }

    a {
        padding: 0.1em; /* Reduce padding further for smaller screens */
    }
}

</style>
