const  pourcentagevisionnage =(partial,total) => Math.round(partial/total*100);

const tohourauminutes =(duree)=>{
    const heures = Math.floor(duree/60);
    let minutes = duree - heures*60;
    if (minutes<10){
        minutes=`0${minutes}`;
    }
return `${heures}h ${minutes}min`
};
