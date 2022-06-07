function tabs () {
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");


    function hideTabContent (a){
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show'); // эти 2 строки берут все элементы и скрывают
            tabContent[i].classList.add('hide');  // эти 2 строки берут все элементы и скрывают
        }
    }
    hideTabContent(1); //в функции в агрумент а передается 1, и соответсвенно скрываются все элементы после 1

    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide'); 
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener("click", function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]) {
                    hideTabContent(0); // скрываем все табы передав 0
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;