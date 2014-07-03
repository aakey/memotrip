var cat = {
	"cloth":"Одежда и обувь",
	"equip":"Снаряжение",
	"clean":"Гигиена и косметика",
	"cook":"Посуда и кулинария",
	"gadg":"Гаджеты",
	"docs":"Документы",
	"aid":"Аптечка",
	"climb":"Скалолазание",
	"board":"Сноуборд",
	"fish":"Рыбалка",
	"hunt":"Охота",
};
var arr = {
	"camping": {
		"cloth":[
			"Баф",
			"Футболка",
			"Футболка длинный рукав",
			"Шорты сменные",
			"Свитер/реглан",
			"Штаны",
			"Шлепанцы/сандали",
			"Носки сменные (1 пара на день)",
			"Белье сменное (1 на день)",
			"Спальный комплект"
		],
		"equip":[
			"Нож",
			"Пятиточеник",
			"Палатка",
			"Спальник",
			"Фонарик + батарейки",
			"Топор/мачете",
			"Каремат",
			"Мусорные пакеты",
			"Зажигалка"
		],
		"clean":[
			"Салфетки влажные",
			"Расческа",
			"Зубная паста/щетка",
			"Дезодорант",
			"Туалетная бумага"
		],
		"cook":[
			"Кружка",
			"Ложка",
			"Миска",
			"Котелок"
		],
		"gadg":[
			"Смартфон + зарядка",
			"Портативная колонка",
			"Наушники"
		]
	},
	"picnic": {
		"equip":[
			"Нож",
			"Пятиточеник",
			"Каремат",
			"Зажигалка"
		],
		"clean":[
			"Салфетки влажные",
			"Туалетная бумага"
		],
		"cook":[
			"Кружка",
			"Ложка",
			"Миска",
		],
		"gadg":[
			"Смартфон + зарядка",
			"Портативная колонка",
			"Наушники"
		]
	},
	"hiking": {
		"cloth":[
			"Баф",
			"Футболка",
			"Футболка длинный рукав",
			"Свитер/реглан",
			"Шорты сменные",
			"Штаны",
			"Шлепанцы/сандали",
			"Сменная обувь",
			"Носки сменные (1 пара на день)",
			"Белье сменное (1 на день)",
			"Спальный комплект"
		],
		"equip":[
			"Карта",
			"Топор/мачете",
			"Компасс",
			"Нож",
			"Пятиточеник",
			"Палатка",
			"Спальник",
			"Фонарик + батарейки",
			"Каремат",
			"Мусорные пакеты",
			"Зажигалка"
		],
		"clean":[
			"Салфетки влажные",
			"Расческа",
			"Зубная паста/щетка",
			"Дезодорант",
			"Шампунь",
			"Мыло/гель для душа",
			"Туалетная бумага"
		],
		"cook":[
			"Кружка",
			"Ложка",
			"Миска",
			"Котелок"
		],
		"gadg":[
			"Смартфон + зарядка",
			"Портативная колонка",
			"Наушники"
		]
	},
	"abroad": {
		"gadg":[
			"Переходник для розетки",
			"Наушники",
			"Смартфон + зарядка"
		],
		"docs":[
			"Загран пасспорт",
			"Водительское удостоверение",
			"Студенческий билет/ ISIC",
			"Копии документов",
			"Билеты",
			"Разменять деньги",
			"Бронь в гостинице"
		]
	},
	"tour": {
		"gadg":[
			"Наушники",
			"Смартфон + зарядка"
		],
		"docs":[
			"Пасспорт",
			"Водительское удостоверение",
			"Студенческий билет/ ISIC",
			"Билеты"
		],
		"cook":[
			"Термокружка/термос",
		],
		"clean":[
			"Салфетки влажные",
			"Туалетная бумага"
		],
	},
	"trip": {
		"cloth":[
			"Футболка",
			"Футболка длинный рукав",
			"Свитер/реглан",
			"Шорты сменные",
			"Штаны",
			"Шлепанцы/сандали",
			"Носки сменные (1 пара на день)",
			"Белье сменное (1 на день)",
			"Спальный комплект"
		],
		"gadg":[
			"Наушники",
			"Смартфон + зарядка"
		],
		"docs":[
			"Пасспорт",
			"Водительское удостоверение",
			"Студенческий билет/ ISIC",
			"Билеты"
		],
		"cook":[
			"Термокружка/термос",
			"Вода в поезд",
			"Еда"
		],
		"clean":[
			"Салфетки влажные",
			"Расческа",
			"Зубная паста/щетка",
			"Дезодорант",
			"Шампунь",
			"Мыло/гель для душа",
			"Туалетная бумага"
		],
		"equip":[
			"Нож"
		],

	},
	"cooking": {
		"cook":[
			"Шампура",
			"Мангал",
			"Барбекю",				
			"Дрова/уголь",				
			"Нож",				
			"Соль",				
			"Продукты/мясо"				
		],
		"equip":[			
			"Топор/мачете"				
		],
	},
	"woman": {
		"clean":[
			"Прокладки/тампоны",
			"Средство для умывания",
			"Спонжики",
			"Зеркальце",
			"Крема",
			"Ножнички",
			"Резинка для волос",
			"Бальзам для волос",
			"Гигиеническая помада"					
		]				
	},
	"cold": {
		"cloth":[
			"Куртка",
			"Термобелье",
			"Шапка"
		]
	},
	"hot": {
		"cloth":[
			"Головной убор(панама, кепка)"
		],
		"equip":[
			"Солнечные очки"
		],
		"aid":[
			"Солнцезащитный крем"
		]
	},
	"rain": {
		"equip":[
			"Дождевик",
			"Клеенка/тент"
		]
	},
	"photo": {
		"gadg":[
			"Фотоаппарат + зарядка"
		]
	},
	"video": {
		"gadg":[
			"Видеокамера + зарядка"
		]
	},
	"notebook": {
		"gadg":[
			"Ноутбук + зарядка"
		]
	},
	"tablet": {
		"gadg":[
			"Планшет + зарядка"
		]
	},
	"swiming": {
		"clean":[
			"Полотенце"
		],
		"equip":[
			"Подводные очки/ маска"
		],
		"cloth":[
			"Купальник/ плавки",
		]
	},
	"climbing": {
		"equip":[
			"Веревки",
			"Карабины",
			"Система"
		]
	},
	"hunting": {
		"hunt":[
			"Ружье",
			"Патроны",
			"Нож",
			"Пыжи",
			"Порох"
		]
	},
	"fishing": {
		"fish":[
			"Спининг",
			"Катушка",
			"Снасти",
			"Наживка",
			"Садок",
			"Щипцы длинные",
			"Ремкомплект",
			"Доска",
			"Терка",
			"Чистка"
		],
		"cloth":[
			"Сапоги резиновые"					
		]
	},
	"boarding": {
		"docs":[
			"Сноуборд",
			"Крепы",
			"Очки",
			"Шлем",
			"Воск",
			"Боты"
		]
	},
	"medicine": {
		"aid":[
			"Лейкопластырь",
			"Бинт",
			"Активированный уголь",
			"Бинт нестерильный",
			"Спирт медицинский",
			"Хлоргексидин/Йод",
			"Кларитин/Cупрастин",
			"Фталазол",
			"Панкреатин",
			"Парацетамол",
			"Аналгин/цитрамон",
			"Спазмалгон/Кеторолак(кетанов)",
			"Аспирин",
			"Звездочка",
			"Бепантен"
		]
	}
};




$('document').ready(function(){

	//Показываем и скрываем по нажатию дополнительную информацию
	$('.btn-info').click(function(){ 
		$('.info').fadeToggle("slow");
		$('.tips').fadeOut(50);
	});
	$('.btn-remember').click(function(){ 
		$('.remember').fadeToggle("slow");
		$('.tips').fadeOut(50);
	});
	$('.remember .close').click(function(){ 
		$('.remember').fadeOut("slow");
	});
	$('.info .close').click(function(){ 
		$('.info').fadeOut("slow");
	});
	

	
	$(".check").click(function(){ 
			//Скрываем подсказку
			$('.tips').fadeOut(50);

	    if ($(this).attr("class") == "check active") {

	    	//Удаляем класс "active", кнопка переходит в ненажатое состояние
	    	$(this).removeClass("active");	

	    	//Записываем в переменную id родителя, которое соответствует div с таким же именем класса      
	    	var addId = $(this).parent().attr("id");    
	    	
				//Скрываем и анимируем div с соответствующим классом из DOM
				$('article .'+ addId).animate({    
					"top": "-50px",
					"opacity":"0"
				}, 500); 
				
				setTimeout(function () {
					//Удаляем div с соответствующим классом из DOM с задержкой 400мс
					$('article .'+ addId).remove();

					//Удаляем класс hidden у повторов с задержкой 400мс
					$("article div").removeClass('hidden');

					//Добавляем класс hidden для повторяющихся элементов DOM
					var supervise2 = {};
					$('article div').each(function() {
					    var txt = $(this).text();
					    if (supervise2[txt])
					        $(this).addClass('hidden');
					    else
					        supervise2[txt] = true;
					});
				}, 400);


					var th = $(this).parent().parent();
					if ( $(th).hasClass("nature")) {
		     			$('.civil').removeClass('disable');
						$('.civil div div').addClass('check');
						$('.civil div div').removeClass('checkfake');
		    	}
		    	
	    
    	}
		
	    else {
	    	
	    	//Добавляем класс "active", кнопка переходит в нажатое состояние
	    	$(this).addClass("active");

	    	//Записываем в переменную id родителя, которое соответствует div с таким же именем класса 
				var addId = $(this).parent().attr("id");
			
				//Выводим элементы ассоциированного массива для конкретной нажатой кнопки с категорией addId
				for(var item in arr[addId]){
					//Выводим div с названием категории
					$(".packlist").find("article." + item).append("<div class='title " + addId + "'" + "data="+ item + ">" + cat[item] + "</div>");
					
					//Выводим div с элементами массива
					$.each(arr[addId][item], function(key, val) {
						$ (".packlist").find("article." + item).append("<div class='" + addId + "'" + "data="+ item + ">" + val + "</div>");
					});
				}


				//Скрываем повторы, добаляя класс hidden
				var supervise = {};
				$('article div').each(function() {
				    var txt = $(this).text();
				    if (supervise[txt])
				        $(this).addClass('hidden');
				    else
				        supervise[txt] = true;
				});

				//Анимируем появление
				$('article .'+ addId).animate({    
					"top":"0px"
				}, 500);

				//$('article div').click(function(){ 
				//	$(this).toggleClass("strike");
				//});

					var th = $(this).parent().parent();
					if ( $(th).hasClass("nature")) {
		     		$('.civil').addClass('disable');
						$('.civil div div').removeClass('check').addClass('checkfake');
		    	}
	    } 
	});
});











