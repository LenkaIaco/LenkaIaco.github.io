let nameArray = ['Anto','Petko','Silvia', 'Zuzu', 'Agata','Lenka'];
nameArray.forEach(i => {
    if (i !== 'Lenka') {
        $('.squares').append('<li>'+i+'</li>')
    } else {
        $('.squares').append('<li><strong>'+i+'</strong></li>')
    }
});

let additionalBlock = {
    title: "Added with javascript",
    text: "this block was added using JS's jQuery library. How awesome!"
}

$('main').append('<h1>'+additionalBlock.title+'</h1>');
$('main').append('<p>'+additionalBlock.text+'</p>')