window.addEventListener('load', function () {

    let textarea = document.querySelector('textarea');
    let submitButton = document.querySelector('.button'),
        tape = document.querySelector('.mssgScreen');

    let chat = document.querySelector('.chatContainer');

    let msg = document.querySelector('.mssg');

    function createMsg(person, txt) {
        let message = document.createElement('div');
        message.classList.add('message');
        message.classList.add(person);
        let avatar = document.createElement('div');
        avatar.classList.add('avatar');
        message.append(avatar);
        let text = document.createElement('div');
        text.classList.add('text');
        message.append(text);
        let paragraph = document.createElement('p');
        paragraph.innerHTML = txt;
        text.append(paragraph);
        tape.append(message);
        chat.scrollTop = tape.clientHeight;
        textarea.value = '';
        msg.classList.remove('writes');
    }

    function answer(text) {
        if (text == '/start' && sessionStorage['start'] != 'true') {
            createMsg('bot', 'Привет, меня зовут Чат-бот, а как зовут тебя?');
            sessionStorage.setItem('start', 'true');
        } else if (sessionStorage['start'] == 'true' && /[/]name:/g.exec(text) != null) {
            let name = text.replace(/[/]name:\s/g, '');
            createMsg('bot', 'Привет, ' + name + '! Приятно познакомится. Я умею считать, введи числа которые надо посчитать');
            sessionStorage.setItem('name', name);
        } else if (sessionStorage['start'] == 'true' && sessionStorage['name'] && /[/]number:/g.exec(text) != null) {
            createMsg('bot', 'Теперь введи один из операторов: -, +, *, /');
            let numbers = text.replace(/\s/g, '').replace(/[/]number:/g, '').split(',');
            sessionStorage.setItem('number1', numbers[0]);
            sessionStorage.setItem('number2', numbers[1]);
        } else if (sessionStorage['start'] == 'true' &&
            sessionStorage['name'] &&
            sessionStorage['number1'] &&
            sessionStorage['number2'] &&
            (text == '-' || text == '+' || text == '*' || text == '/')
        ) {
            sessionStorage.setItem('operator', text);
            createMsg('bot', eval(sessionStorage['number1'] + sessionStorage['operator'] + sessionStorage['number2']));
        } else if (text == '/stop') {
            createMsg('bot', 'Всего доброго! Если хочешь поговорить, пиши /start');
            sessionStorage.clear()
        } else if (text == '/weather') {
            createMsg('bot', '<a href="https://clck.yandex.ru/redir/dtype=stred/pid=7/cid=1228/*https://yandex.ru/pogoda/213" target="_blank"><img src="https://info.weather.yandex.net/213/4_white.ru.png?domain=ru" border="0" alt="Яндекс.Погода"/><img width="1" height="1" src="https://clck.yandex.ru/click/dtype=stred/pid=7/cid=1227/*https://img.yandex.ru/i/pix.gif" alt="" border="0"/></a>');
        } else {
            if (sessionStorage['start'] != 'true') {
                createMsg('bot', 'Введите команду /start для начала общения');
            } else {
                createMsg('bot', 'Я не понимаю. Введите другую команду.');
            }
        }
    }

    submitButton.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            let request = textarea.value;
            createMsg('human', textarea.value);
            setTimeout(answer, 500, request);
        }
    });


    $('textarea').keyup(function (event) {
        if (event.keyCode == 13 && $(this).val() != '') {
            event.preventDefault();
            $(this).val($(this).val().slice(0, -1));
            $('.button').click();
            $(this).val('');
            $('.button').removeClass('active');
            $('.mssg').removeClass('writes');
        } else if ($(this).val() != '') {
            $('.button').addClass('active');
            $('.mssg').addClass('writes');
        } else {
            $('.button').removeClass('active');
            $('.mssg').removeClass('writes');
        }
    });

});