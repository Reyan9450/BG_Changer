const boxButtons = document.querySelectorAll('.Box');
boxButtons.forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target.id);
        const mainContainer = document.getElementsByClassName('mainContainer')[0];
        if (e.target.id === 'redBox') {
            mainContainer.style.backgroundColor = 'red';
        }
       
        else if(e.target.id=='blueBox'){
            mainContainer.style.backgroundColor = 'blue';

        }
        else if(e.target.id=='yellowBox'){
             mainContainer.style.backgroundColor = 'yellow';
        }
        else if(e.target.id=='greenBox'){
             mainContainer.style.backgroundColor = 'green';
        }
        else {
            // Handle other cases here
            mainContainer.style.backgroundColor = 'white'; // Resetting to default color
        }
    });
});
