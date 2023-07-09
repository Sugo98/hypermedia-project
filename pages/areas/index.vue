<template>
  <div class="content">
    <main id="areas">
      <div id="focus">
        <section id="areas-intro">
          <div id="our-focus-container">
            <h1 id="our-focus">Our Focus</h1>
          </div>
          <h2 id="areas-introduction">
            We invest to develop the future of Technology, Energy and Healthcare.
            We back entrepreneurs with bold vision seeking a business partner and not just a financial investor.
          </h2>
        </section>
      </div>

      <section class="areas-details">
        <div class="areas-preview-container">
          <div class="navigator">
            <p class="nav-intro">OUR FOCUS AREAS</p>
            <ul class="areas-container">
              <div
                v-for="(area, index) in areas"
                :key="index"
                class="area"
                :class="{ active: activeArea === index, selected: selectedArea === index }"
                @click="toggleArea(index); stopAutoToggle()"
              >
                <img class="area-logo" :src="area.logo" />
                <span class="area-name">{{ area.name }}</span>
              </div>
            </ul>
          </div>
        </div>
        <div class="area-content">
          <div class="area-content-inner">
            <div
              v-for="(area, index) in areas"
              :key="index"
              :class="`area-content-${area.key} ${activeArea === index ? 'active' : ''}`"
              class="image-description-container"
            >
              <div class="area-image">
                <img id="main-img" :src="area.image" :class="{ 'fade-in': activeArea === index }" />
              </div>
              <div id="area-description" :class="{ 'fade-in': activeArea === index }">
                <h2 id="area-desc-name">{{ area.name }}</h2>
                <p id="area-desc-desc">{{ area.description }}</p>
                <div class="links">
                  <NuxtLink class="link" :to="'/areas/' + area.id">MORE DETAILS</NuxtLink>
                  <NuxtLink class="link" :to="`/projects/allProjects/?area=${selectedArea}`">SEE PROJETCS</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="main-content">
        <div class="intro-sentence">
          We provide capital to data-driven tech companies within the Tech, Energy and Healthcare sector. We back entrepreneurs with bold vision seeking a business partner and not just a financial investor.
        </div>

        <div class="investment">
          <p>OUR CURRENT INVESTMENT</p>
          <div class="money">
            <div class="money-area-1">
              <h2 class="amount">$70M</h2>
              <h3 class="where">invested to shape the next era of technology</h3>
            </div>
            <div class="money-area-3">
              <h2 class="amount">$40M</h2>
              <h3 class="where">fostering the future of medical advancements</h3>
            </div>
            <div class="money-area-2">
              <h2 class="amount">$50M</h2>
              <h3 class="where">allocated towards energy from renewable sources</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeArea: 0,
      selectedArea: 0,
      isAutoToggleStopped: false,
      areas: [
        {
          key: 'technology',
          name: 'Technology',
          id: 0,
          logo: '/img/areas/technology_logo.png',
          image: '/img/areas/technology.jpg',
          description: 'Investing in technology innovators driving digital disruption.',
        },
        {
          key: 'healthcare',
          name: 'Healthcare',
          id: 1,
          logo: '/img/areas/healthcare_logo.png',
          image: '/img/areas/healthcare.jpg',
          description: 'Investing in visionary pioneers advancing medical breakthroughs and improving patient well-being.',
        },
        {
          key: 'energy',
          name: 'Energy',
          id: 2,
          logo: '/img/areas/energy_logo.png',
          image: '/img/areas/energy.jpg',
          description: 'Investing in forward-thinking pioneers revolutionizing the energy landscape.',
        },
      ],
    };
  },
  methods: {
    toggleArea(area) {
      if (area !== this.activeArea) {
        this.activeArea = area;
        this.selectedArea = area;
        this.isAutoToggleStopped = true;
        this.stopAutoToggle();
      }
    },
    autoToggleArea() {
      const nextArea = (this.activeArea + 1) % this.areas.length;
      this.activeArea = nextArea;
      this.selectedArea = nextArea;
    },
    startAutoToggle() {
      this.autoToggleInterval = setInterval(() => {
        this.autoToggleArea();
      }, 5000);
    },
    stopAutoToggle() {
      clearInterval(this.autoToggleInterval);
      this.autoToggleInterval = null;
    },
  },
  mounted() {
    this.startAutoToggle();
  },
};
</script>

<style scoped>
.fade-in {
  animation: fade-in 1s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
  #areas
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    gap: 10px;
    align-items: center;
  }

  #focus
  {
    background-image: url("@/assets/img/areas_background.jpg");
    background-size: cover;
    width: 100vw;
    min-height: 40vh; 
    background-position-y: 65%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    color: white;
    padding: 2rem;
    text-shadow: 1px 1px black;
  }

  #areas-intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /*margin-left: auto;*/
    width: 50vw;
    margin-right: 5%;
    text-align: center;
  }

  #our-focus-container {
    text-align: right;
    margin-bottom: 20px;
  }

  #our-focus {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px; 
    border: 7px solid white;
    width: 100%;
    text-align: center;
    padding: 10%;
  }

  #areas-introduction {
    text-align: center; 
    padding: 3%;
    font-size: 1.5rem;
  }

  .areas-details {
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  align-items: center;
  width: 60%;
  background-color: rgb(232,232,232);
}

  .areas-preview-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.navigator {
  text-align: center;
  color: #023047;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}


.areas-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}

.area {
  margin: 2%;
  position: relative;
  padding: 1%;
  cursor: pointer;
  border: 2px solid #023047;
  display: inline-block;
  width: 100%;
  height: 100%;
  font-weight: bold;
}

.area:hover {
  cursor: pointer;
}

.area.active{
  background-color: #023047;
  color: white;
}
.area.selected .area-logo {
  filter: invert(100%);
  color: white;
}

.area {
  margin: 2%;
  position: relative;
  padding: 1%;
  cursor: pointer;
  border: 2px solid #023047;
  display: flex; /* Use flex display */
  flex-direction: column;
  align-items: center; /* Center the logo and text vertically */
  font-weight: bold;
}

.area-logo {
  width:100vw;
  height: auto;
  max-width: 100px;

}

.area-name {
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 1%;

}

.area-content {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  width: 90%;
  text-align: center;
  background-color: rgb(232,232,232);
  padding: 5%;
}

.area-content-inner {
  border: 4px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-description-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.area-image {
  flex: 1;
  width:100%;
  height: auto;
  justify-content: center;
}

#main-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

#area-description {
  font-size: 1.2rem;
  width: 100%;
  flex: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 5%;
}

#area-desc-name {
  text-align: center;
  color: #023047;
}

#area-desc-desc {
  padding-left: 5%;
  padding-right: 5%;
}

.links {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
}

.link {
  flex: 1;
  text-align: center; 
  border-bottom:2px solid #023047;
  margin: 0 8%;
  font-weight: bold;
}

.link:hover {
  text-decoration: underline;
}

/* Hide all area content sections by default */
.area-content-technology,
.area-content-energy,
.area-content-healthcare {
  display: none;
  justify-content: center;
  align-items: center;
}

/* Show the selected area content section */
.area-content-technology.active,
.area-content-energy.active,
.area-content-healthcare.active {
  display: flex;
  flex-direction: row;
  
}

  .main-content {
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    justify-content: center;
    align-items: center;
    background-color: rgba(2, 48, 71, 0.9);
    width: 60%;
    margin-bottom: 7%;
    border: 2px solid lightgray;
    color: white;
  }
  
  .intro-sentence {
    text-align: center;
    padding-top: 5%;
    padding-left: 20%;
    padding-right: 20%;
    margin-bottom: 5%;
    font-size: 17px;
    font-weight: 500;
  }

  .investment{
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-weight: bold;
    color: #023047;
    margin-bottom: 10%;
    padding: 1%;
    text-align: center;
  }
  .money {
    margin-top: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    background-color: white;
    color: black;
  }

  .amount {
    margin-bottom: 0%;
  }

  .money-area-1, .money-area-2, .money-area-3 {
    width: 100%;
    text-align: center;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
  }

  .money-area-1 {
    border-right: 1px solid lightgray;
  }

  .money-area-3 {
    border-left: 1px solid lightgray;
  }

  .where {
    font-size: 1rem;
    padding-left: 5%;
    padding-right: 5%;
  }

  @media (max-width: 768px) {
        #areas-intro {
            min-height: 30vh; /* Adjust the height for smaller screens */
            padding: 1rem; /* Reduce the padding */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        #focus {
          justify-content: center;
        }

        #our-focus-container {
          justify-content: center;
          align-items: center;
        }

        #our-focus {
            font-size: 2rem; /* Adjust the font size for smaller screens */
            padding: 0.5rem; /* Reduce the padding */
            margin: 0;
        }

        #areas-introduction {
            font-size: 1rem; /* Adjust the font size for smaller screens */
            margin: 0;
        }
        
        .area-logo {
          width: 20vw;
        }
        .area-content-inner {
          display: flex;
          flex-direction: column;
        }

        .area-image {
          display: none;
        }

        .navigator {
          width: 40%;
        }

        .link {
          font-size: 0.9rem;
        }
    }

</style>




