import { ActiveElementType } from '../types';
// DOCUMENTATION
//should i mearge all function in mindful-class
export function getEmojiCode(score: number): number {
    if (score > 0.8) return 128525;
    else if (score > 0.6) return 128512;
    else if (score > 0.4) return 128578;
    else if (score < 0 && score > -0.4) return 128528;
    else if (score < 0 && score > -0.6) return 128577;
    else if (score < 0 && score > -0.8) return 128551;
    // could also use '128550'??? include this one
    else if (score < -0.8) return 128552;

    else return 128528; // default score
}

export function shouldInsertExtension(activeElement: ActiveElementType): boolean {
    // confim if this works
    let fontSize = parseFloat(getComputedStyle(activeElement).fontSize) // think about this. should use some kind of reletive size
    return ((activeElement.tagName === "TEXTAREA" && activeElement.clientWidth > 190 && activeElement.clientHeight > 20) && fontSize < 40 || ( (activeElement as HTMLElement).isContentEditable));   
    // look into wiidth
}

export function isAlreadyInserted(activeElement: ActiveElementType): boolean {
    return activeElement?.nextElementSibling?.tagName === 'MINDFUL-EXTENSION' //mindful-extension
} // should just use parent



// export function createExtension(activeElement: ActiveElementType):  HTMLElement {
//     // for encasulation
//     // LOOK INTO BETTER STYLING
//     let mindfulWrapper = document.createElement("mindful-extension");
    
//     let wrapperDiv = document.createElement("div"); 
//     // THINK ABOIT THIS
//     wrapperDiv.style.margin = window.getComputedStyle(activeElement).padding;
//     wrapperDiv.id = "mindful-wrapper"
//     let emojiElement = document.createElement("span");
//     emojiElement.classList.add("mindful-span-elements");
//     // just use className
//     // might add ids to identify seperate emelemts in development
//     let loadingElement = document.createElement("div");
//     loadingElement.classList.add("mindful-span-elements");
//     // need this for loading element to show
//     loadingElement.appendChild(document.createElement("div"));
//     mindfulWrapper.appendChild(wrapperDiv);
//     wrapperDiv.appendChild(emojiElement);
//     wrapperDiv.appendChild(loadingElement);
    
//     return mindfulWrapper;
// }

