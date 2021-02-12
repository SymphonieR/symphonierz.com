<template>
    <section id="experiences" class="wrapper height-100vh"
      data-aos="fade-right" data-aos-duration="500" data-aos-offset="200">
        <div class="content">
            <h1>About</h1>
            <experiences-list></experiences-list>
        </div>
    </section>
</template>

<script>
import ExperiencesList from './ExperiencesList'

export default {
    name: 'ExperiencesSection',
    components: {
        ExperiencesList
    }
}
</script>

<style scoped>
.content {
  background: white;
  width: 75%;
  border-radius: 5px;
  padding: 4em 7em;
  box-shadow: 4px 4px 3px #0a0a0a12;
}

h1 {
  text-align: center;
  margin-bottom: 2em;;
}

@media screen and (max-width: 800px) {
  .content {
    padding: 4em 4em;
    width: 85%;
  }
}
</style>
