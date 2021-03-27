<template>
    <ul>
        <li v-for='(currentExperience) in experiences' :key='currentExperience.company'>
            <div class='icon'><img :src='currentExperience.icon'/></div>
            <div>
                <span class='company'>{{ currentExperience.company }}</span>
                <p class='title'>{{ currentExperience.role }}</p>
                <p class='dates'>{{ currentExperience.from }} - {{ currentExperience.to }}</p>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ExperiencesList',
    data () {
        return {
            experiences: [
                {
                    company: 'Amazon',
                    role: 'Sotfware Engineer',
                    from: 'Sept 2020',
                    to: 'Today',
                    icon: '/static/img/aws.png'
                },
                {
                    company: 'MindMaze',
                    role: 'R&D Engineer',
                    from: 'Feb 2019',
                    to: 'Aug 2020',
                    icon: '/static/img/mindmaze.png'
                },
                {
                    company: 'Xeelas',
                    role: 'Embbeded Engineer',
                    from: 'Jun 2019',
                    to: 'Dec 2019',
                    icon: '/static/img/xeelas.png'
                },
                {
                    company: 'Ilotopia',
                    role: 'VR Developer',
                    from: 'Jan 2020',
                    to: 'Apr 2020',
                    icon: '/static/img/logo_ile_de_nantes_blue.svg'
                }
            ],
            education: [
                {
                    school: 'Georgia Institute of Technology',
                    major: 'Electrical and Computer Engineering',
                    from: '2018',
                    to: '2019',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
                },
                {
                    school: 'IMT Atlantique',
                    major: 'Control Engineering',
                    from: '2016',
                    to: '2019',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
                },
                {
                    school: 'Classe Preparatoire Bellevue',
                    major: 'Mathematics',
                    from: '2013',
                    to: '2016',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
                }
            ]
        }
    }
}
</script>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

li:nth-child(2) {
    justify-self: flex-end;
}

li:nth-child(4) {
    justify-self: flex-end;
}

li {
    display: flex;
    align-items: center;
    width: 400px;
    margin-bottom: 3em;
}

.icon {
    background: rgba(36, 70, 135, 0.48);
    height: 85px;
    width: 85px;
    border-radius: 50%;
    margin-right: 1em;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon img {
    width: 60px;
}

.title {
    margin-bottom: 0.2em;
    color: rgb(45, 45, 48);
    font-weight: 500;
    font-family: 'Oswald';
    font-size: 1.5em;
}

.company {
    font-weight: 400;
    font-variant: small-caps;
    text-transform: lowercase;
    font-family: 'Montserrat';
    font-size: 0.75em;
    letter-spacing: 4px;
}

.dates {
    font-size: 0.85em;
}

@media screen and (max-width: 800px) {
  .icon {
    display: none;
  }

  .title {
      text-align: left;
  }

  .company {
      display: block;
  }

  .dash {
      display: none;
  }
}

</style>
