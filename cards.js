document.getElementById('back').style.display = 'none';
(async function () {
    let data = await fetch("main.json");
    let json = await data.json();
    
    let cards = document.getElementsByClassName('programms__cards')[0];
    
    for (let i = 0; i < json.length; i++){
        let spisok = document.getElementById('spisok');
        let spisok_a = document.createElement('a');
        spisok_a.href = '#id' + json[i]['id'];
        let spisok_li = document.createElement('li');
        spisok_li.classList.add('podmenu');
        spisok_li.innerText = json[i]['title'];
        spisok_a.appendChild(spisok_li);
        spisok.appendChild(spisok_a);

        let div_card = document.createElement('div');
        div_card.id = 'id' + json[i]['id'];
        let card_img = document.createElement('img');
        let card_text = document.createElement('h5');
        let card_btn = document.createElement('button');
        card_btn.classList.add('card_button');
        card_btn.id = json[i]['id'];
        div_card.onclick = function(){
            let q = this.getElementsByClassName('card_button')[0].id;
            if (json[q]['exists']){
                let btn = document.getElementById('popup_btn');
                btn.style.display = 'initial';
                let list = document.getElementById('popup_list');
                list.style.display = 'block';
                let closed = document.getElementsByClassName('closed')[0];
                closed.src = '';
                document.getElementById('popupImg').src = json[q]['img-src'];
                document.getElementById('title').innerText = json[q]['title'];
                document.getElementById('description').innerText = json[q]['des'];
                let b1 = document.createElement('b');
                b1.innerText = "Стоимость: ";
                b1.style.fontWeight = 600;
                document.getElementById('price').innerHTML = '';
                document.getElementById('price').appendChild(b1);
                document.getElementById('price').innerHTML += json[q]['price'];
                let b2 = document.createElement('b');
                if (json[q]['time'] != ''){
                    document.getElementById('time').style.display = 'list-item';
                    b2.innerText = 'Доступ: ';
                    b2.style.fontWeight = 600;
                    document.getElementById('time').innerHTML = '';
                    document.getElementById('time').appendChild(b2);
                    document.getElementById('time').innerHTML += json[q]['time'];
                }else{
                    document.getElementById('time').style.display = 'none';
                }
                document.getElementById('back').style.display = 'block';
                document.body.style.overflow = 'hidden';
            }else{
                document.getElementById('popupImg').src = json[q]['img-src'];
                document.getElementById('title').innerText = json[q]['title'];
                document.getElementById('description').innerText = '';
                let btn = document.getElementById('popup_btn');
                btn.style.display = 'none';
                let list = document.getElementById('popup_list');
                list.style.display = 'none';
                let closed = document.getElementsByClassName('closed')[0];
                closed.src = 'img/icons/в разработке.png';
                document.getElementById('back').style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        };
        card_btn.innerText = 'подробнее';
        div_card.classList.add('programms__card');
        card_img.src = json[i]['img-src'];
        card_text.innerText = json[i]['title'];
        div_card.appendChild(card_img);
        div_card.appendChild(card_text);
        div_card.appendChild(card_btn);
        cards.appendChild(div_card);
    }
    let spisok = document.getElementById('spisok');
    let spisok_a = document.createElement('a');
    spisok_a.href = '#coach';
    let spisok_li = document.createElement('li');
    spisok_li.innerText = 'Тренер';
    spisok_a.appendChild(spisok_li);
    spisok.appendChild(spisok_a);
}());

document.getElementById('back').onclick = function(event){
    let el = event.target.id;
    if (el == 'close__btn-img' || el == 'close__btn' || el == 'back') {
        document.getElementById('back').style.display = 'none';
        document.body.style.overflow = 'visible';
    }
}

document.body.addEventListener("keydown", function logKey(e) {
    if (e.code == 'Escape' && document.getElementById('back').style.display == 'block'){
        document.getElementById('back').style.display = 'none';
        document.body.style.overflow = 'visible';
    }
});


(function () {
    let burger = document.getElementById('burger-img');

    let menu__back = document.getElementById('mob__back');
    let menu = document.getElementById('mob__menu');
    let nav = document.getElementsByClassName('nav__pan-mob')[0];
    burger.onclick = function(){
        if (burger.classList.contains('close')){
            burger.classList.remove('close');
            burger.src = 'img/icons/burger.png';
            menu__back.style.display = 'none';
            menu.style.display = 'none';
            document.body.style.overflow = 'visible';
        }else {
            burger.src = 'img/icons/close-btn.png';
            burger.classList.add('close');
            menu__back.style.display = 'block';
            menu.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
    nav.onclick = function(){
        if (burger.classList.contains('close')){
            burger.classList.remove('close');
            burger.src = 'img/icons/burger.png';
            menu__back.style.display = 'none';
            menu.style.display = 'none';
            document.body.style.overflow = 'visible';
        }
    }
}());



(async function () {
    let data = await fetch("main.json");
    let json = await data.json();

    // json[q]['img-src'];
}());