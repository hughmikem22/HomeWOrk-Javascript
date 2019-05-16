let Hero ='Luke Skywalker';
let Villain = 'Darth Maul';



if (Hero === 'Darth Maul'){
    console.log('You Have chosen the wrong path Padawan');
}
else if(Hero === 'Darth Vader'){
    console.log('Luke I am Your Father');
}
        // only variables can be on the left hand side
else if('Darth Maul' == Villain){
    console.log('You have defied the Dark Side for the last time!!');
    
}
console.log(`our hero is ${Hero}`);