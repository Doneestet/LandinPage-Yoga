function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form);
    
            function sendRequest () {
                
                return new Promise(function(resolve, reject){
                    
                    
    
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
                    request.addEventListener('readystatechange', function() {
                        if (request.readyState < 4) {
                                resolve();
                        } else if (request.readyState === 4 && request.status === 200) {
                                resolve();
                        } else {
                                reject();
                        }   
                    });
                    request.send(data);
                });
                  // End sendRequest 
            
                } 
                function clearInput () {
                    for (let i = 0; i < input.length; i++) { 
                               input[i].value = '';
            }
        }
            sendRequest(formData)
                .then (() => statusMessage.innerHTML = message.loading)
                .then (() => { 
                        thanksModal.style.display = 'block';
                        mainModal.style.display = 'none';
                        statusMessage.innerHTML = '';
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput());
                        
                        
                        
        });
}

module.exports = form;