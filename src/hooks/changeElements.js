import { useState } from "react"
//import confetti from 'canvas-confetti'

export const useChangeElements = () => {
    const [index, setIndex] = useState(0);
    const [textP, setTextP] = useState('Vamos, respondeme! ');
    const [image, setImage] = useState('https://i.pinimg.com/originals/f6/a5/f7/f6a5f7ddff1f05cbcc560256b9f98c2e.gif');
    const [buttonClickCount, setButtonClickCount] = useState(0); // Agrega este estado

    const options = ['Segura?', 'Segurisima?', 'Estas completamente segura?', 'No te arrepentiras?', 'Pero si estas segura?', 'No hay vuelta atras', 'No hay devoluciones', 'No hay garantias', 'No hay reembolsos', 'No hay cambios', 'No hay nada', 'No hay', 'Que no hay'];

    const handleButtonYes = () => {
        setIndex(index + 1);
        setImage('https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif');
        setTextP(options[index]);

        if (index === options.length - 1) setIndex(0);
        else if (index >= 11) {
            setImage("https://i.pinimg.com/originals/e4/9d/7b/e49d7b7e965f09e31b498314b02e3662.gif");
            setTextP('Gracias por aceptar, te amo mucho <3');
            //confetti();
        }
    };

    function mueveBoton() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const newWidth = Math.random() * width;
        const newHeight = Math.random() * height;

        const BtnNo = document.getElementById("no");
        BtnNo.style.position = "absolute";
        BtnNo.style.left = newWidth + "px";
        BtnNo.style.top = newHeight + "px";
    }

    const handleButtonNo = () => {
        mueveBoton();
        setButtonClickCount(buttonClickCount + 1);

        // Después de 3 intentos, mueve el botón
        if (buttonClickCount >= 2) {
            setImage("https://media.tenor.com/nAm-uTNl8b8AAAAj/めるる-密桃猫.gif");
            setTextP('OK! ');
            setButtonClickCount(0); // Reinicia el contador después de mover el botón
        }
    };

    return { handleButtonNo, handleButtonYes, textP, image };
};