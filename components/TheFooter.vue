<!-- Footer component -->
<template>
  <footer>
    <div class="footer-content">
      <div class="footer-links-container">
        <ul>
          <li><NuxtLink class="footer-link" to="/">Home</NuxtLink></li>
          <li><NuxtLink class="footer-link" to="/contacts/?option=0">About Us</NuxtLink></li>
          <li><NuxtLink class="footer-link" :to="`/contacts/?option=2`">Contact Us</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #f2f2f2;
  padding: 2em 0;
  width: 100%
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  margin-right: 1em;
}

a {
  color: #023047;
  text-decoration: none;
}

.footer-bottom {
  text-align: center;
  margin-top: 2em;
}

.footer-bottom p {
  color: #777;
  font-size: 0.8em;
}

.footer-link:hover {
  text-decoration: underline;
}

</style>
