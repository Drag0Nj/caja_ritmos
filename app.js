const muaicar = document.querySelector('.muaicar');//trae todo los elemnetos dentro de calculador de la HTML
const keys = muaicar.querySelector('.muaicar__keys');//trae los elementos con class calculador__key
const display = document.querySelector('.muaicar__display');//trae los elementos del display



keys.addEventListener('click', e =>{//al hacer el click detectot de evento
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;//toma el valor de data-action
        const keyContent = key.textContent; // numeros contenidos
        const displayedNum = display.textContent; //numeros para el display
        // Removemos .is-depressed class de todas keys
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
        //creamos las acciones de numero
        const previousKeyType = muaicar.dataset.previousKeyType //vandera para remplasa los numeros del display
        if (!action) {
            if ( previousKeyType === 'pista1'){
                display.textContent = keyContent;
                for (let i= 0; i< libraryOne.length; i++){
                    if(keyContent == libraryOne[i].key){
                        let sound = new Audio(libraryOne[i].url);
                        sound.play();
                    }
                }
            }
            if ( previousKeyType === 'pista2'){
                display.textContent = keyContent;
                for (let i= 0; i< libraryTwo.length; i++){
                    if(keyContent == libraryTwo[i].key){
                        let sound = new Audio(libraryTwo[i].url);
                        sound.play();
                    }
                }
            }
           
        }
        //creamos las aciones de la bliblioteca
        if (action === 'pista1') {
            display.textContent = 'pista1'
            muaicar.dataset.previousKeyType = 'pista1';
        }
        if (action === 'pista2'){
            display.textContent = 'pista2'
            muaicar.dataset.previousKeyType = 'pista2';
        } 
        if (action === 'off'){
            if(key.textContent === 'OF'){
                muaicar.dataset.previousKeyType = ''
            }
            else{
                key.textContent = 'OF';
            }
            display.textContent = 'Presione P1 o P2 para empesar';
            muaicar.dataset.previousKeyType = 'off';
        }
  
    }
});

//libreria
const libraryOne = [
    { url: ('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'),
      key: 'Q'
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'),
        key: 'W'
      
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'),
        key: 'E'
      
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'),
        key: 'A'
      
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'),
        key: 'S'
      
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'),
        key: 'D'
      
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'),
        key: 'Z'
      
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'),
        key: 'X'
      
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'),
        key: 'C'
      
    }
];
  const libraryTwo = [
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'),
        key: 'Q'
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'),
        key: 'W'
      
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'),
        key: 'E'
      
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'),
        key: 'A'
      
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'),
        key: 'S'
      
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'),
        key: 'D'
      
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'),
        key: 'Z'
      
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'),
        key: 'X'
      
    },
    {
        url: ('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'),
        key: 'C'
      
    }];