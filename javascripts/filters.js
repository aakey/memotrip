var cat = {
	"cloth":"Одежда",
	"equip":"Снаряжение",
	"clean":"Гигиена",
	"cook":"Посуда",
	"gadg":"Гаджеты",
	"docs":"Документы",
	"aid":"Аптечка",
	"climb":"Скалолазание",
	"board":"Сноуборд",
	"fish":"Рыбалка",
	"hunt":"Охота",
	"makeup":"Косметика"
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
					"Носки",
					"Шлепанцы",
					"Нижнее белье",
					"Спальный комплект"
				],
				"equip":[
					"Нож",
					"Пятиточеник",
					"Палатка",
					"Спальник",
					"Фонарик + батарейки",
					"Топорик",
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
					"Мыло",
					"Туалетная бумага"
				],
				"cook":[
					"Кружка",
					"Ложка",
					"Миска",
					"Котелок"
				],
				"gadg":[
					"Смартфон + зарядка"
				]
			},
			"abroad": {
				"gadg":[
					"Переходник для розетки",
					"Ноутбук",
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
			"cooking": {
				"cook":[
					"Шампура",
					"Барбекю",				
					"Дрова",				
					"Топор",				
					"Нож",				
					"Соль",				
					"Продукты/мясо"				
				]
			},
			"hiking": {
				"equip":[
					"Карта",
					"Топор/мачете",
					"Компасс"				
				]
			},
			"woman": {
				"clean":[
					"Прокладки/тампоны",
					"Средство для умывания",
					"Спонжики",
					"Зеркальце",
					"Крема",
					"Ножнички",
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
					"Планшет",
					"Ноутбук",
					"Смартфон + зарядка"
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
		//console.log(arr['t1'], arr['t2']); 
		var taste = localStorage.getItem(‘favoriteflavor’);
		console.log(taste); 
		
	$('document').ready(function(){

	
	
		$('.btn-info').click(function(){ 
			$('.info').slideToggle("slow");
		});
		$('.btn-remember').click(function(){ 
			$('.remember').slideToggle("slow");
		});


		
		$(".subcat .check").live("click", function() {
		    if ($(this).attr("class") == "check active") {
		    	$(this).removeClass("active");	      //Удаляем класс "active", кнопка переходит в ненажатое состояние
		    	var addId = $(this).parent().attr("id");    //Записываем в переменную имя id, которое соотв div с таким же именем класса
		    	
				
				$('article .'+ addId).remove();         //Удаляем div с соответствующим классом из DOM
				
				
				
				$("article div").removeClass('hidden');
				var supervise2 = {};
				
				$('article div').each(function() {
				    var txt = $(this).text();
				    if (supervise2[txt])
				        $(this).addClass('hidden');
				    else
				        supervise2[txt] = true;
				});
					
		    }
			
		    else {
		    	$(this).addClass("active");
				var addId = $(this).parent().attr("id");
				console.log(addId); 
				
				for(var item in arr[addId]){
					$(".packlist").find("article." + item).append("<div class='title " + addId + "'" + "data="+ item + ">" + cat[item] + "</div>");
					console.log(cat[addId]);
					$.each(arr[addId][item], function(key, val) {
						$ (".packlist").find("article." + item).append("<div class='" + addId + "'" + "data="+ item + ">" + val + "</div>");
					
					});
				}



				var supervise = {};
				$('article div').each(function() {
				    var txt = $(this).text();
				    if (supervise[txt])
				        $(this).addClass('hidden');
				    else
				        supervise[txt] = true;
				});

				$('article .'+ addId).animate({    
					opacity: 1,
					"margin-left":"15px"
				}, 500);


				
		    }  
		});
	});









