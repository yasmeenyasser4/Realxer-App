
var quotes = [
    `<p>“Be yourself; everyone else is already taken.”</p><p>― Oscar Wilde</p>`,
    `<p>“So many books, so little time.”</p><p>― Frank Zappa</p>`,
    `<p>“A room without books is like a body without a soul.”</p><p>― Marcus Tullius Cicero</p>`,
    `<p>“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
    </p><p>― Bernard M. Baruch</p>`,
    `<p>“You only live once, but if you do it right, once is enough.”</p><p>― Mae West</p>`,
    `<p>“In three words I can sum up everything I've learned about life: it goes on.”</p><p>― Robert Frost</p>`,
    `<p>“A friend is someone who knows all about you and still loves you.”</p><p>― Elbert Hubbard`,
    `<p>“To live is the rarest thing in the world. Most people exist, that is all.”</p><p>― Oscar Wilde</p>`,
    `<p>“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”</p><p>― Ralph Waldo Emerson</p>`,
    `<p>“It is better to be hated for what you are than to be loved for what you are not.”</p><p>― Andre Gide, Autumn Leaves</p>`,
]
function addQuote() {
    var random=Math.floor(Math.random()*9)+1 ;
    var lastIndex=undefined;

     for (var i = 0; i < random; i++)
     {
        if(lastIndex==random){
            addQuote();
        }
        else{

            random=quotes[random];
            document.getElementById('quote').innerHTML =  random ;
        }
       listRandom=random;
     }
 }

// var index=undefined;
// var random=Math.floor(Math.random()*10)+1 ;
// function ran(){
//     if (index==random){
//         ran();

//     }
//     else{
//         console.log(random);
//     }
//     index=random;
    

// }
// ran();