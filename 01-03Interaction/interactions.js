/*
1.   Alert:
    #######
This window with the message is called a modal window. It shows a message.
*/
alert("Hi! Welcome.");


/*
2.   prompt:
    #######
shows a message asking the user to input text. It returns the text or, 
if Cancel button or `key:Esc` is clicked, `null`.
*/
let title = 'How old are you?';
let age = prompt(title,100);
alert(`You're ${age} years old.`);

/*
3.   confirm:
    #######
shows a message and waits for the user to press "OK" or "Cancel". 
It returns `true` for OK and `false` for Cancel/`key:Esc`.
*/
let isProffessional = confirm('Are you proffessional?')
if (isProffessional === true)
    alert('You\'re a proffesional');
else
alert('You aren\'t a proffesional');