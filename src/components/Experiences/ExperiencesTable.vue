<template>
    <table>
        <tr v-for="currentExperience in experiences" :key="currentExperience.company">
            <td class="row-period">
                <span class="period">
                    <span class="period-content">
                        {{ currentExperience.from }} - {{ currentExperience.to }}
                    </span>
                </span>
            </td>
            <td class="row-description">
                <p class="company">{{ currentExperience.role }} @ {{ currentExperience.company }}</p>
                {{ currentExperience.description }}
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    name: 'ExperiencesTable',
    data () {
        return {
            experiences: [
                { 
                    company: "Amazon",
                    role: "Sotfware Engineer",
                    from: "Sept 2020",
                    to: "Today",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
                },
                { 
                    company: "MindMaze",
                    role: "R&D Engineer",
                    from: "Feb 2019",
                    to: "Aug 2020",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitatix ea commodo consequat.`
                },
                { 
                    company: "Xeelas",
                    role: "Sotfware Engineer Freelance",
                    from: "Jun 2019",
                    to: "Dec 2019",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodo laboris nisi ut aliquip ex ea commodo consequat.`
                },
                { 
                    company: "Ilotopia",
                    role: "Software Engineer Freelance",
                    from: "Jan 2020",
                    to: "Apr 2020",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
                },
            ],
            education: [
                { 
                    school: "Georgia Institute of Technology",
                    major: "Electrical and Computer Engineering",
                    from: "2018",
                    to: "2019",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
                },
                { 
                    school: "IMT Atlantique",
                    major: "Control Engineering",
                    from: "2016",
                    to: "2019",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
                },
                { 
                    school: "Classe Preparatoire Bellevue",
                    major: "Mathematics",
                    from: "2013",
                    to: "2016",
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
                },
            ]
        }
    }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  color: grey;
}

.row-period {
    padding-right: 2em;
}

.row-period {
    border-right: 3px solid #2c3e5063;
}

.row-description {
    padding: 1em 0 1em 4em;
}

.company {
    width: 300px;
    margin: 1em 0;
    color: black;
}

.period {
    width: 200px;
    text-align: right;
    display: inline-block;
}

.period::after {
    content: "";
    display: block;
    width: 0.9em;
    height: 0.9em;
    background: #2C3E50;
    border-radius: 50%;
    right: calc(-200px - 2em + 0.9em/2 - 3px/2 + 5px);
    top: -1.3em;
    position: relative;
    border: 5px solid #e9edf0;
}

.period-content {
    background: #2C3E50;
    width: 180px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: white;
    font-size: 0.75em;
    font-family: sans-serif;
    position: relative;
    top: 0.5em;
}
</style>
