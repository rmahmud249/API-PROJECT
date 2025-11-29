const loadLesson=()=>{
   fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response)=>response.json())
    .then((json)=>dispayLesson(json.data));
}
const loadCard=(id)=>{
    const url=`https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((response)=>response.json())
    .then((json)=>displayCard(json.data));
}

// {
//     "id": 83,
//     "level": 1,
//     "word": "Door",
//     "meaning": "দরজা",
//     "pronunciation": "ডোর"
// }


const displayCard=(cards)=>{
   const cardContainer=document.getElementById('lesson-card-container');
   cardContainer.innerHTML='';
   
   cards.forEach(word => {
    console.log(word);
    const newCard=document.createElement('div');
    newCard.innerHTML=`
   <div class="bg-white rounded-xl py-10 px-5 shadow-sm text-center">
            <h3 class=" text-[32px] font-bold text-black">${word.word}</h3>
            <p class="text-[20px] font-medium text-black py-2">Meaning /Pronounciation</p>
            <h2 class="font-bangla text-[20px] font-semibold" >"${word.meaning} / ${word.pronunciation}"</h2>
        <div class="flex justify-between items-center">
            <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
            <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
    </div>   
    `
    cardContainer.appendChild(newCard);

   });

//    for(let card of cards){
//     const newCard=document.createElement('div');
//      newCard.innerHTML=`
//      `
//    }
}





const dispayLesson=(lessons)=>{
    const levelContainer=document.getElementById('level-container');
    levelContainer.innerHTML='';
    for(let lesson of lessons ){
        const newElement=document.createElement('div');
        newElement.innerHTML=`
        <button onclick='loadCard(${lesson.level_no})' class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
        `
       levelContainer.appendChild(newElement); 
    }
}


loadLesson();