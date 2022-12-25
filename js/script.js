function display(cityName) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=a57ff31813aadd18480feae635befdc5&units=metric&lang=tr";

    $.get(url, function (data) {
        let sicaklik = data.main.temp;
        let yer = data.name;
        let aciklama = data.weather[0].description;
        let ikon = data.weather[0].icon;
        let bugun = new Date();
        let ay = bugun.toLocaleDateString("tr", { month: 'short' });
        let gun = bugun.getDate();
        $("#temp").text(parseInt(sicaklik) + "°");
        $("#place").text(yer);
        $("#desc").text(aciklama);
        $("#date").text(gun + " " + ay);
        $("#icon").attr("src", "http://openweathermap.org/img/wn/" + ikon + "@2x.png");
        $("#icon").attr("alt", aciklama);
    });
}

$("#frmSearch").submit(function (e) {
    e.preventDefault();
    display($("#search").val());
});

display("ankara");