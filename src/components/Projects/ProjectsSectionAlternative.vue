<template>
    <section id="projects" class="wrapper">
        <div class="content">
            <h1>Projects</h1>
            <div class="filter-list">
                <div v-for="value in tags" :key="value" class="filter-element btn cursor-pointer" @click="activateTag(value)" v-bind:class="{ active: activeTag == value }">
                    {{ value }}
                </div>
            </div>
            <transition-group name="project-transition" tag="div" class="project-list" data-aos="fade-up">
                <div v-for="(currentProject, index) in filteredProjectsByTag" :key="currentProject.name"
                    class="project-element" :class="{ 'project-element-longer' :  (index-1) % 3 === 0 }"
                    :style="{ transform: computeProjectElementTopOffset(index) }">
                </div>
            </transition-group>
        </div>
    </section>
</template>

<script>
const TagsEnum = {'All': 'All', 'Models': '3D Models', 'Websites': 'Websites', 'Games': 'Games'}
Object.freeze(TagsEnum)

export default {
    name: 'ProjectsSection',
    data () {
        return {
            tags: TagsEnum,
            activeTag: TagsEnum.All,
            projects: [
                {
                    name: 'Waterproof Enclosure',
                    description: '',
                    tag: TagsEnum.Models
                },
                {
                    name: 'Motor Mount',
                    description: '',
                    tag: TagsEnum.Models
                },
                {
                    name: 'Norde',
                    description: '',
                    tag: TagsEnum.Websites
                },
                {
                    name: 'Calculator',
                    description: '',
                    tag: TagsEnum.Websites
                },
                {
                    name: 'Gala',
                    description: '',
                    tag: TagsEnum.Websites
                },
                {
                    name: 'Wander',
                    description: '',
                    tag: TagsEnum.Games
                }
            ]
        }
    },
    computed: {
        filteredProjectsByTag: function () {
            if (this.activeTag === TagsEnum.All) {
                return this.projects
            }

            return this.projects.filter(project => project.tag === this.activeTag)
        }
    },
    methods: {
        activateTag: function (tag) {
            this.activeTag = tag
        },
        computeProjectElementTopOffset (index) {
            if ((index - 1) % 3 === 0) {
                return 0
            }

            let line = Math.floor(index / 3)
            let gap = line * 2
            return `translateY(-${gap}em)`
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
}

button {
    background: none;
    border: none;
    color: inherit;
}

.filter-list {
    display: flex;
    justify-content: center;
    margin: 1em 0;
}

.filter-element {
    color: grey;
    margin: 1em 2em;
    height: 25px;
    padding: 0 1em;
}

.filter-element.active {
    color: black;
    background: white;
}

.project-list {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: calc((250px + 1em) * 3);
    margin: 0 auto;
    flex-wrap: wrap;
}

.project-element {
    background: lightgrey;
    border-radius: 10px;
    width: 250px;
    height: 250px;
    margin: 0.5em 0.5em;
    position: relative;
}

.project-element-longer {
    height: calc(250px + 2em);
}

.content {
    width: 100%;
    padding-bottom: 10em;
}

.project-transition-enter-active {
  animation: scale-in .4s;
}

.project-transition-leave-active {
  animation: scale-in .4s reverse;
}

@keyframes scale-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.project-transition-move {
  transition: transform 0.4s ease;
}

.project-transition-leave-active {
  position: absolute;
}

@media screen and (max-width: 1200px) {
  .project-list {
    width: calc((250px + 1em) * 2);
  }

  .project-element, .project-element-longer {
      height: 250px;
      transform: none!important;
  }
}

@media screen and (max-width: 650px) {
  .project-list {
    width: calc((250px + 1em) * 1);
  }

  .filter-element {
      margin: 1em 0.1em;
  }
}
</style>
