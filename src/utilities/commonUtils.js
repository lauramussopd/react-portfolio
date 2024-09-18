// Importa il componente Home dal percorso specificato
import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Resume from "../PortfolioContainer/Resume/Resume";
import Projects from "../PortfolioContainer/Projects/Projects";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";

// Definisce un array di oggetti che rappresentano gli schermi disponibili
export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home, 
    },
    {
        screen_name: "AboutMe",
        component: AboutMe, 
    },
    {
        screen_name: "Resume",
        component: Resume, 
    },
    {
        screen_name: "Projects",
        component: Projects, 
    },
    {
        screen_name: "Contact Me",
        component: ContactMe, 
    }
]

// Funzione per ottenere l'indice dello schermo basato sul nome dello schermo
export const GET_SCREEN_INDEX = (screen_name) => {
    // Se il nome dello schermo non è fornito, restituisce -1
    if (!screen_name) return -1;
    
    // Itera attraverso l'array TOTAL_SCREENS per trovare il nome dello schermo
    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
        // Se il nome dello schermo corrisponde a uno degli schermi, restituisce l'indice
        if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    } 
    // Se non trova il nome dello schermo, restituisce -1
    return -1;
}
