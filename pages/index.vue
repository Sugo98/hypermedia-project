
<template>
    <div class="content">
      <main id="home-page">

        <section id="section-intro">
          <div id="sub">
            <div id="container">
              <h1 id="inner1">Our people</h1>
            </div>
            <h2 id="inner2">We lend an operator's perspective and decades of experience to the founders and companies we work with.</h2>
            <NuxtLink class="link" to="/people">Learn More</NuxtLink>
          </div>
        </section>
        
        <section id="section-projects">
          <div id="sub">
            <div id="container">
              <h1 id="inner1">Projects</h1>
            </div>
            <h2 id="inner2">Explore our innovative projects that are shaping the future.</h2>
            <NuxtLink class="link" to="/projects">View Projects</NuxtLink>
          </div>
        </section>
        
        <section id="section-areas">
          <div id="sub">
            <div id="container">
              <h1 id="inner1">Areas</h1>
            </div>
            <h2 id="inner2">Discover our focus areas: Technology, Energy, and Healthcare.</h2>
            <NuxtLink class="link" to="/areas">Explore Areas</NuxtLink>
          </div>
        </section>
  
        <section id="section-about">
          <div id="sub">
            <div id="container">
              <h1 id="inner1">About Us</h1>
            </div>
            <h2 id="inner2">Learn more about our mission and values.</h2>
            <NuxtLink class="link-about" to="/contacts">Read More</NuxtLink>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  #home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    width: 100vw; /* Set the home-page width to the full viewport width */
  }
  
  section {
    margin-bottom: 3%;
    padding: 2rem;
    color: white;
  }
  
  #section-intro {
    background-image: url("@/assets/img/team_background.avif");
    background-size: cover;
    width: 80vw;
    min-height: 20vh;
    background-position-y: 65%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px black;
  }
  
  #section-projects {
    background-image: url("@/assets/img/projects_background.jpg");
    background-size: cover;
    width: 80vw;
    min-height: 20vh;
    background-position-y: 65%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px black;
  }
  
  #section-areas {
    background-image: url("@/assets/img/areas_background.jpg");
    background-size: cover;
    width: 80vw;
    min-height: 20vh;
    background-position-y: 65%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-shadow: 2px 2px black;
  }
  
  #section-about {
    background-color: transparent;;
    width: 80vw;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #023047;
    border: 2px solid rgb(232, 232, 232);
  }
  
  #sub {
    text-align: center;
  }
  
  #container {
    margin-bottom: 1rem;
  }
  
  #inner1 {
    font-size: 2rem;
    font-weight: bold;
  }
  
  #inner2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  .link {
    font-size: 1rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }

  .link-about {
    font-size: 1rem;
    font-weight: bold;
    color:#023047;
    text-decoration: none;
  }
  
  .link:hover, .link-about:hover {
    text-decoration: underline;
  }
  </style>
  