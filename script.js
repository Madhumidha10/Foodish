


//Array of url string based on Dishes

var url=[`https://foodish-api.herokuapp.com/api/`
,`https://foodish-api.herokuapp.com/api/images/biryani`
,`https://foodish-api.herokuapp.com/api/images/burger/`
,`https://foodish-api.herokuapp.com/api/images/butter-chicken/`
,`https://foodish-api.herokuapp.com/api/images/dessert/`
,`https://foodish-api.herokuapp.com/api/images/dosa/`
,`https://foodish-api.herokuapp.com/api/images/idly/`
,`https://foodish-api.herokuapp.com/api/images/pasta/`
,`https://foodish-api.herokuapp.com/api/images/pizza/`
,`https://foodish-api.herokuapp.com/api/images/rice/`
,`https://foodish-api.herokuapp.com/api/images/samosa/`];
//
//check already localstorage created
if(!localStorage.getItem("Id"))
{
    get_food(url[0]);//view all food
}
else{
 
       get_food(url[localStorage.getItem("Id")]);//view selected food category
       
}
// var img_size=[572,81,87,22,36,83,77,34,95,35,22];
function display_dishes()
{  
    //get input text of dihes

    var food=document.getElementById('food');

    if(food.value!="")
    {
        var datalist = document.getElementById ("dishes");
        var input = document.getElementById ("input");
//get selected food id
    for (var i=0; i<document.getElementById('dishes').options.length; i++) {
     if (document.getElementById('dishes').options[i].value == food.value)
     {
        var id = document.getElementById('dishes').options[i].getAttribute('id');
        localStorage.setItem("Id",id);
        
        break;
     }
    }
    //set default load gif for all cards
    for(let i=0;i<8;i++)
    {   
    
     var card=document.getElementById(`card${i+1}`);
     var img=card.querySelector('img');
    
     img.src="images/load.gif";
    }
    //call async function for load image based on food category
    get_food(url[id]);
    }
    else{
        alert("Please select valid dish");
        food.focus();

    }
 


}

async function get_food(urlpath)
{
    try {
  
            for(let i=0;i<8;i++)
            {   
                
                var data=await fetch(urlpath);
                var dishes=await data.json();
                var card=document.getElementById(`card${i+1}`);
                var img=card.querySelector('img'); 
                img.src=dishes.image;
                var dish=card.querySelector('.card-body');
                dish.classList.add('text-center');
                dish.innerHTML=`<b>Dish name</b><br>$5-$20 
                <br><div> <i class="fa fa-star"></i>   
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                 <i class="fa fa-star-o"></i>
                 </div>`;

            }
           
        
    } catch (error) {
        alert(error.message);
    }
   

}







