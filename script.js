
  let cars = [
    {
      image: "section/car 1.jpg",
      name: "Lamborghini Huracan",
      price: "$260,000",
      details: "Color: Lime-Green<br>Engine: 5.2 L odd-firing V10 <br>Kerb weight: : 1,422 kg (3,135 lb) <br>Transmission: 7-speed dual-clutch",
      sec_link: "landing.html#inform"
    },
    {
      image: "Cars/Bugatti.jpg",
      name: "Bugatti Divo",
      price: "$5.8 million",
      details: " Engine - 8,0 l W16 <br>Power	1,479 hp @ 6,900rpm 1,103 kW<br>Torque	1,180 lb·ft @ 2,000 – 6,000 rpm (1,600 N·m) <br>Induction	Turbocharged",
      sec_link: "landing.html#inform2"

    },
    {
      image: "Cars/Vodo.jpg",
      name: "Ferrari 250 SWB",
      price: "$950,000",
      details: "Up until now, the project had been codenamed ‘Moderna’, but GTO Engineering has seen fit to ditch the pun and christen the creation Squalo because of its 'shark-like look, instincts and speed'.",
      sec_link: "landing.html#inform3"

    },
    {
      image: "Cars/smallpic.jpg",
      name: "2021 Mercedes-Benz",
      price: "$130,700",
      details: "The 2021 Mercedes-Benz E-Class comes with rear wheel drive, and all wheel drive.<br>Horsepower	523 hp <br>MPG	15/20 mpg<br><br>",
      sec_link: "landing.html#inform4"

    },
    {
      image: "Cars/lambor.jpg",
      name: "Toyota SUV Tacoma Custom",
      price: "$30,000",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing architecto, fugit suscipit odio itaque veritatis expedita exercitationem corporis!",
      sec_link: "landing.html#inform5"

     
    },
    {
      image: "Cars/redcar.jpg",
      name: "Ferrari 599 gto",
      price: "$410,000",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi, quam dolorem voluptatum adipisci dignissimos ipsum, architecto, fugit suscipit odio itaque fuga. Animi, quam dolorem voluptatum adipisci",
      sec_link: "landing.html#inform6"


    },
    {
      image: "Cars/bluehit.jpg",
      name: "Lamborghini Huracan STO",
      price: "$245,000",
      details: "Engine: 5.2 L odd-firing V10 <br>Kerb weight: : 1,422 kg (3,135 lb) <br>Transmission: 7-speed dual-clutch<br><br>",
      sec_link: "landing.html#inform7"


    },
    {
      image: "Cars/2022-91000.png",
      name: "2022 Tesla Model S",
      price: "$97,000",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Atis expedita exercitationem corporis! Est odio quo possimus corporis fuga. ",
      sec_link: "landing.html#inform8"

     
    },
    {
      image: "Cars/chiron3.5.jpg",
      name: "Bugatti Chiron",
      price: "$3.5 million",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi, fuga. Animi, quam dolorem voluptatum adipisci dignissimos ipsum, architecto, fugit",
      sec_link: "landing.html#inform9"


    },
    {
      image: "Cars/lamcar.jpg",
      name: "Lamborghini Aventador 2022",
      price: "$3.5 million",
      details: "With a raucous 769-hp V-12 engine and an exotic exterior, the 2022 Lamborghini Aventador is the definition of a hyper car. While competitors such as the Ferrari SF90 embrace an electrified future",
      sec_link: "landing.html#inform10"

    },
    {
      image: "Cars/Aventdor36.jpg",
      name: "Lamborghini Aventador SV 2016",
      price: "$490,000",
      details: "It packs a 6.5-liter V-12 that produces 740 hp. Power is sent to all four wheels via a seven-speed automated manual gearbox.",
      sec_link: "landing.html#inform11"

    },
    {
      image: "Cars/niceone.jpg",
      name: "Bugatti chiron 2021",
      price: "$2.9 million",
      details: "It's powered by a massive 16-cylinder engine that is a marvel of modern engineering, capable of propelling this hypercar to 300 mph and beyond.",
      sec_link: "landing.html#inform12"

    }

  ]

    let html = ``;
    var section = document.getElementById("sect")
  var mylink = document.getElementById("link");
 
  var myimg = document.getElementById("img");
  var carName = document.getElementById("carname");
  var carPrice = document.getElementById("carprice");
  var carDetails = document.getElementById("cardet");
  for(let i = 0; i < 12; i++){
    html += `
    <section id="sect" class="sec">
      <div  class="display">
        <a id="link" href="${cars[i].image}"><img id="img" src="${cars[i].image}" alt=""></a>
      <div class="info"><span  id="carname"  class="car-name">${cars[i].name}</span> </div>
      <div class="info2"><span id="carprice" class="car-price">${cars[i].price}</span></div>
      <div class="info3"><p id="cardet" class="car-details">${cars[i].details}</p></div>
      <div class="d-grid gap-2">
      <button style="color: red;" class="btn" type="button"><a style="color: red;" href="${cars[i].sec_link}"><b style="color: red;">Buy Now</b></a></button>
      </div>

      </div>
   </section>   `
 

   section.innerHTML = html
  }
