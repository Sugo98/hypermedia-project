<!-- Contacts component: This component shows the main contacts of the page -->

<template>
    <div class="area-image">
      <div id="image-text-container">
        <div class="image-text">
          <div class="image-container">
            <img class="img" src="~/assets/img/address.png" />
          </div>
          <div class="text-container">
            <h3>Address</h3>
            <p>Fire Street - 42 - DragonLand</p>
          </div>
        </div>
  
        <div class="image-text">
          <div class="image-container">
            <img class="img" src="~/assets/img/phone.jpg" />
          </div>
          <div class="text-container">
            <h3>During Business Hours</h3>
            <p>Tel. 30483728190</p>
          </div>
        </div>
  
        <div class="image-text">
          <div class="image-container">
            <img class="img" src="~/assets/img/mail.png" />
          </div>
          <div class="text-container">
            <h3>For General Questions</h3>
            <p>yellowdragons@mail.com</p>
          </div>
        </div>
  
        <div class="image-text">
          <div class="image-container">
            <img class="img" src="~/assets/img/fax.jpg" />
          </div>
          <div class="text-container">
            <h3>24/7</h3>
            <p>Fax. 0248026819@invio.faxon.com</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Contact",
  };
  </script>
  
  <style scoped>
  .area-image {
    margin-top: 20px;
  }
  
  #image-text-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .image-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    width: 200px;
    text-align: center;
  }
  
  .image-container {
    width: 100px;
    height: 100px;
  }
  
  .text-container {
    margin-top: 10px;
  }
  
  .img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
  
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  p {
    font-size: 14px;
  }
  </style>
  