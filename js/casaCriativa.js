const onOff = () => {
    document
        .querySelector('#modal')
        .classList
        .toggle("hide")

    document
        .querySelector('body')
        .classList
        .toggle("hideScroll")

    document
        .querySelector('#modal')
        .classList
        .toggle("addScroll")

};

const newIdea = document.getElementById('newIdea')

newIdea.addEventListener('click', (e) => {
    window.open("./ideias.html");
})