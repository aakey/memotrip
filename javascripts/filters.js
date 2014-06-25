var cat = {
			"wear":"Одежда",
			"gadg":"Гаджеты",
			"item":"Снаряжение",
			"hygiene":"Гигиена",
			"tableware":"Посуда",
			"docs":"Документы"
		};
		var arr = {
			"camp": {
				"wear":[
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
				"item":[
					"Нож",
					"Пятиточеник",
					"Палатка",
					"Спальник",
					"Фонарик + батарейки",
					"Топорик",
					"Каремат",
					"Зажигалка"
				],
				"hygiene":[
					"Салфетки влажные",
					"Расческа",
					"Зубная паста/щетка",
					"Дезодорант",
					"Шампунь",
					"Мыло",
					"Туалетная бумага"
				],
				"tableware":[
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
					"Планшет",
					"Ноутбук",
					"Смартфон + зарядка"
				],
				"docs":[
					"Загран пасспорт",
					"Справка о доходах",
					"Билеты"
				]
			},
			"girl": {
				"docs":[
					"Планшет",
					"Ноутбук",
					"Смартфон + зарядка"
				],
			}
			
		};
		//console.log(arr['t1'], arr['t2']); 
		
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









