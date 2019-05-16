let Jedi = 'Luke Skywalker';
let Sith = ('Darth Vader', 'Darth Maul');

switch (Jedi) {
    case 'Luke Skywalker':
    console.log('You have Chosen wisely Young one');
    

    console.log(' May the Force be with you');
        break;
} 



if (Sith === 'Darth Maul'){
    console.log('You Have chosen the wrong path Padawan');
}
else if(Jedi === 'Darth Vader'){
    console.log('Luke I am Your Father');
}
        // only variables can be on the left hand side
else if('Darth Maul' == Sith){
    console.log('You have defied the Dark Side for the last time!!');
    
}
console.log(`our Dark Lord is ${Sith}`);





function theForce(){
    var Master = Math.floor(Math.random() * 3); 
    var Master1 = Math.floor(Math.random() * 3); 
    let allegiance = [' Master is Obi Wan',' Master is Qui Gon',' Master is Darth Sidious','Master is Bobba Fett',];
    var JediName = ['Luke Skywalker', 'Han Solo', 'Mace Windu', 'Anakin Skywalker'];
    var Padawan = JediName[Master] + allegiance[Master1];
    console.log(Padawan);
}

theForce(Jedi);