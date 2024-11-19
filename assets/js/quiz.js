const QuizResults = [
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
    event.preventDefault();
    // Capturar las respuestas seleccionadas
    let selections = [];
    for (let i = 0; i < 7; i++) {
        const selectedOption = document.querySelector(`input[name="selection[${i}]"]:checked`);
        if(selectedOption){
            
        } else {

        }
    }
}