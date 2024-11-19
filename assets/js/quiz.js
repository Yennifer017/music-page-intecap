const quizResults = [
    {
        title: "Eres un alma clásica con un toque rebelde",
        content: `Te encanta mantenerte conectado con lo auténtico y valorar la profundidad en las cosas. 
        Eres apasionado y tienes una energía que inspira a quienes te rodean. 
        La nostalgia es tu mejor amiga, y sabes cómo convertir cualquier momento en una historia épica. 🎸✨`
    },
    {
        title: "Eres un soñador moderno",
        content: `Tu personalidad es vibrante y adaptable, siempre encontrando belleza en las cosas simples y alegres. 
        Te encanta sentirte conectado con los demás y vivir momentos cotidianos llenos de significado. 
        Seguramente tienes una playlist que puede levantar el ánimo de cualquiera. 🎶🌟`
    },
    {
        title: "Eres un espíritu libre con ritmo",
        content: `Tienes una personalidad dinámica y enérgica. 
        No te gusta quedarte quieto, y siempre buscas aventuras que pongan a prueba tu creatividad y tus habilidades. 
        ¡Tienes un talento natural para hacer que las cosas sean emocionantes! 🥁🔥`
    },
    {
        title: "Eres un artista sensible y profundo",
        content: `Tu personalidad está llena de matices y emociones. 
        Valoras los pequeños detalles y buscas significado en todo lo que haces. 
        Tienes una capacidad única para conectar con los demás a través de tu sensibilidad y autenticidad. 🎻🌌`
    },
    {
        title: "Eres un camaleón musical",
        content: `Tienes gustos eclécticos y una personalidad versátil. 
        Sabes adaptarte a cualquier situación y conectar con personas de todos los estilos. 
        ¡Eres el amigo que siempre tiene una canción perfecta para cada momento! 🌈🎧`
    }
];

function processPersonalityQuiz(event){
    console.log('form do something!');
    const resultElement = document.getElementById('resultQuiz');
    event.preventDefault();
    let selections = [0, 0, 0, 0];
    let errorMss = [];
    for (let i = 0; i < 7; i++) {
        const selectedOption = document.querySelector(`input[name="selection[${i}]"]:checked`);
        if(selectedOption){
            switch(selectedOption.value){
                case '0':
                    selections[0] ++;
                    break;
                case '1':
                    selections[1] ++;
                    break;
                case '2':
                    selections[2] ++;
                    break;
                case '3':
                    selections[3] ++;
                    break;
            }
        } else {
            errorMss.push('No se selecciono ninguna opcion en la pregunta ' + (i+1));
        }
    }
    if(errorMss.length !== 0){
        errorMss.forEach((element) => 
            resultElement.innerHTML += 
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    ${element}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
        );
    } else {
        console.log(selections);
        let indexes = getMaxIndexElement(selections);
        let responseIndex = indexes.length == 1 ? indexes[0] : 4;
        resultElement.innerHTML += 
            `<div class="alert alert-success alert-dismissible fade show" role="alert">
                <h4 class="alert-heading">${quizResults[responseIndex].title}</h4> 
                <hr>
                <p>${quizResults[responseIndex].content}</p>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
    }
    const firstElement = document.getElementById('quiz-section');
    firstElement.scrollIntoView({ behavior: 'smooth' });
}

function getMaxIndexElement(array){
    let indexes = [0];
    let maxIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[maxIndex]) {
            maxIndex = i;
            indexes = [];
            indexes.push(maxIndex);
        } else if(array[i] == array[maxIndex]){
            indexes.push(i)
        }
    }
    console.log("indexes:");
    console.log(indexes);
    return indexes;
}

function resetQuizForm(){
    console.log('reset quiz');
    const quizForm = document.getElementById("musicQuizForm");
    quizForm.reset();
}