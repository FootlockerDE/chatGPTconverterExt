//url https://www.mcempirics.com/tests/578/results/
let context;
let anwers;
    let answerA
    let answerB
    let answerC
    let answerD
    let answerE
let question;
let content;

// get context 
function getContent() {
    context = document.querySelectorAll('td')[1].querySelectorAll('p')[2].innerHTML;
    //get table (multiple choice 
    answerA = document.querySelector('table').querySelectorAll('li')[0].innerHTML
    answerB = document.querySelector('table').querySelectorAll('li')[1].innerHTML 
    answerC = document.querySelector('table').querySelectorAll('li')[2].innerHTML 
    answerD = document.querySelector('table').querySelectorAll('li')[3].innerHTML
    answerE = document.querySelector('table').querySelectorAll('li')[4].innerHTML

    if (answerD.startsWith('<')) {
        anwers = ('a)' + answerA + '\n' + 
        'b)' + answerB + '\n' + 
        'c)' + answerC + '\n')
    }
    else if (answerE.startsWith('<')) {
    anwers = ('a)' +answerA + '\n' + 
    'b)' +answerB + '\n' + 
    'c)' +answerC + '\n' + 
    'd)' +answerD)
    }
    else {
        anwers = ('a)' +answerA + '\n' + 
        'b)' +answerB + '\n' + 
        'c)' +answerC + '\n' + 
        'd)' + answerD + 'e)' + answerE)
    }
    console.log(anwers)

    
    // context = document.querySelectorAll('td')[1].querySelectorAll('p')[2].innerHTML;     //longer version  let getDiv = document.querySelectorAll('td')[1]; let childdiv = getDiv.querySelectorAll('p')[2].innerHTML;

                                                                                      
    // console.log(context)
    // // get question
    // question = document.querySelectorAll('.p-3')[0].querySelectorAll('p')[1].innerHTML;
    // console.log(question)
}

// put output togeather 
function outputCreation() {
    content = ('Wir befinden uns in der Statistik' + '\n' + '\n' + 
        context + '\n' + '\n' + '\n' +
        question + '\n' + '\n' +'Bitte gebe mir keine Erklärung' + '\n' + '\n' 
        + 'Es müssen  alle Teile der Aussage oder Antwortmöglichkeit wahr sein, damit diese als wahr gilt.'
        + '\n' +  '\n' + 'Die Aussagen müssen nur um Allgemeinen Wahr sein, spezielle Sonderfälle sollen nicht berücksichtigt werden.'
        );
}

 // copy to clipboard
 function copyToClipboard() {
    navigator.clipboard.writeText(anwers);
    // alert('Copied to clipboard');
    }
  

// master function

function master() {
    getContent();
    outputCreation();
    copyToClipboard();
}

master()





