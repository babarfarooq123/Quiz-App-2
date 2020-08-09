document.getElementsByTagName('button')[0].addEventListener('click',(event)=>{
    var arr = []
    var correctAnswers = ['New york',7,'Toronto','Everest',4]
    var correctCount = 0
    event.preventDefault()
    var inputTags = document.getElementsByTagName('input')
    for(var i=0 ; i<inputTags.length ; i++){
        if(inputTags[i].checked == true && inputTags[i].value)
            arr.push(inputTags[i].value)
    }
    for(var i=0 ; i<arr.length ; i++){
        if(arr[i] == correctAnswers[i]){
            correctCount++
        }
    }

    var h1 = document.createElement('h1')
    h1.setAttribute('class','result')
    var textNode = document.createTextNode('Quiz Completed')
    h1.appendChild(textNode)
    var body = document.getElementsByTagName('body')[0]
    body.innerHTML = ''
    body.appendChild(h1)
    var br = document.createElement('br')
    body.appendChild(br)
    h1 = ''
    var h1 = document.createElement('h1')
    h1.setAttribute('class','result')
    var textNode = document.createTextNode('You have scored = '+' '+correctCount)
    h1.appendChild(textNode)
    body.appendChild(h1)
})