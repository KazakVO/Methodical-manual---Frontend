window.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    // делает слайдер бесконечным
    // но скрол работает не правильно
    // мультиразрядность должна быть равна 1
    //loop: true,
    // кол-во дублирующих слайдов
    // loopedSlides: 3,

    // кружки, показывающие какой слайд
    // навигация
    pagination: {
      el: '.swiper-pagination',
      // Буллеты
      type: 'bullets',
      //данная настройка позволяет переключать слайды, тыкая на кружки
      clickable: true,
      //Динамические буллеты. Кружки будут изменять свой размер
      // dynamicBullets: true,
      // нумирация каждого кружка и вывод ее на экран
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    a11y: {paginationBulletMessage: 'Пререйти на слайд номер {{index}}'},
    // вместо кружков показывает номер слайда и общее кол-во. Например 2/4 (фракция)
    // в css пишем: .класс_главного_контейнера .swiper-pagination-fraction
    // type: 'fraction',
    // а таким образом, мы можем дописать слова сами. (кастомный вывод фракции)
    // type: 'fraction',
    // renderFraction: function (currentClass, totalClass) {
    //   return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
    // },

    // прогрессбар
    // наверху показывается полоска, которая заполняется по мере продвижения слайдов.
    // css: .swiper-pagination-progressbar-fill
    // type: 'progressbar'
    // },

    // стрелки
    //   navigation: {
    //    nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // Скроллбар
    // scrollbar: {
    //  el: '.swiper-scrollbar',
    // возможность перетаскивать скролл
    //   draggable: true
    //   },

    // включение/отключение перетаскивания на пк
    simulateTouch: true,
    // курсор перетаскивания
    // grabCursor: true,

    // переключение при клике на слайд
    slideToClikedSlide: true,



    //  breakpoints: {
    //  3840: {
    //      spaceBetween: 140,
    //    },
    //    1919: {
    //      spaceBetween: 140,
    //    },
    //    1599: {
    //      spaceBetween: 75,
    //    },
    //   1023: {
    //     spaceBetween: 50,
    //   },
    //   767: {
    //     spaceBetween: 50,
    //   },
    //   549: {
    //     spaceBetween: 15,
    //   },
    //   319: {
    //     spaceBetween: 50,
    //   },
    // },
    limitRotation: true,


    // навигация по хешу
    //  hashNavigation: {
    // отслеживать состояние
    //    watchState: true,
    //  },

    // управлени клавиатурой
    // keyboard: {
    // включить/выключить
    //     enabled: true,
    // включить/выключить только тогда, когда слайдер в пределах вьюпорта
    //     onlyInViewport: true,
    // включить/выключить управление клавишами pageUp pageDown
    //     pageUpDown: true,
    //   },

    // управление колесом мыши
    //   mousewheel: {
    // чувствительность колеса мыши
    //     sensitivity: 1,
    // класс объекта на котором будет срабатывать прокрутка мышью
    // при данном параметре, если будем скролить один слайдер, будут скролиться и другие!
    //     eventsTarget: ".image-slider"
    //   },

    // автовысота
    //   autoHeight: true,

    // количество слайдов для показа (можно указывать не только целые числа)
    //    slidesPerView: 2,
    // slidesPerView: 'auto',

    // отключение функционала, если слайдов меньше, чем нужно в slidesPerView
    //   watchOverflow: true,

    // отступ между слайдами
    //spaceBetween: 150,


    // кол-во пролистываемых слайдов
    //  slidesPerGroup: 1,

    // активный слайд по центру
    //   centeredSlides: true,

    // номер стартового слайда (нумерация с нуля)
    //   initialSlide: 1,

    // мультиразрядность
    // для корректной рабыты необходимо отключить autoHeight
    // slidesPerColumn: 2,

    // свободный режим
    //freeMode: true,

//    автопрокрутка
     autoplay: {
//    пауза между прокруткой
       delay: 5000,
 //   закончить на последнем слайде
       stopOnLastSlide: false,
//    отключить после ручного переключения
       disableOnInteraction: false,
     },

    // скорость перекдючения слайдов
    speed: 1200,

    //вертикальный слайдер
    // direction: 'vertical',

    // эффекты переключения слайдов
    // листание
    //   effect: 'slide',
    // смена прозрачности
    effect: 'fade',
    //дополнение к fade
    fadeEffect: {
      // параллельная смена прозрачности
      crossFade: true
    },
    // переворот
    //  effect: 'flip',
    // дополнение к flip
    //  flipEffect: {
    // тень
    // slideShadows: true,
    // показ только активного слайда
    //  limitRotation: true
    // },
  });
})
