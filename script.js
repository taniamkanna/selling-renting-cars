// menu bar

function openMenuBar(){

    menubar=document.getElementById("menu_bar");
    menuIcon=document.getElementById("menu_icon");
    
    if (menuIcon.src.includes("images/icon_exit.png")){

        menubar.style.display="none";
        menuIcon.src="images/menu-bar.png";

    }
    else  
        
    {
        menubar.style.display="flex";
        menuIcon.src="images/icon_exit.png";
    }
}

window.addEventListener("resize", ()=> {
    if (window.innerWidth > 700) {
        menubar.style.display = "none";  
        menuIcon.src = "images/menu-bar.png";  
    }
});

// 



// Selling cars:

fetch('cars_for_sale.json')
    .then(response => response.json())
    .then(buy => {
        data_for_buy=buy;

        const listOfCars=document.getElementById('cars_list');

        data_for_buy.forEach(car=>{
            
            
            const carInfo= `
                <div class="car" >
                    <img class="sale_car_image" src="${car.image}" alt="${car.name}">
                    <div class="row1"> 
                        <div class="car_name">${car.name}</div>
                        <p>${car.year}</p>
                    </div>

                    <div class="descriptions">
                        <div class="description">
                            <img class="icons" src="${car.fuel_type_icon}" alt=${car.fuel_type}>
                            <p>${car.fuel_type}</p>
                        </div>

                        <div class="description">
                            <img class="icons" src="images/icons-speed.png" >
                            <p>${car.speed}</p>
                        </div>
                        
                        <div class="description">
                            <img class="icons" src="images/icons-bodystyle.png">
                            <p>${car.body_style}</p>
                        </div>

                        <div class="description">
                            <img class="icons" src="${car.color_icon}" alt=${car.color}>
                            <p>${car.color}</p>
                        </div>
                        
                    </div>

                    <div class=row3>
                        <div class="car_price">${car.price}</div>
                        <b class="buy_bottom" onclick=buyNow(${car.id})>Buy Now</b>
                    </div>

                </div>
                
            `;
            listOfCars.innerHTML += carInfo;
            
        });
    })


/////////////// 

// open form for selling cars:
function buyNow(id){

    selected_car=data_for_buy.find(car => car.id == id);

    document.getElementById("car_name").innerHTML=selected_car.name;
    document.getElementById("year").innerHTML=selected_car.year;
    document.getElementById("price").innerHTML=selected_car.price;
    document.getElementById("fuel_type").innerHTML=selected_car.fuel_type;
    document.getElementById("bodyStyle").innerHTML=selected_car.body_style;
    document.getElementById("speed").innerHTML=selected_car.speed;
    document.getElementById("color").innerHTML=selected_car.color;

    document.getElementById("car_image").src=selected_car.image;
    document.getElementById("color_icon").src=selected_car.color_icon;
    document.getElementById("fuel_type_icon").src=selected_car.fuel_type_icon;

    form = document.getElementById("preview_form");
    form.style.display = "flex"; 


    transparent_background=document.getElementById("selling_cars");

    transparent_background.style.opacity= 0.3;
    transparent_background.style.pointerEvents= "none";
    transparent_background.style.filter="blur(8px)";

    document.body.style.overflow= "hidden";
    

}
// close form
function closeSellForm(){
    form = document.getElementById("preview_form");
    form.style.display = "none"; 


    selling_cars= document.getElementById("selling_cars");
    selling_cars.style.opacity = 1;
    selling_cars.style.pointerEvents = "auto";
    selling_cars.style.filter = "none";
    document.body.style.overflow = "auto";



}
// spinner
window.addEventListener("load", () => {
    // Simulate loading delay
    setTimeout(() => {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000); // Adjust the time to simulate loading
});

// renting Cars

fetch('cars_for_rent.json')
    .then(response => response.json())
    .then(rent => {

        data_for_rent=rent;
        const listOfCars=document.getElementById('cars_for_rent');

        data_for_rent.forEach(car=>{

            const carInfo= `
               <div class="car">
                    <img class="rent_car_image" src="${car.image}" alt="${car.name}" >

                    <div class="info">
                        
                        <p class="car_name">${car.name}</p>

                        <div class="details">

                            <div class="detail"><img class="icons" src="${car.color_icon}" alt=${car.color}><p>${car.color}</p></div>
                            <div class="detail"><img class="icons" src="images/white-icons-speed.png" ><p>${car.speed}</p></div>
                            <div class="detail"><img class="icons" src="images/white-icons-bodystyle.png"><p>${car.body_style}</p></div>
                            <div class="detail"><img class="icons" src="images/icon-year.png"><p>${car.year}</p></div>

                        </div>
                        <div class="rent">
                            <p class="car_price">$${car.price}<span style=" color:rgb(61, 61, 61);">/Day</span></p>
                            <b class="reserve_btn" onclick=rentNow(${car.id})>Reserve Now </b>
                        </div>
                    
                    </div>
                </div>
                
            `;
            listOfCars.innerHTML += carInfo;
        });
    })



// open form for renting cars:
function rentNow(id){

    selected_car=data_for_rent.find(car => car.id == id);

    document.getElementById("car_name").innerHTML=selected_car.name;
    document.getElementById("year").innerHTML=selected_car.year;
    document.getElementById("price").innerHTML = `$${selected_car.price} /Day`;
    
    document.getElementById("bodyStyle").innerHTML=selected_car.body_style;
    document.getElementById("speed").innerHTML=selected_car.speed;
    document.getElementById("color").innerHTML=selected_car.color;
    document.getElementById("car_image").src=selected_car.image;
    document.getElementById("color_icon").src=selected_car.color_icon;
    

    form = document.getElementById("preview_form");
    form.style.display = "flex"; 


    transparent_background=document.getElementById("rentingCars");

    transparent_background.style.opacity= 0.3;
    transparent_background.style.pointerEvents= "none";
    transparent_background.style.filter="blur(8px)";

    document.body.style.overflow= "hidden";
    

}



// close form:



function closeRentalForm(){

    form = document.getElementById("preview_form");
    form.style.display = "none"; 

    renting_cars= document.getElementById("rentingCars");
    renting_cars.style.opacity = 1;
    renting_cars.style.pointerEvents = "auto";
    renting_cars.style.filter = "none";
    document.body.style.overflow = "auto";
}

//
function handleFormSubmit(event) {

    event.preventDefault();

    calculatePricePerDay();

    setTimeout(() => {

        location.reload();

    }, 2000); // Adjust the timeout as needed

}
// update price:


function calculatePricePerDay(event){

    event.preventDefault();

    pricePricePerDay=parseInt(document.getElementById("price").innerText.replace('/Day', '').replace('$','').trim());
    displayPrice=document.getElementById("displayPrice");

    let fromDateValue=document.getElementById("from_date").value;
    let toDateValue=document.getElementById("to_date").value;

    if( fromDateValue && toDateValue ){

        let from=new Date(fromDateValue);
        let to=new Date(toDateValue);
        let timeDifference=(to-from)/ (1000 * 60 * 60 * 24); 
        timeDifference=Math.ceil( timeDifference )
        if(timeDifference>0){
            
            const totalPrice=timeDifference*pricePricePerDay;
            displayPrice.innerHTML = `Total Price:$${totalPrice}`;
        }
        else{
            displayPrice.innerHTML = "Invalid date range.. Please check the dates.";
        }
    }
    
    
}