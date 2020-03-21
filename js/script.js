window.addEventListener('DOMContentLoaded', function(){
    let info = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        content = document.querySelectorAll('.info-tabcontent');

        function hide(a){
            for(let i = a; i < content.length; i++){
                content[i].classList.remove('show');
                content[i].classList.add('hide');
            }
        }
        hide(1);

        function show(b){
            if(content[b].classList.contains('hide')){
                content[b].classList.remove('hide');
                content[b].classList.add('show');
            }
        }

        info.addEventListener('click', function(e){
            let target = e.target;
            if( target && target.classList.contains('info-header-tab')){
                for(let i = 0; i < tab.length; i++){
                    if(target == tab[i]){
                        hide(0);
                        show(i);
                        break;
                    }
                }
            }
        });
});



    //Timer

    let dedline = '2020-03-22';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
        return {
            "total" : t,
            "seconds" : seconds,
            "minutes" : minutes,
            "hours" : hours
        };
    }
    
    function setClock(id, endtime){
        let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(upDateClock, 1000);

        function upDateClock(){
            let t = getTimeRemaining(endtime);
            function addZero(num){
                if(num <= 9){
                    return '0' + num;
                }else return num;
            }
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            if(t.total <= 0){
                clearInterval(timeInterval);
                hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            }
        }
    }

    setClock('timer', dedline);

    
    

