<template>
    <section id="contact" class="wrapper medium-background" ref="contact">
        <div class="content">
            <form id="contact-type-form">
                <h2>Let's start!</h2>
                <p>I want to hire a
                    <select>
                        <option>a freelancer</option>
                        <option>an employee</option>
                    </select>
                </p>
                <p class="margin-top-1em text-align-left">
                    Or drop me an email at
                    <a href="mailto:hello@symphonierz.com">symphonierz.com</a>
                    </p>
            </form>
            <div id="contact-form-wrapper">
                <form>
                    <fieldset>
                        <label>Full Name</label>
                        <input type="text" />
                    </fieldset>
                    <fieldset>
                        <label>Company (optional)</label>
                        <input type="text" />
                    </fieldset>
                    <fieldset class="grid-2">
                        <fieldset>
                            <label>Technology (optional)</label>
                            <input type="text" />
                        </fieldset>
                        <fieldset>
                            <label>Deadline (optional)</label>
                            <input type="date" />
                        </fieldset>
                    </fieldset>
                    <fieldset>
                        <label>Message</label>
                        <textarea rows="5"></textarea>
                    </fieldset>
                    <input type="submit" class="red-btn btn"/>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
#contact, .content {
    width: 100%;
}

.content {
    display: flex;
    flex-direction: row;
    padding-bottom: 4em;
    color:white!important;
}

h2 {
    font-family: 'Oswald';
    font-weight: 500;
    font-size: 2em;
    margin-top: 1em;
    color: white;
}

p {
    color: white;
}

#contact-type-form {
    background: #38394b;
    width: 350px;
    height: 250px;
    border-radius: 10px;
    padding: 1.5em 3em;

    position: relative;
    top: -50px;
    right: 5px;
    z-index: 5;
}

#contact-form-wrapper {
    background: white;
    width: 50%;
    border-radius: 10px;

    position: relative;
    top: 30px;
    left: -50px;
    padding: 2em 5em;
}

select {
    background: transparent;
    border: none;
    font-size: inherit;
    font-family: inherit;
    color: white;
    font-weight: bold;
    border-bottom: 2px solid white;
    padding-bottom: 2px;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
}

label {
    display: block;
    margin-bottom: 0.3em;
    font-size: 0.9em;
}

input[type="text"],
input[type="date"], textarea {
    width: 100%;
    border: none;
    background: #e2e2e261;
    padding: 0.5em 0.7em;
    border-radius: 5px;

    font-weight: 500;
}

input[type="submit"] {
    margin: 0 auto;
}

textarea {
    resize: none;
}

fieldset {
    border: none;
}

form > fieldset {
    margin: 1em;
}

.grid-2 {
    display: flex;
}

.grid-2 fieldset {
    flex: 1;
}

.grid-2 > fieldset:first-child {
    margin-right: 0.3em;
}

.grid-2 > fieldset:last-child {
    margin-left: 0.3em;
}

.margin-top-1em {
    margin-top: 1em;
}

.text-align-left {
    text-align: left;
}

a {
    opacity: 0.6;
    -webkit-opacity: 0.6;
}

@media screen and (max-width: 1200px) {
    .content {
        margin-top: 2em;
    }
}

@media screen and (max-width: 1100px) {
    .content {
        flex-direction: column!important;
        width: 80%;
        background: white;
        border-radius: 10px;
        align-items: center;
        height: auto;
        margin-bottom: 4em;
        padding-bottom: 2em;
    }

    #contact-type-form {
        height: auto;
        width: 90%;
        position: static;
        margin: 1em 0 2em 0;
    }

  #contact-form-wrapper {
      width: 92%;
      position: static;
      padding: 0;
  }
}

@media screen and (max-width: 800px) {
    .content {
        width: 90%;
    }

    #contact-type-form {
        margin-top: 0;
    }
}
</style>
