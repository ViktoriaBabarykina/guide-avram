(function () {
  const IMG = 'img/';
  window.IMG = IMG;

  let LANG = 'ru';
  try { LANG = localStorage.getItem('lang') || 'ru'; } catch (e) {}
  if (LANG !== 'en') LANG = 'ru';
  window.LANG = LANG;

  // ===== СЛОВАРЬ ИНТЕРФЕЙСА =====
  const I18N = {
    ru: {
      docTitle: 'Экскурсии и туры по Узбекистану · Самарканд, Бухара, Хива',
      brandName: 'Аврам', brandSub: 'Ваш гид по Узбекистану',
      navTours: 'Экскурсии', navAbout: 'Обо мне', navReviews: 'Отзывы', navFaq: 'Вопросы',
      navBook: 'Забронировать', navBookFull: 'Забронировать экскурсию',
      heroLoc: 'Самарканд · Бухара · Хива · Ташкент',
      heroH1: 'Узбекистан, каким его знают <em>местные</em>',
      heroP: 'Бирюзовые купола Самарканда, тишина горных озёр и горячие лепёшки из тандыра. Все наши гиды родом из Узбекистана и в совершенстве знают историю страны. Индивидуально или малой группой — в темпе, удобном именно вам.',
      heroChoose: 'Выбрать экскурсию', writeUs: 'Написать:',
      statRating: '★ рейтинг', statGuests: 'довольных гостей', statRoutes: 'авторских маршрутов',
      heroNote: 'Многие гости возвращаются к нам снова — и привозят друзей', scroll: 'листайте',
      strip1: '<b>4,99</b> из 5 — наш рейтинг', strip2: 'Все гиды родом из Узбекистана',
      strip3: '<b>3000+</b> гостей', strip4: 'Индивидуально и группами',
      toursKicker: 'Маршруты', toursH2: 'Экскурсии и авторские туры',
      toursLead: 'От бирюзовых куполов до тишины горных озёр и шума восточных базаров. Нажмите на карточку для открытия подробной информации.',
      toursDay: 'Экскурсии на один день', toursMulti: 'Многодневные туры под ключ',
      toursNote: '<b>Не нашли подходящий вариант?</b> Помимо готовых программ соберём маршрут под ваши интересы и даты — пеший или на автомобиле. Все машины в отличном состоянии и с кондиционером. Индивидуально или малой группой.',
      toursNoteBtn: 'Собрать свой маршрут',
      cardMore: 'Подробнее', onRequest: 'По запросу', toYourDates: 'под ваши даты',
      bandQ: '«Мы не просто проводим экскурсии — мы дарим <b>впечатления и воспоминания</b>, ради которых хочется вернуться снова»',
      bandBy: '— Аврам и команда гидов по Узбекистану',
      whyKicker: 'Почему гости выбирают нас', whyH2: 'Путешествие, которое<br>хочется повторить',
      feat1t: 'Местные, а не «по учебнику»', feat1d: 'Все гиды родом из Узбекистана и в совершенстве знают историю страны. Живые истории и места, о которых знают только местные.',
      feat2t: 'Индивидуально и малыми группами', feat2d: 'Формат на ваш выбор — личная экскурсия или небольшая группа. Темп подстраиваем под вас, без спешки и толпы.',
      feat3t: 'Комфортный транспорт', feat3d: 'Пеший формат или поездка на автомобиле — все машины в отличном состоянии и с кондиционером. Берём логистику на себя.',
      feat4t: 'Маршрут под вас', feat4d: 'Готовые программы или индивидуальный маршрут под ваши интересы: история, фото, гастрономия, горы или базары.',
      feat5t: 'На связи 24/7', feat5d: 'WhatsApp, Telegram и Max — отвечаем до, во время и после поездки. Поможем с любым вопросом по стране.',
      feat6t: 'Гастрономия и колорит', feat6d: 'Плов, тандыр, чайханы и базары — покажем вкус настоящего Востока и тёплое узбекское гостеприимство.',
      aboutKicker: 'Обо мне', aboutH2: 'Привет! Я — Аврам,<br>ваш гид по Узбекистану', aboutBadge: '3000+ гостей',
      chip1: '<span class="s">★</span> 4,99 рейтинг', chip2: '3000+ гостей', chip3: 'гиды из Узбекистана',
      aboutP1: 'Я родился и вырос в Самарканде — городе, где каждая улица хранит историю Великого шёлкового пути. Со мной команда гидов, искренне влюблённых в Узбекистан: все мы родом из этой страны и в совершенстве знаем её историю.',
      aboutP2: 'Мы показываем гостям настоящий Узбекистан: величественные древние города, шумные восточные базары, уникальную кухню, тёплое гостеприимство и места, о которых знают только местные.',
      aboutP3: 'Экскурсии проводим индивидуально или малыми группами — в темпе, удобном каждому. Многие гости возвращаются к нам снова. Добро пожаловать в Узбекистан!',
      aboutBtn: 'Забронировать экскурсию',
      galleryKicker: 'Галерея', galleryH2: 'Узбекистан крупным планом',
      galHint: 'Листайте вбок и нажмите на фото, чтобы открыть',
      reviewsKicker: 'Отзывы', reviewsH2: 'Что говорят гости',
      reviewsLead: 'Все отзывы — на 5 звёзд. Листайте вбок, чтобы прочитать.',
      reviewMore: 'Читать полностью', reviewLess: 'Свернуть',
      faqKicker: 'Вопросы', faqH2: 'Частые вопросы',
      faq1q: 'Как забронировать экскурсию?', faq1a: 'Напишите нам в WhatsApp, Telegram или Max — либо оставьте заявку через форму ниже. Согласуем дату, маршрут и все детали.',
      faq2q: 'Можно ли собрать индивидуальный маршрут?', faq2a: 'Да, это наша любимая часть работы. Помимо готовых программ соберём маршрут под ваши интересы, даты и бюджет — пеший или на автомобиле.',
      faq3q: 'В каком формате проходят экскурсии?', faq3a: 'Индивидуально или малыми группами — на ваш выбор. Темп и подачу подстраиваем под каждого, включая семьи с детьми и пожилых гостей.',
      faq4q: 'На чём передвигаемся?', faq4a: 'Пешком по историческому центру или на автомобиле между объектами и городами. Все машины в отличном состоянии и с кондиционером.',
      faq5q: 'На каком языке проходят экскурсии?', faq5a: 'Проводим экскурсии на русском, английском и узбекском языках. Гиды прекрасно владеют языками, на которых проводят экскурсии.',
      faq6q: 'Что входит в стоимость?', faq6a: 'Услуги гида и сопровождение по маршруту. Транспорт, входные билеты и питание уточняются по каждому туру — точную смету пришлём заранее. Цены указаны в долларах, «от».',
      ctaKicker: 'Бронирование', ctaH2: 'Готовы увидеть<br>настоящий Узбекистан?',
      ctaP: 'Напишите прямо сейчас — ответим в течение нескольких часов и поможем спланировать идеальное путешествие.',
      formTitle: 'Оставить заявку', formName: 'Ваше имя', formNamePh: 'Как к вам обращаться?',
      formPhone: 'Телефон', formPhonePh: '+998 ...', formTourQ: 'Какая экскурсия интересует?',
      formMsg: 'Дата и пожелания', formMsgPh: 'Когда планируете, сколько человек, особые пожелания',
      formSubmit: 'Отправить в WhatsApp',
      opt_haftkul: 'Хафткул: семь озёр', opt_bukhara: 'Пешая экскурсия по Бухаре',
      opt_samarkand: 'Самарканд за один день (+ плов)', opt_khiva: 'Хива — Ичан-Кала',
      opt_shahrisabz: 'Из Самарканда в Шахрисабз', opt_chimgan: 'Из Ташкента — туда, куда вы не ездили',
      opt_transfer: 'Трансфер Самарканд — Шахрисабз — и обратно', opt_express: 'Экспресс Ташкент → Самарканд → Конигил (2 дня)',
      opt_foryou: 'Тур: Ташкент · Бухара · Самарканд', opt_skazka: 'Тур: Хива · Самарканд · Бухара · Ташкент',
      opt_custom: 'Индивидуальный маршрут',
      footerDesc: 'Авторские экскурсии и туры по Самарканду, Бухаре, Ташкенту, Хиве и горам. Рейтинг 4,99 · более 3000 довольных гостей.',
      footerCopy: '© 2026 Аврам · Ваш гид по Узбекистану. Все права защищены.',
      modalDetails: 'Для уточнения деталей:', modalBook: 'Забронировать',
      msgGreeting: 'Здравствуйте! Хочу оставить заявку на экскурсию.', msgName: 'Имя',
      msgPhone: 'Телефон для связи', msgTour: 'Экскурсия', msgNotes: 'Пожелания'
    },
    en: {
      docTitle: 'Tours & excursions in Uzbekistan · Samarkand, Bukhara, Khiva',
      brandName: 'Avram', brandSub: 'Your guide to Uzbekistan',
      navTours: 'Tours', navAbout: 'About', navReviews: 'Reviews', navFaq: 'FAQ',
      navBook: 'Book now', navBookFull: 'Book a tour',
      heroLoc: 'Samarkand · Bukhara · Khiva · Tashkent',
      heroH1: 'Uzbekistan as the <em>locals</em> know it',
      heroP: 'The turquoise domes of Samarkand, the silence of mountain lakes and hot tandoor bread. All our guides are from Uzbekistan and know its history inside out. Private or in a small group — at a pace that suits you.',
      heroChoose: 'Choose a tour', writeUs: 'Message us:',
      statRating: '★ rating', statGuests: 'happy guests', statRoutes: 'signature routes',
      heroNote: 'Many guests come back again — and bring friends', scroll: 'scroll',
      strip1: '<b>4.99</b> of 5 — our rating', strip2: 'All guides are from Uzbekistan',
      strip3: '<b>3000+</b> guests', strip4: 'Private & small groups',
      toursKicker: 'Routes', toursH2: 'Tours & signature trips',
      toursLead: 'From turquoise domes to the silence of mountain lakes and the buzz of Eastern bazaars. Tap a card to see the details.',
      toursDay: 'Day tours', toursMulti: 'Multi-day all-inclusive tours',
      toursNote: "<b>Didn't find the right option?</b> Beyond the ready-made programmes, we'll build a route to your interests and dates — on foot or by car. All cars are in excellent condition and air-conditioned. Private or in a small group.",
      toursNoteBtn: 'Build your own route',
      cardMore: 'Details', onRequest: 'On request', toYourDates: 'to your dates',
      bandQ: "“We don't just run tours — we create <b>impressions and memories</b> worth coming back for.”",
      bandBy: '— Avram & the Uzbekistan guide team',
      whyKicker: 'Why guests choose us', whyH2: "A journey<br>you'll want to repeat",
      feat1t: 'Locals, not “by the book”', feat1d: 'All guides are from Uzbekistan and know its history perfectly. Living stories and places only locals know.',
      feat2t: 'Private & small groups', feat2d: 'Your choice of format — a private tour or a small group. We adjust the pace to you, with no rush and no crowds.',
      feat3t: 'Comfortable transport', feat3d: 'On foot or by car — all cars are in excellent condition and air-conditioned. We handle the logistics.',
      feat4t: 'A route for you', feat4d: 'Ready-made programmes or a custom route to your interests: history, photography, food, mountains or bazaars.',
      feat5t: 'In touch 24/7', feat5d: 'WhatsApp, Telegram and Max — we reply before, during and after the trip. We help with any question about the country.',
      feat6t: 'Food & local colour', feat6d: 'Plov, tandoor, teahouses and bazaars — we show you the taste of the real East and warm Uzbek hospitality.',
      aboutKicker: 'About me', aboutH2: "Hi! I'm Avram,<br>your guide to Uzbekistan", aboutBadge: '3000+ guests',
      chip1: '<span class="s">★</span> 4.99 rating', chip2: '3000+ guests', chip3: 'guides from Uzbekistan',
      aboutP1: 'I was born and raised in Samarkand — a city where every street keeps the history of the Great Silk Road. With me is a team of guides genuinely in love with Uzbekistan: we are all from this country and know its history perfectly.',
      aboutP2: 'We show guests the real Uzbekistan: majestic ancient cities, lively Eastern bazaars, unique cuisine, warm hospitality and places only locals know.',
      aboutP3: 'We run tours privately or in small groups — at a pace that suits everyone. Many guests come back to us again. Welcome to Uzbekistan!',
      aboutBtn: 'Book a tour',
      galleryKicker: 'Gallery', galleryH2: 'Uzbekistan up close',
      galHint: 'Swipe sideways and tap a photo to open',
      reviewsKicker: 'Reviews', reviewsH2: 'What guests say',
      reviewsLead: 'Every review is 5 stars. Swipe sideways to read them.',
      reviewMore: 'Read more', reviewLess: 'Collapse',
      faqKicker: 'FAQ', faqH2: 'Frequently asked questions',
      faq1q: 'How do I book a tour?', faq1a: 'Message us on WhatsApp, Telegram or Max — or leave a request via the form below. We will agree on the date, route and all the details.',
      faq2q: 'Can I build a custom itinerary?', faq2a: "Yes, it's our favourite part of the work. Beyond ready-made programmes, we'll build a route to your interests, dates and budget — on foot or by car.",
      faq3q: 'What format do the tours take?', faq3a: 'Private or in small groups — your choice. We adjust the pace and delivery to everyone, including families with children and older guests.',
      faq4q: 'How do we get around?', faq4a: 'On foot in the historic centres or by car between sites and cities. All cars are in excellent condition and air-conditioned.',
      faq5q: 'What languages are the tours in?', faq5a: 'We run tours in Russian, English and Uzbek. Our guides are fluent in the languages they work in.',
      faq6q: "What's included in the price?", faq6a: 'Guide services and accompaniment along the route. Transport, entry tickets and meals are specified per tour — we send an exact quote in advance. Prices are in US dollars, “from”.',
      ctaKicker: 'Booking', ctaH2: 'Ready to see<br>the real Uzbekistan?',
      ctaP: "Message us right now — we'll reply within a few hours and help you plan the perfect trip.",
      formTitle: 'Leave a request', formName: 'Your name', formNamePh: 'How should we address you?',
      formPhone: 'Phone', formPhonePh: '+998 ...', formTourQ: 'Which tour are you interested in?',
      formMsg: 'Date & notes', formMsgPh: 'When you plan to go, how many people, any special wishes',
      formSubmit: 'Send via WhatsApp',
      opt_haftkul: 'Haftkul: seven lakes', opt_bukhara: 'Walking tour of Bukhara',
      opt_samarkand: 'Samarkand in one day (+ plov)', opt_khiva: 'Khiva — Ichan-Kala',
      opt_shahrisabz: 'From Samarkand to Shahrisabz', opt_chimgan: "From Tashkent — to places you've never been",
      opt_transfer: 'Transfer Samarkand — Shahrisabz — and back', opt_express: 'Express Tashkent → Samarkand → Konigil (2 days)',
      opt_foryou: 'Tour: Tashkent · Bukhara · Samarkand', opt_skazka: 'Tour: Khiva · Samarkand · Bukhara · Tashkent',
      opt_custom: 'Custom itinerary',
      footerDesc: 'Signature tours and trips around Samarkand, Bukhara, Tashkent, Khiva and the mountains. Rating 4.99 · more than 3000 happy guests.',
      footerCopy: '© 2026 Avram · Your guide to Uzbekistan. All rights reserved.',
      modalDetails: 'For details:', modalBook: 'Book now',
      msgGreeting: "Hello! I'd like to request a tour.", msgName: 'Name',
      msgPhone: 'Contact phone', msgTour: 'Tour', msgNotes: 'Notes'
    }
  };
  window.I18N = I18N;

  function T(k) {
    const d = I18N[window.LANG] || I18N.ru;
    if (k in d) return d[k];
    return (I18N.ru[k] != null) ? I18N.ru[k] : k;
  }
  window.T = T;

  // ===== ДАННЫЕ ТУРОВ (двуязычные) =====
  window.TOURS = [
    { id: 'haftkul', cat: 'day', badgeClass: 'hit', img: IMG + '7lakes/08720ccc-275b-46ee-a93c-3a39278c4365.jpg',
      gallery: [IMG + '7lakes/d5bfb65b-37ce-43f8-8927-984cca16e890.webp', IMG + '7lakes/0ea78151-bbc0-4282-9314-d27faed68328.jpg', IMG + '7lakes/31af5ad2-00d6-4b57-b3dd-a5bf244a5515.webp', IMG + '7lakes/37343933-aa99-489f-8967-ce3b0745a63d.webp', IMG + '7lakes/44f44d04-76b7-4f50-a070-5851c64e2826.webp'],
      ru: { title: 'Хафткул: семь удивительных озёр', meta: 'Целый день · из Самарканда · авто 4×4', price: 'от $277', unit: 'за группу', badge: '★ Хит',
        long: `<p>Каждое из семи озёр имеет своё название. Знакомство начнём с озера Нежигон, затем посетим Соя, Гушор, Нофин, Хурдак, крупнейшее из всех — Маргузор, и последнее, названное «тысячей родников», — Хазорчашма. Почти все озёра относятся к завальному типу. Что это такое и какое из семи не является завальным — расскажу в поездке. А ещё покажу древние петроглифы на берегу: они говорят о почтенном возрасте водоёмов.</p><p>Озёра располагаются в Фанских горах, и перепад высот между ними существенный — 760 м: самое нижнее на высоте 1640 м над уровнем моря, последнее — на отметке 2400 м. Все семь посетим на комфортабельном внедорожнике: прокатимся по серпантину, полюбуемся лучшими видами и устроим лёгкий пикник в живописном месте.</p>`,
        incl: ['Полноприводный внедорожник с водителем', 'Сопровождение гида весь день', 'Все семь озёр за поездку', 'Лёгкий пикник на берегу', 'Помощь на границе'] },
      en: { title: 'Haftkul: the seven amazing lakes', meta: 'Full day · from Samarkand · 4×4', price: 'from $277', unit: 'per group', badge: '★ Top',
        long: `<p>Each of the seven lakes has its own name. We start with Lake Nezhigon, then visit Soya, Gushor, Nofin, Khurdak, the largest one — Marguzor, and the last, called the “thousand springs” — Hazorchashma. Almost all the lakes are of landslide-dammed origin. What that means — and which of the seven is the exception — I'll tell you on the way. I'll also show ancient petroglyphs on the shore that hint at the venerable age of these waters.</p><p>The lakes lie in the Fann Mountains, and the elevation change between them is significant — 760 m: the lowest sits at 1640 m above sea level, the last at 2400 m. We'll visit all seven in a comfortable off-road vehicle: ride the winding roads, enjoy the best views and have a light picnic in a scenic spot.</p>`,
        incl: ['4×4 off-road vehicle with driver', 'Guide throughout the day', 'All seven lakes in one trip', 'Light picnic by the lake', 'Help at the border'] } },

    { id: 'bukhara', cat: 'day', badgeClass: '', img: IMG + 'bukh/IMG_3076.jpg',
      gallery: [IMG + 'bukh/IMG_3084.jpg', IMG + 'bukh/IMG_3091.jpg', IMG + 'bukh/IMG_3112.jpg', IMG + 'bukh/IMG_3114.jpg', IMG + 'bukh/IMG_3126.jpg'],
      ru: { title: 'Пешая экскурсия по Бухаре — путешествие сквозь века', meta: '5 часов · Бухара · пешая', price: 'от $90', unit: 'за экскурсию · 1–4 чел', badge: 'Бухара',
        long: `<p>Откройте для себя древнюю Бухару — город караванов, величественных медресе и легенд Великого шёлкового пути. Во время прогулки по историческому центру вы увидите самые знаменитые памятники архитектуры, узнаете истории бухарских эмиров и почувствуете неповторимую атмосферу одного из старейших городов мира.</p><h4>Точки маршрута</h4><ul><li>Ляби-Хауз</li><li>Медресе Нодир Диван-Беги</li><li>Торговые купола Токи</li><li>Пои-Калян</li><li>Крепость Арк</li><li>Боло-Хауз</li><li>Мавзолей Саманидов</li><li>Чашма Айюб</li></ul><p>Уютные улочки, восточный колорит, впечатляющие памятники и увлекательные рассказы сделают эту прогулку незабываемой.</p>`,
        incl: ['Сопровождение гида весь маршрут', 'Прогулка по историческому центру', 'Истории эмиров и легенды города', 'Помощь с фотографиями'] },
      en: { title: 'Walking tour of Bukhara — a journey through the ages', meta: '5 hours · Bukhara · walking', price: 'from $90', unit: 'per tour · 1–4 people', badge: 'Bukhara',
        long: `<p>Discover ancient Bukhara — a city of caravans, majestic madrasahs and legends of the Great Silk Road. Walking through the historic centre you'll see its most famous architectural monuments, hear the stories of the Bukharan emirs and feel the unique atmosphere of one of the world's oldest cities.</p><h4>Route stops</h4><ul><li>Lyabi-Hauz</li><li>Nadir Divan-Begi Madrasah</li><li>Toqi trading domes</li><li>Poi-Kalyan</li><li>The Ark Fortress</li><li>Bolo-Hauz</li><li>Samanid Mausoleum</li><li>Chashma-Ayyub</li></ul><p>Cosy lanes, oriental colour, striking monuments and captivating stories will make this walk unforgettable.</p>`,
        incl: ['Guide for the whole route', 'Walk through the historic centre', 'Stories of emirs and city legends', 'Help with photos'] } },

    { id: 'samarkand', cat: 'day', badgeClass: 'star', img: IMG + 'sam/sam1.jpg',
      gallery: [IMG + 'sam/sam2.jpg', IMG + 'sam/sam3.jpg', IMG + 'sam/sam4.jpg', IMG + 'sam/sam5.jpg', IMG + 'sam/sam6.jpg', IMG + 'sam/sam7.jpg'],
      ru: { title: 'Самарканд: всё самое главное за один день + дегустация плова', meta: '6 часов · Самарканд · гид + транспорт', price: 'от $140', unit: 'за экскурсию · 1–4 чел', badge: 'С дегустацией',
        long: `<p>Приглашаю вас в путешествие по жемчужине Востока — легендарному Самарканду! Мы посетим самые известные достопримечательности города: площадь Регистан, мавзолей Гур-Эмир, грандиозную мечеть Биби-Ханум, уникальный комплекс Шахи-Зинда и колоритный Сиабский базар.</p><p>По пути вы узнаете историю Великого шёлкового пути, эпохи Амира Тимура и древнего Самарканда, а также познакомитесь с традициями местных ремесленников на шёлково-ковровой фабрике.</p><p>И, конечно, вас ждёт дегустация настоящего самаркандского плова — главного гастрономического символа Узбекистана.</p>`,
        incl: ['Услуги гида и транспорт', 'Главные памятники Самарканда', 'Шёлково-ковровая фабрика', 'Дегустация самаркандского плова'] },
      en: { title: 'Samarkand: all the highlights in one day + plov tasting', meta: '6 hours · Samarkand · guide + transport', price: 'from $140', unit: 'per tour · 1–4 people', badge: 'With tasting',
        long: `<p>I invite you on a journey to the pearl of the East — legendary Samarkand! We'll visit the city's most famous sights: Registan Square, the Gur-Emir Mausoleum, the grand Bibi-Khanym Mosque, the unique Shah-i-Zinda complex and the colourful Siab Bazaar.</p><p>Along the way you'll learn the history of the Great Silk Road, the era of Amir Timur and ancient Samarkand, and meet local artisans at a silk-carpet workshop.</p><p>And, of course, a tasting of real Samarkand plov awaits you — the main gastronomic symbol of Uzbekistan.</p>`,
        incl: ['Guide services and transport', "Samarkand's main monuments", 'Silk-carpet workshop', 'Samarkand plov tasting'] } },

    { id: 'khiva', cat: 'day', badgeClass: '', img: IMG + 'hiva/hiva1.jpg',
      gallery: [IMG + 'hiva/hiva2.jpg', IMG + 'hiva/hiva3.jpg', IMG + 'hiva/hiva4.jpg', IMG + 'hiva/hiva5.jpg', IMG + 'hiva/hiva6.jpg', IMG + 'hiva/hiva7.jpg'],
      ru: { title: 'Хива — путешествие в город из восточной сказки', meta: '4–4,5 часа · Хива · пешая', price: 'от $90', unit: 'за экскурсию · 1–4 чел', badge: 'ЮНЕСКО',
        long: `<p>Приглашаю вас на прогулку по древней Хиве — одному из самых хорошо сохранившихся городов Великого шёлкового пути. Мы исследуем легендарную Ичан-Калу, включённую в список Всемирного наследия ЮНЕСКО: дворцы хивинских ханов, старинные медресе, величественные минареты и мечети.</p><h4>В программе</h4><ul><li>Куня-Арк</li><li>Таш-Хаули</li><li>Джума-мечеть</li><li>Мавзолей Пахлавана Махмуда</li><li>Минарет Кальта-Минор</li><li>Бастион Ак-Шейх-Бобо — панорама на весь город</li></ul><p>Вас ждут захватывающие истории о ханах, караванах Великого шёлкового пути и тайнах древней Хивы, сохранившей атмосферу настоящего Востока.</p>`,
        incl: ['Сопровождение гида весь маршрут', 'Прогулка по Ичан-Кале', 'Дворцы, медресе, минареты и мечети', 'Истории о ханах и Шёлковом пути'] },
      en: { title: 'Khiva — a trip to a city from an Eastern fairy tale', meta: '4–4.5 hours · Khiva · walking', price: 'from $90', unit: 'per tour · 1–4 people', badge: 'UNESCO',
        long: `<p>I invite you for a walk through ancient Khiva — one of the best-preserved cities of the Great Silk Road. We'll explore the legendary Ichan-Kala, a UNESCO World Heritage Site: the palaces of the Khiva khans, old madrasahs, majestic minarets and mosques.</p><h4>On the programme</h4><ul><li>Kunya-Ark</li><li>Tash-Hauli</li><li>Juma Mosque</li><li>Pahlavan Mahmud Mausoleum</li><li>Kalta-Minor Minaret</li><li>Ak-Sheikh-Bobo bastion — a panorama over the whole city</li></ul><p>Fascinating stories of khans, Silk Road caravans and the secrets of ancient Khiva await you — a city that has kept the atmosphere of the real East.</p>`,
        incl: ['Guide for the whole route', 'Walk through Ichan-Kala', 'Palaces, madrasahs, minarets and mosques', 'Stories of khans and the Silk Road'] } },

    { id: 'shahrisabz', cat: 'day', badgeClass: '', img: IMG + 'shakhrisabz/af9fcf20-83ae-4e34-bf3c-733222e80127.jpg',
      gallery: [IMG + 'shakhrisabz/0988819c-f29b-4acb-81ce-18f1ad7fe754.webp', IMG + 'shakhrisabz/4486f126-c410-447b-9bbb-d67139b7db12.webp', IMG + 'shakhrisabz/bdfd8647-942d-4dc7-a102-096779eb7578.jpg', IMG + 'shakhrisabz/e58b88ce-2b7c-48d6-abec-deb9ce464a02.webp'],
      ru: { title: 'Из Самарканда в Шахрисабз', meta: 'Целый день · из Самарканда · авто', price: 'от $186', unit: 'за группу', badge: 'Индивидуально',
        long: `<p>Поездка в Шахрисабз займёт около 2 часов. По дороге вы понаблюдаете за неторопливым бытом сельских жителей, использующих вместо транспорта осликов. А ещё заедем на горный базар, где продаётся местная продукция — травы, специи, горный чай, мёд и многое другое.</p><h4>Точки маршрута</h4><ul><li>Пещера-грот Тешик-Таш, где снимали фильм «Апачи»</li><li>Кафе «Катта-Таш» на перевале — попробуете исконно горское блюдо тандыр-гушт и познакомитесь с технологией приготовления одного из гастрономических символов Узбекистана (блюдо очень калорийное — возможно, хватит лёгкого завтрака перед экскурсией)</li><li>Исторический центр Шахрисабза с уникальной сохранившейся архитектурой</li><li>Мемориальный комплекс «Дорус Саодат» с мавзолеем Джахонгира и Омар-Шейха (конец XIV в.) и мечетью Хазрати Имам (XIV в.)</li><li>Комплекс «Дорут-Тиловат» (XIV–XV вв.) с усыпальницей Тимуридов и мечетью Кок-Гумбаз</li><li>Дворец Ак-Сарай — руины резиденции Амира Тимура (Тамерлана)</li></ul>`,
        incl: ['Автомобиль с кондиционером и водитель', 'Сопровождение гида весь день', 'Остановка на горном базаре', 'Фотопаузы на перевале и у Ак-Сарая'] },
      en: { title: 'From Samarkand to Shahrisabz', meta: 'Full day · from Samarkand · car', price: 'from $186', unit: 'per group', badge: 'Private',
        long: `<p>The drive to Shahrisabz takes about 2 hours. Along the way you'll watch the unhurried life of villagers who still use donkeys instead of cars. We'll also stop at a mountain bazaar selling local produce — herbs, spices, mountain tea, honey and much more.</p><h4>Route stops</h4><ul><li>The Teshik-Tash cave grotto, where the film “Apache” was shot</li><li>“Katta-Tash” café on the pass — try the authentic mountain dish tandyr-gosht and learn how one of Uzbekistan's gastronomic symbols is made (it's very filling — a light breakfast before the trip may be enough)</li><li>The historic centre of Shahrisabz with its uniquely preserved architecture</li><li>The “Dorus Saodat” memorial complex with the mausoleum of Jahangir and Omar-Sheikh (late 14th c.) and the Hazrati Imam Mosque (14th c.)</li><li>The “Dorut-Tilovat” complex (14th–15th c.) with the Timurid crypt and the Kok-Gumbaz Mosque</li><li>The Ak-Saray Palace — ruins of Amir Timur's (Tamerlane's) residence</li></ul>`,
        incl: ['Air-conditioned car and driver', 'Guide throughout the day', 'Stop at the mountain bazaar', 'Photo stops on the pass and at Ak-Saray'] } },

    { id: 'chimgan', cat: 'day', badgeClass: '', img: IMG + 'tas/04797f43-c677-4cf8-9d0a-17a7f2877c2a.webp',
      gallery: [IMG + 'tas/4c8eb723-1fd8-4576-b534-5611e522d255.webp', IMG + 'tas/826b9d53-188e-43cf-8474-d1386435c655.webp', IMG + 'tas/894a2e62-9a3c-42a6-914f-6f7d00d34eb9.jpg', IMG + 'tas/fd868b98-7670-418d-8365-4723a48aff2d.webp'],
      ru: { title: 'Из Ташкента — туда, куда вы не ездили (а зря!)', meta: '7 часов · из Ташкента · Тянь-Шань', price: 'от $150', unit: 'за группу', badge: 'из Ташкента',
        long: `<p>Целый день среди гор западного Тянь-Шаня недалеко от Ташкента — места, мимо которых обычно проезжают. А зря!</p><h4>Точки маршрута</h4><ul><li><b>Амирсой.</b> По канатной дороге поднимемся на высоту 2290 метров — панорамы горных вершин и чистый горный воздух.</li><li><b>Чимган.</b> Погуляем по склонам и полюбуемся величественными пиками западного Тянь-Шаня.</li><li><b>Чарвакское водохранилище.</b> Остановимся на высоком холме и насладимся видами знаменитого бирюзового озера в окружении гор. При желании можно искупаться и отдохнуть на чистом пляже.</li><li><b>Смотровая площадка</b> с видами на живописные посёлки Бричмула и Ходжикент.</li><li><b>Многовековые платаны и древние петроглифы</b> возрастом 40–100 тысяч лет до н. э. — прикоснётесь к истории и узнаете о тайнах древних изображений.</li></ul>`,
        incl: ['Трансфер из Ташкента и обратно', 'Сопровождение гида весь день', 'Подъём по канатной дороге Амирсой', 'Остановки на лучших смотровых'] },
      en: { title: "From Tashkent — to places you've never been (a shame!)", meta: '7 hours · from Tashkent · Tian Shan', price: 'from $150', unit: 'per group', badge: 'from Tashkent',
        long: `<p>A full day in the mountains of the western Tian Shan near Tashkent — places people usually drive past. And that's a shame!</p><h4>Route stops</h4><ul><li><b>Amirsoy.</b> We'll ride the cable car up to 2290 metres — panoramas of mountain peaks and clean mountain air.</li><li><b>Chimgan.</b> We'll walk the slopes and admire the majestic peaks of the western Tian Shan.</li><li><b>The Charvak Reservoir.</b> We'll stop on a high hill and enjoy views of the famous turquoise lake surrounded by mountains. If you wish, you can swim and relax on a clean beach.</li><li><b>A viewpoint</b> overlooking the picturesque villages of Brichmulla and Khodjikent.</li><li><b>Centuries-old plane trees and ancient petroglyphs</b> aged 40,000–100,000 years BC — touch history and learn the secrets these ancient images hold.</li></ul>`,
        incl: ['Transfer from Tashkent and back', 'Guide throughout the day', 'Amirsoy cable car ride', 'Stops at the best viewpoints'] } },

    { id: 'transfer', cat: 'day', badgeClass: '', img: IMG + 'transfer/3bf1506f-9d0a-4a8f-84d0-5b83602ef17b.webp',
      gallery: [IMG + 'transfer/car3.jpg', IMG + 'transfer/car2.jpg', IMG + 'transfer/car4.jpg'],
      ru: { title: 'Трансфер из Самарканда в Шахрисабз — и обратно', meta: 'Туда и обратно · авто · без гида', price: 'от $105', unit: 'за группу', badge: 'Трансфер',
        long: `<p><b>Обратите внимание:</b> это не экскурсия, а услуга перевозки — участие гида не предполагается.</p><p>Автомобиль подадим к вашему отелю или другому удобному месту. В Шахрисабзе у вас будет достаточно времени, чтобы самостоятельно погулять по историческому центру: увидеть архитектуру эпохи Темуридов, пройтись по паркам и почувствовать атмосферу древнего города. После прогулки водитель встретит вас в назначенное время и отвезёт обратно в Самарканд.</p><p>Трансфер проходит на комфортабельном автомобиле Chevrolet или Hyundai (детских кресел нет). Дорога в одну сторону занимает около 2 часов; в пути возможны остановки для отдыха, фото и обеда — по вашему желанию.</p>`,
        incl: ['Подача авто к вашему отелю', 'Дорога туда и обратно', 'Комфортный автомобиль (Chevrolet/Hyundai)', 'Свободное время в Шахрисабзе'] },
      en: { title: 'Transfer from Samarkand to Shahrisabz — and back', meta: 'Round trip · car · no guide', price: 'from $105', unit: 'per group', badge: 'Transfer',
        long: `<p><b>Please note:</b> this is not a tour but a transport service — a guide is not included.</p><p>We'll pick you up at your hotel or another convenient spot. In Shahrisabz you'll have enough time to walk the historic centre on your own: see the Timurid-era architecture, stroll through the parks and feel the atmosphere of the ancient city. After your walk, the driver will meet you at the agreed time and take you back to Samarkand.</p><p>The transfer is in a comfortable Chevrolet or Hyundai (no child seats). One way takes about 2 hours; stops for rest, photos and a meal are possible on request.</p>`,
        incl: ['Pick-up at your hotel', 'Round-trip drive', 'Comfortable car (Chevrolet/Hyundai)', 'Free time in Shahrisabz'] } },

    { id: 'custom-day', cat: 'day', build: true, badgeClass: '', img: '',
      gallery: [IMG + 'sam/sam2.jpg', IMG + 'hiva/hiva3.jpg', IMG + 'bukh/IMG_3091.jpg'],
      ru: { title: 'Экскурсия под ваш запрос', meta: 'Любой город · ваши интересы', price: 'По запросу', unit: 'под ваши даты', badge: 'Конструктор',
        long: `<p>Не нашли подходящий вариант среди готовых? Расскажите, что хочется увидеть — история, архитектура, фотопрогулки, гастрономия или базары — и я соберу экскурсию на день под ваши интересы, темп и город.</p><p>Пеший формат или на автомобиле с кондиционером. Индивидуально или малой группой.</p>`,
        incl: ['Программа под ваши интересы', 'Любой город Узбекистана', 'Пешком или на авто с кондиционером', 'Индивидуально или малой группой'] },
      en: { title: 'A day tour on request', meta: 'Any city · your interests', price: 'On request', unit: 'to your dates', badge: 'Custom',
        long: `<p>Didn't find a suitable option among the ready-made ones? Tell me what you'd like to see — history, architecture, photo walks, food or bazaars — and I'll put together a day tour to match your interests, pace and city.</p><p>On foot or by air-conditioned car. Private or in a small group.</p>`,
        incl: ['A programme to your interests', 'Any city in Uzbekistan', 'On foot or by air-conditioned car', 'Private or in a small group'] } },

    { id: 'express', cat: 'multi', badgeClass: 'star', img: IMG + 'heart/14cf304d-01ec-4ce6-a0b5-958cf9faae6c.webp',
      gallery: [IMG + 'heart/226cd4b8-1ca0-4459-8340-6881a0879e03.webp', IMG + 'heart/26155f52-2bac-4666-ae61-f177985032e0.webp', IMG + 'heart/27e5b692-7bcc-4507-be59-1687fc9f26fa.webp', IMG + 'heart/50918f28-4142-4e10-bfab-21c17557be19.webp', IMG + 'heart/7029f142-c39f-4cf0-9770-e7913269a02a.webp'],
      ru: { title: 'Экспресс-путешествие из Ташкента в Самарканд с поездкой в Конигил', meta: '2 дня · Ташкент → Самарканд → Конигил', price: 'от $450', unit: 'за человека', badge: '2 дня',
        long: `<p>За 2 дня вы посетите легендарную площадь Регистан, некрополь Шахи-Зинда и мавзолей Тамерлана, ощутите дух науки в обсерватории Улугбека и прогуляетесь по шумному Сиабскому базару.</p><p>Узнаете тайны древнего Афросиаба, прикоснётесь к святыне пророка Даниила и увидите, как по старинным технологиям создаётся самаркандская бумага.</p>`,
        incl: ['Трансферы Ташкент — Самарканд', 'Сопровождение гида', 'Программа по Самарканду', 'Поездка в Конигил: самаркандская бумага'] },
      en: { title: 'Express trip from Tashkent to Samarkand with a visit to Konigil', meta: '2 days · Tashkent → Samarkand → Konigil', price: 'from $450', unit: 'per person', badge: '2 days',
        long: `<p>In 2 days you'll visit the legendary Registan Square, the Shah-i-Zinda necropolis and Tamerlane's mausoleum, feel the spirit of science at the Ulugbek Observatory and stroll through the bustling Siab Bazaar.</p><p>You'll uncover the secrets of ancient Afrosiab, visit the shrine of the Prophet Daniel and see how Samarkand paper is made using ancient techniques.</p>`,
        incl: ['Tashkent — Samarkand transfers', 'Guide', 'Samarkand programme', 'Trip to Konigil: Samarkand paper'] } },

    { id: 'foryou', cat: 'multi', badgeClass: 'hit', img: IMG + 'solo-uz/07d25247-4e99-4804-a6e1-f0cb4f0ae965.webp',
      gallery: [IMG + 'solo-uz/36de36cb-e4eb-4af7-b965-839a60e9b52b.webp', IMG + 'solo-uz/395462ef-d847-44a2-a067-f412bc4bae75.webp', IMG + 'solo-uz/4c710a32-e9e1-4838-832f-2cadef897978.webp', IMG + 'solo-uz/8f6d5f50-19e4-416f-9876-2d7871a568c7.webp', IMG + 'solo-uz/9580f4ac-5286-47dc-b085-ac59caaa7483.webp', IMG + 'solo-uz/9674c3fc-e571-4a9c-8680-241ac8f02463.webp'],
      ru: { title: 'Узбекистан только для вас', meta: 'Ташкент · Бухара · Самарканд · индивидуально', price: 'от $1300', unit: 'за человека', badge: '★ Под ключ',
        long: `<p>Приглашаем вас в путешествие по восточной сказке! Начнём с Ташкента, где вы оцените сочетание древних построек и атмосферы современного города. Затем маршрут приведёт нас на извилистые улочки древней Бухары, хранящие историю в каждом камне. Завершающим аккордом станет поездка в чарующий Самарканд с его мечетями и медресе.</p><p>Вы насладитесь аутентичной узбекской кухней, выберете самые вкусные лакомства на колоритных базарах и погрузитесь в богатую историю и культуру страны.</p>`,
        incl: ['Все трансферы и переезды', 'Личные гиды в каждом городе', 'Подобранные отели', 'Гибкая программа под вас'] },
      en: { title: 'Uzbekistan just for you', meta: 'Tashkent · Bukhara · Samarkand · private', price: 'from $1300', unit: 'per person', badge: '★ All-inclusive',
        long: `<p>We invite you on a journey through an Eastern fairy tale! We'll start in Tashkent, where you'll appreciate the blend of ancient buildings and a modern city. Then the route takes us to the winding lanes of ancient Bukhara, which keep history in every stone. The final note is a trip to enchanting Samarkand with its mosques and madrasahs.</p><p>You'll enjoy authentic Uzbek cuisine, pick the tastiest treats at colourful bazaars and immerse yourself in the country's rich history and culture.</p>`,
        incl: ['All transfers and transport', 'Personal guides in each city', 'Hand-picked hotels', 'A flexible programme for you'] } },

    { id: 'skazka', cat: 'multi', badgeClass: 'hit', img: IMG + 'skazka/53c3d90f-0501-4bf8-b794-c818b4e2d9e1.webp',
      gallery: [IMG + 'skazka/6bef5931-0c83-4e13-9f56-c9e37fed6f2d.webp', IMG + 'skazka/afe2f7eb-8cf1-4410-82e7-184327aa194b.webp', IMG + 'skazka/b583e6e1-00a3-4d8c-b837-4cebafa0e369.webp', IMG + 'skazka/cd1ca64a-4662-4fed-8669-ba90b1983a94.webp'],
      ru: { title: 'Узбекистан сказочный', meta: 'Хива · Самарканд · Бухара · Ташкент · индивидуально', price: 'от $1500', unit: 'за тур под ключ', badge: '★ 4 города',
        long: `<p>Приглашаем увидеть Узбекистан во всей красе: его роскошные дворцы, мечети и минареты. Полюбоваться игрой солнечных лучей на лазурной мозаике, проникнуться восточной атмосферой на шумном базаре и погрузиться в историю. Вы побываете в обсерватории XV века и понаблюдаете, как производят шёлковые ковры по древним технологиям.</p><p>Осмотрите внутренний город Ичан-Кала в Хиве, архитектурные ансамбли Пои-Калян и Ляби-Хауз в Бухаре, мавзолей Гур-Эмир и мечеть Биби-Ханым в Самарканде. А в Ташкенте увидите, как в одном городе сочетаются древность и современность.</p>`,
        incl: ['Маршрут по 4 городам: Хива, Бухара, Самарканд, Ташкент', 'Все трансферы и сопровождение', 'Отели и логистика', 'Личный гид-куратор тура'] },
      en: { title: 'Fairy-tale Uzbekistan', meta: 'Khiva · Samarkand · Bukhara · Tashkent · private', price: 'from $1500', unit: 'all-inclusive tour', badge: '★ 4 cities',
        long: `<p>We invite you to see Uzbekistan in all its glory: its lavish palaces, mosques and minarets. Admire the play of sunlight on azure mosaics, soak up the Eastern atmosphere of a busy bazaar and dive into history. You'll visit a 15th-century observatory and watch silk carpets being made by ancient techniques.</p><p>You'll explore the inner city of Ichan-Kala in Khiva, the Poi-Kalyan and Lyabi-Hauz ensembles in Bukhara, the Gur-Emir Mausoleum and Bibi-Khanym Mosque in Samarkand. And in Tashkent you'll see how antiquity and modernity blend in a single city.</p>`,
        incl: ['A route through 4 cities: Khiva, Bukhara, Samarkand, Tashkent', 'All transfers and guiding', 'Hotels and logistics', 'A personal tour curator-guide'] } },

    { id: 'custom', cat: 'multi', build: true, badgeClass: '', img: '',
      gallery: [IMG + '6e647161-930d-4471-809b-dab252bc5b6f.webp', IMG + 'photo_12_2026-06-04_14-40-04.jpg'],
      ru: { title: 'Индивидуальный подбор маршрута', meta: 'Любые города · любые даты', price: 'По запросу', unit: 'под ваши даты', badge: 'Конструктор',
        long: `<p>Расскажите, что вам интересно — история, фотопрогулки, гастрономия, горы или базары — и мы соберём индивидуальный маршрут под ваши даты, темп и бюджет.</p><p>Пеший формат или на автомобиле с кондиционером (все машины в отличном состоянии). Индивидуально или малой группой.</p>`,
        incl: ['Маршрут под ваши интересы', 'Пешком или на авто с кондиционером', 'Индивидуально или малой группой', 'Любой город и любые даты'] },
      en: { title: 'A tailor-made itinerary', meta: 'Any cities · any dates', price: 'On request', unit: 'to your dates', badge: 'Custom',
        long: `<p>Tell us what interests you — history, photo walks, food, mountains or bazaars — and we'll build a personal itinerary to match your dates, pace and budget.</p><p>On foot or by air-conditioned car (all cars in excellent condition). Private or in a small group.</p>`,
        incl: ['An itinerary to your interests', 'On foot or by air-conditioned car', 'Private or in a small group', 'Any city and any dates'] } }
  ];

  // ===== ОТЗЫВЫ (двуязычные) =====
  window.REVIEWS = [
    { ru: { name: 'Марина и Олег', city: 'Москва', src: 'Хафткул: семь озёр',
        text: 'Наше незабываемое путешествие началось в 8 утра у отеля. Всю дорогу гид интересно рассказывал обо всём: о традициях, о быте, об отношениях в семьях — в общем, о жизни двух стран. Границу прошли быстро и уже на полноприводной машине с водителем продолжили путь по Таджикистану. Дорога на озёра из щебёнки: массаж внешних и внутренних органов получили в полной мере) Виды завораживающие. Величественные горы обступают озёра, каждое разной формы и цвета воды. На седьмом озере был пикник — нас угостили вкусными бутербродами. Какой там ВОЗДУХ — будто прозрачный! По обочинам всю дорогу цветут маки: красные и редчайшие жёлтые. Очень рекомендуем эту экскурсию. Спасибо большое за великолепные впечатления!' },
      en: { name: 'Marina & Oleg', city: 'Moscow', src: 'Haftkul: seven lakes',
        text: 'Our unforgettable trip began at 8 a.m. by the hotel. The whole way the guide told us fascinating things: traditions, daily life, family relationships — life in two countries, really. We crossed the border quickly and continued through Tajikistan in a 4×4 with a driver. The road to the lakes is gravel: we got a full massage of every inner and outer organ :) The views are mesmerising. Majestic mountains surround the lakes, each a different shape and water colour. At the seventh lake we had a picnic — they treated us to tasty sandwiches. And that AIR — almost transparent! Poppies bloom along the whole road: red and the rarest yellow ones. We highly recommend this tour. Thank you so much for the wonderful experience!' } },
    { ru: { name: 'Светлана', city: 'Санкт-Петербург', src: 'Хафткул: семь озёр',
        text: 'Тур на 7 озёр — это настоящая перезагрузка 🤍 Невероятная природа, кристально чистая вода разных оттенков и тишина, от которой захватывает дух. Очень комфортная организация, всё продумано до мелочей. Место, куда хочется вернуться ещё раз ✨ Лучший гид, обязательно обращайтесь за туром к нему!' },
      en: { name: 'Svetlana', city: 'Saint Petersburg', src: 'Haftkul: seven lakes',
        text: 'The 7-lakes tour is a real reset 🤍 Incredible nature, crystal-clear water in different shades and a silence that takes your breath away. Very comfortable organisation, everything thought through to the smallest detail. A place you want to come back to ✨ The best guide — definitely book a tour with him!' } },
    { ru: { name: 'Юлия', city: 'Казань', src: 'Узбекистан сказочный',
        text: 'Огромное спасибо гиду Авраму за экскурсию по Самарканду. Он очень глубоко знает историю, рассказывает интересно и замечает такие детали, которые обычно упускаешь. Он сделал наш день особенным. И отдельное спасибо за шикарные фотографии — теперь они будут напоминать нам об этом прекрасном путешествии.' },
      en: { name: 'Yulia', city: 'Kazan', src: 'Fairy-tale Uzbekistan',
        text: 'Huge thanks to guide Avram for the tour of Samarkand. He knows the history very deeply, tells it in an engaging way and notices details you would usually miss. He made our day special. And a special thank-you for the gorgeous photos — now they will remind us of this wonderful trip.' } },
    { ru: { name: 'Татьяна', city: 'Минск', src: 'Групповая экскурсия по Самарканду',
        text: 'Замечательная экскурсия по Самарканду с экскурсоводом Исломбеком. Прошла очень познавательно, интересно и легко. Несмотря на молодость, Исломбек уже имеет большой опыт и прекрасно владеет материалом. Он с глубоким уважением относится к традициям своего народа и с искренним теплом встречает гостей. Мы получили массу ярких впечатлений и узнали много нового. Искренне рекомендуем всем, кто хочет по-настоящему прочувствовать атмосферу Самарканда!' },
      en: { name: 'Tatyana', city: 'Minsk', src: 'Group tour of Samarkand',
        text: 'A wonderful tour of Samarkand with guide Islombek. It was very informative, interesting and easy-going. Despite his youth, Islombek already has great experience and a superb command of the material. He treats his people’s traditions with deep respect and welcomes guests with genuine warmth. We got a wealth of vivid impressions and learned a lot. We sincerely recommend him to anyone who wants to truly feel the atmosphere of Samarkand!' } },
    { ru: { name: 'Андрей', city: 'Екатеринбург', src: 'Узбекистан только для вас',
        text: 'У нас была индивидуальная программа: Ташкент — Самарканд — Шахрисабз — Бухара. Все гиды были очень внимательные и эрудированные, за что им большое спасибо! Мы узнали для себя очень много нового и интересного. Отдельная благодарность руководителю тура Абрамжону за заботу о том, чтобы у нас всё было хорошо!' },
      en: { name: 'Andrey', city: 'Yekaterinburg', src: 'Uzbekistan just for you',
        text: 'We had a private programme: Tashkent — Samarkand — Shahrisabz — Bukhara. All the guides were very attentive and knowledgeable — many thanks to them! We learned so much new and interesting. A special thank-you to the tour leader Abramjon for taking care that everything went well for us!' } },
    { ru: { name: 'Ирина и Павел', city: 'Новосибирск', src: 'Узбекистан сказочный',
        text: 'Давно хотели съездить в Узбекистан, но думали ехать сами или через компанию. В итоге обратились к Авраму — и не пожалели. Семидневный тур по Ташкенту, Самарканду и Бухаре был очень насыщенным. Всё на высшем уровне: трансфер, гиды с машинами, гостиницы. В Самарканде Аврам сам возил нас на электромобиле. Его пунктуальность, знания и забота подтвердили, что мы выбрали правильного человека. Даже на рынке он помогал выбирать продукты и торговался. Рекомендуем всем, кто собирается в Узбекистан!' },
      en: { name: 'Irina & Pavel', city: 'Novosibirsk', src: 'Fairy-tale Uzbekistan',
        text: 'We had long wanted to visit Uzbekistan but kept thinking of going on our own or through a company. In the end we turned to Avram — and did not regret it. The seven-day tour of Tashkent, Samarkand and Bukhara was very rich. Everything was top-notch: transfers, guides with cars, hotels. In Samarkand Avram drove us himself in an electric car. His punctuality, knowledge and care confirmed we had chosen the right person. He even helped us pick produce at the market and haggled. We recommend him to everyone heading to Uzbekistan!' } }
  ];

  // ===== ГАЛЕРЕЯ =====
  window.GALLERY = [
    // холодные сине-серые тона, от тёмного к светлому
    { src: IMG + '812c7a3a-f899-4cd7-a518-c0153e70d5a8.jpg', w: 'w-s' },
    { src: IMG + 'photo_8_2026-06-04_14-40-04.jpg', w: 'w-m' },
    { src: IMG + 'tourists/171d7df1-4691-4449-8a29-e3dc12118d50.webp', w: 'w-s' },
    { src: IMG + 'photo_9_2026-06-04_14-40-04.webp', w: 'w-l' },
    { src: IMG + 'tourists/118ca274-1a40-4d3d-90ab-ca7061be86b7.webp', w: 'w-s' },
    { src: IMG + 'tourists/a217af77-9d95-41c8-95ca-d5b9a662e8d8.webp', w: 'w-m' },
    { src: IMG + 'tourists/b867bfbd-1d38-418c-a596-02bdd7f61def.webp', w: 'w-s' },
    { src: IMG + 'tourists/7ef8b867-4489-4eb9-aa38-cc95c04ce356.webp', w: 'w-s' },
    { src: IMG + 'photo_6_2026-06-04_14-40-04.jpg', w: 'w-s' },
    { src: IMG + '2bbb9b51-5511-4736-a1c1-bad85687e351.webp', w: 'w-m' },
    { src: IMG + '6ca42075-daf9-4d90-a8a1-53303daac723.jpg', w: 'w-l' },
    { src: IMG + 'tourists/photo_2026-06-05_23-20-02.jpg', w: 'w-s' },
    { src: IMG + 'd5bfb65b-37ce-43f8-8927-984cca16e890.webp', w: 'w-s' },
    // тёплые золотисто-земляные тона, от светлого к тёмному
    { src: IMG + 'tourists/0daa5087-2649-4ecf-9b59-3444a34cb753.webp', w: 'w-s' },
    { src: IMG + 'tourists/2407b8b1-a65f-4aa0-9b9a-df7081ab4ec5.webp', w: 'w-s' },
    { src: IMG + 'tourists/7066de9d-3f0c-4a3d-a945-f6d0b4bbd816.webp', w: 'w-s' },
    { src: IMG + 'af7a8c1c-c9e3-43c4-84f5-d55a41c08d79.webp', w: 'w-m' },
    { src: IMG + 'photo_5_2026-06-04_14-40-04.jpg', w: 'w-s' },
    { src: IMG + '70b8d3d7-aecf-441f-baf5-76946eeded5b.webp', w: 'w-m' },
    // глубокий бордовый — финальный тёплый акцент
    { src: IMG + 'photo_3_2026-06-04_14-40-04.jpg', w: 'w-l' }
  ];

  // ===== ПРИМЕНЕНИЕ ПЕРЕВОДА К СТАТИКЕ =====
  function applyStaticI18n() {
    document.documentElement.lang = window.LANG;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const v = T(el.getAttribute('data-i18n')); if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const v = T(el.getAttribute('data-i18n-html')); if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      const v = T(el.getAttribute('data-i18n-ph')); if (v != null) el.setAttribute('placeholder', v);
    });
    const tt = T('docTitle'); if (tt) document.title = tt;
  }
  window.applyStaticI18n = applyStaticI18n;

  const hooks = [];
  window.onLang = function (fn) { hooks.push(fn); };

  function updateSwitchUI() {
    var lbl = document.getElementById('langLabel');
    if (lbl) lbl.textContent = window.LANG.toUpperCase();
    document.querySelectorAll('.lang-menu [data-lang]').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === window.LANG);
    });
  }

  window.setLang = function (l) {
    if (l !== 'en') l = 'ru';
    if (l === window.LANG) return;
    window.LANG = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    applyStaticI18n();
    hooks.forEach(function (fn) { try { fn(); } catch (e) {} });
    updateSwitchUI();
  };

  // init — выпадающий переключатель языка
  var langSwitch = document.getElementById('langSwitch');
  var langBtn = document.getElementById('langBtn');
  if (langBtn && langSwitch) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = langSwitch.classList.toggle('open');
      langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!langSwitch.contains(e.target)) { langSwitch.classList.remove('open'); langBtn.setAttribute('aria-expanded', 'false'); }
    });
  }
  document.querySelectorAll('.lang-menu [data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      window.setLang(b.getAttribute('data-lang'));
      if (langSwitch) langSwitch.classList.remove('open');
      if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
    });
  });
  applyStaticI18n();
  updateSwitchUI();
})();
