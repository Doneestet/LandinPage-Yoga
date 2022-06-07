function form () {
    
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.getElementsByClassName('.main-form'),
        formDown = document.getElementById('#form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
                event.preventDefault();  // не дает странице перезагружаться по умолчанию после каждого клика по форме
                elem.appendChild(statusMessage); 
                let formData = new FormData(elem);

                function postData() {

                    return new Promise (function(resolve, reject) {
                        let request = new XMLHttpRequest();

                        request.open('POST', 'server.php');

                        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                        request.onreadystatechange = function() {  
                                if (request.readyState < 4) {
                                    resolve();
                                                    
                                } else if (request.readyState === 4) {
                                    if( request.status === 200 && request.status < 3) {
                                        resolve();
                                } 
                                else {
                                        reject();
                                                    
                                }
                            }
                        }
                        request.send();
                });
                } // End postData
                            
                            function clearInput () {
                                for (let i = 0; i < input.length; i++) { 
                                        input[i].value = '';
                            }
                        }
                        postData(formData)
                        .then(() => statusMessage.innerHTML = message.loading)
                        .then(() => {
                            thanksModal.style.display = 'block';
                            mainModal.style.display = 'none';
                            statusMessage.innerHTML = '';
                        })
                        .catch(() => statusMessage.innerHTML = message.failure)
                        .then(clearInput)

            });
                    
    }
    sendForm(form);
    sendForm(formDown); 
}

module.exports = form;