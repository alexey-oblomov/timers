<h1>Таймеры</h1>

Демонстрация: https://alexey-oblomov.github.io/timers/

[<img src="https://github.com/alexey-oblomov/timers/raw/dev/screenshot.png">](https://alexey-oblomov.github.io/timers/)

Есть страница с тремя табами: часы, таймер и обратный отсчет.

<b>Компонент</b> Часы: Текущее время с миллисекундами.

<b>Компонент Секундомер</b>: Секундомер отсчитывает время с начала запуска, отображая минуты, секунды и миллисекунды. Реализован в виде отдельного компонента Timer. Две кнопки: пуск/пауза и сброс. При запуске время начинает отсчет с нуля. После паузы можно возобновить или сбросить. Если сбросить в процессе отсчета — отсчет не останавливается. При неактивной вкладке браузера секундомер продолжает работу в штатном режиме.

<b>Компонент</b> Счетчик обратного времени: Реализован в виде отдельного компонента Countdown. Блок ввода начального времени (вынесен в отдельный компонент): можно установить время с помощью двух полей (минуты и секунды) или слайдера (компонент Slider).
Когда перемещаешь слайдер — он должен изменять время с шагом 15 секунд. Ввод с клавиатуры в поле минут ограничивается 720 минутами. Слайдер ограничен 60 минутами. Слайдер и текстовые инпуты связаны друг с другом (меняют значение текстовых, если двигаем слайдер).
После запуска поля блокируются до сброса таймера.
Блок результата: Отображается время в минутах и секундах до конца обратного отсчета.
Отображается визуальный прогресс (через компонент Progress), сколько в процентах от начального времени прошло.
По окончанию таймера проигрывается звуковой сигнал.
Блок управления: две кнопки — пуск/пауза и сброс.

Используемые инструменты: create-react-app — готовый генератор проекта со сборкой.
Antd — библиотека с готовыми компонентами.
PropTypes — валидация props у компонентов.

Требования: Старт с create-react-app, scss, reset css/normalize.
Подключаем Eslint + Prettier + Husky.
Делаем две команды: npm run lint и npm run lint:fix, которые запускают линтер (без автофиксов и с ними), у итогового решения не должно быть ошибок линтера. Все props компонентов описаны через PropTypes. Без Redux. Все зависимости подключаем через npm, никаких CDN.
Деплой на github pages.
