const now = new Date(); //ставишь 0-зима, 3-весна, 6-лето, 9-осень 

const seasons = ["winter", "spring", "summer", "autumn"];
	
const month = now.getMonth();

const season = seasons[Math.floor(now.getMonth() % 11 / 3)];

function designMain(){
	let body = document.getElementById("mainbody");
	let nav = document.getElementById("nav");
	weatherHead = document.getElementById("weatherHead");
	let bodyImage = "", 
		bodyColor = "", 
		navColor = "";
	
	switch(season){
		case "winter":
			bodyImage = "url('data/winter.png')", 
			bodyColor = "#3d9ad1", 
			navColor = "#0969a2";
			break;
		case "spring":
			bodyImage = "url('data/spring.png')", 
			bodyColor = "#00af64", 
			navColor = "#00af64";
			break;
		case "summer":
			bodyImage = "url('data/summer.png')", 
			bodyColor = "#ff7a00", 
			navColor = "#ff9900";
			break;
		case "autumn":
			bodyImage = "url('data/autumn.png')", 
			bodyColor = "#f10026", 
			navColor = "#9C2000";
			break;
	}
	body.style.backgroundImage = bodyImage;
	body.style.backgroundColor = bodyColor;
	nav.style.backgroundColor = navColor;

}

function setImage() {
	let weather = document.getElementById("weather").textContent;
	let img = Math.floor(month % 11 / 3) * 3;
	switch (weather) {
		//Хорошая погода = +0, Не очень плохая = +1, Всё плохо = +2
		case "Ясно":
			img += 0;
		break;	
		
		case "Облачно":
			img += 0;
		break;	
	
		case "Пасмурно":
			img += 1;
		break;	
		
		case "Небольшой снег":
			img += 1;
		break;
		
		case "Снегопад":
			img += 2;
		break;	
		
		case "Метель":
			img += 2;
		break;	
	}
	document.getElementById("image").src = "data/" + img.toString() + ".png";
}

function setImageHistory(i) {
	let weather = document.getElementById("historyweather" + i).textContent;
	var now = new Date();
	let img = Math.floor(month % 11 / 3) * 3;
	switch (weather) {
		//Хорошая погода = +0, Не очень плохая = +1, Всё плохо = +2
		case "Ясно":
			img += 0;
		break;	
		
		case "Облачно":
			img += 0;
		break;	
	
		case "Пасмурно":
			img += 1;
		break;	
		
		case "Небольшой снег":
			img += 1;
		break;
		
		case "Снегопад":
			img += 2;
		break;	
		
		case "Метель":
			img += 2;
		break;	
	}
	console.log(weather + " " + img);
	document.getElementById("historyimage" + i).src = "data/" + img.toString() + ".png";
  }
	
function designWeather(){
	
	setImage();
	//document.getElementById('temp').style.backgroundColor = "#5597b4";
	let temp = document.getElementById("temp"),
		weather = document.getElementById("weather"),
		housing = document.getElementById("housing"),
		dataTable = document.getElementById("data_table"),
		tempReal = document.getElementById("temp_real");
	
	let tempColor = "", 
		weatherColor = "",
		housingColor = "",
		dataTableColor = "",
		tempRealColor = "";
	
	console.log(season); 
	
	switch(season){
		case "winter":
			tempColor = "#03436a", 
			weatherColor = "#64a8d1",
			housingColor = "#64a8d1",
			dataTableColor = "#0969a2",
			tempRealColor = "#245a7a";
			break;
		case "spring":
			tempColor = "#1cd3a2", 
			weatherColor = "#218359",
			housingColor = "#007241",
			dataTableColor = "#ffce73",
			tempRealColor = "#e869aa";
			break;
		case "summer":
			tempColor = "#0d58a6", 
			weatherColor = "#689cd2",
			housingColor = "#bf7530",
			dataTableColor = "#ffb673",
			tempRealColor = "#1f6b75";
			break;
		case "autumn":
			tempColor = "#ff7600", 
			weatherColor = "#f83e5b",
			housingColor = "#ff9840",
			dataTableColor = "#bf5230",
			tempRealColor = "#ff9473";
			break;
	}
	temp.style.background = tempColor;
	weather.style.background = weatherColor;
	housing.style.background = housingColor;
	dataTable.style.background = dataTableColor;
	tempReal.style.background = tempRealColor;
}


function designBuilding(){
	var baseColor = "",
		setColor = "";
	
    switch(season){
		case "winter":
			baseColor = "#64a8d1",
			setColor = "#245a7a";
			break;
		case "spring":
			baseColor = "#1cd3a2",
			setColor = "#007241";
			break;
		case "summer":
			baseColor = "#ffb673",
			setColor = "#bf7530";
			break;
		case "autumn":
			baseColor = "#ff9840",
			setColor = "#f83e5b";
			break;
	}
	localStorage.setItem('setColor', setColor);
	localStorage.setItem('baseColor', baseColor);
}

function designHistory(){
	let housing = document.getElementById("housing");
	let tables = [document.getElementById("historytable1")];
	let temp = [document.getElementById("historytemp1")];
	
	for(let i=2;i<=8;i++){
		tables.push(document.getElementById("historytable" + i.toString()));
		temp.push(document.getElementById("historytemp" + i.toString()));
	}
	
	let housingColor = "",
		tempColor = "", 
		tableColor = "";
	
	switch(season){
		case "winter":
			tempColor = "#245a7a",
			housingColor = "#64a8d1",
			tableColor = "#0969a2";
			break;
		case "spring":
			tempColor = "#e869aa",
			housingColor = "#218359",
			tableColor = "#1cd3a2";
			break;
		case "summer":
			tempColor = "#689cd2",
			housingColor = "#bf7530",
			tableColor = "#ffb673";
			break;
		case "autumn":
			tempColor = "#ff7600",
			housingColor = "#ff9840",
			tableColor = "#bf5230";
			break;
	}
	housing.style.background = housingColor;
	
	for(let i=0;i<8;i++){
		temp[i].style.background = tempColor;
		tables[i].style.background = tableColor;
	}
}


function designMap(){
	let housing = document.getElementById("housing");
	
	let housingColor = "";
	
	switch(season){
		case "winter":
			housingColor = "#64a8d1";
			break;
		case "spring":
			housingColor = "#218359";
			break;
		case "summer":
			housingColor = "#bf7530";
			break;
		case "autumn":
			housingColor = "#ff9840";
			break;
	}
	housing.style.background = housingColor;
}

function designStat(){
	let housing = document.getElementById("housing");
	
	let housingColor = "";
	
	switch(season){
		case "winter":
			housingColor = "#64a8d1";
			break;
		case "spring":
			housingColor = "#218359";
			break;
		case "summer":
			housingColor = "#bf7530";
			break;
		case "autumn":
			housingColor = "#ff9840";
			break;
	}
	housing.style.background = housingColor;
}