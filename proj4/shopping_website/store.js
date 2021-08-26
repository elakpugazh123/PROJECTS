//Object Declaration for changing cart information
var products_info = [
{
  prod_name:"ICC WTC FINAL Round Neck Tee | Unisex | Black Gradient",
  price:1500,
  quantity:0,
  common_name:"Round Neck Tee (Black)",
  para:"Own this Gradient Black Round Neck tee that is made of high-grade Polyester material ensuring breathability and silky-smooth comfort. Sublimated design in front with the ICC WTC 2021 logo ensuring you look as cool as you feel cool.",
  src:"01-t_black_.jpg"
},
{
  prod_name:"ICC WTC FINAL relief Round Neck Tee | Unisex | White",
  price:900,
  quantity:0,
  common_name:"Round Neck Tee (white)",
  para:"Own this White Round Neck tee that is made of high-grade Poly-Cotton dry fit material ensuring breathability and quick-dry properties. Heat-transferred design in front gives you a fashionable look.",
  src:"Solidarity-Tshirt-Men.jpg"
},
{
  prod_name:"ICC WTC FINAL Round Neck Tee | Unisex | Blue | Team India",
  price:1500,
  quantity:0,
  common_name:"Round Neck Tee (Blue)",
  para:"Own this Blue Round Neck tee that is made of high-grade Polyester material ensuring breathability and silky-smooth comfort. Sublimated design in front with the BCCI India logo and ICC WTC 2021 logo gives a cool, trendy look to you while wearing it. ",
  src:"t-ind_2.jpg"
},
{
  prod_name:"ICC WTC FINAL relief Round Neck Tee | Women | White ",
  price:900,
  quantity:0,
  common_name:"Round Neck Tee (Womens)",
  para:"Own this White Round Neck tee that is made of high-grade Poly-Cotton dry fit material ensuring breathability and quick-dry properties. Heat-transferred design in front gives you a fashionable look.",
  src:"Womens-Solidarity-T-Shirt.jpg"
},
// 05
{
  prod_name:"ICC WTC FINAL Polo | Unisex | Retro Blue | Team India",
  price:2000,
  quantity:0,
  common_name:"Polo T-shirt (Blue)",
  para:"Own this Retro Blue Polo that is made of high-grade 100% Cotton material ensuring sweat is absorbed and ensures plain comfort. Spruce up the style quotient with this royal colour choice. ",
  src:"Polo-Blue_India_.jpg"
},
{
  prod_name:"ICC WTC FINAL Polo | Unisex | Black | Team New Zealand",
  price:2000,
  quantity:0,
  common_name:"Polo T-shirt (Black)",
  para:"Own this Black Polo that is made of high-grade 100% Cotton material ensuring sweat is absorbed and ensures plain comfort. Crisp and tidy look that goes well with any combination of lowers that you may choose.",
  src:"Polo-Black_NZ_03.jpg"
},
{
  prod_name:"ICC WTC FINAL Polo | Unisex | White – Team India",
  price:1250,
  quantity:0,
  common_name:"Polo T-shirt (white_India)",
  para:"Own this White Polo that is made of high-grade 100% Cotton material ensuring sweat is absorbed and ensures plain comfort. Look smart and tidy with this classic colour and logo combination.",
  src:"Polo-White_India_.jpg"
},
{
  prod_name:"ICC WTC FINAL Polo Relief Tee | Women’s | White",
  price:1150,
  quantity:0,
  common_name:"Polo T-shirt (Women's)",
  para:"Own this White Polo that is made of high-grade 100% Cotton material ensuring sweat is absorbed and ensures plain comfort. Look smart and tidy with this classic colour and logo combination.",
  src:"Polo_women_tshirt-.jpg"
},
{
  prod_name:"ICC WTC FINAL COVID-19 relief Polo | Unisex | White",
  price:1000,
  quantity:0,
  common_name:"Covid Relief Tee",
  para:"Own this White Polo that is made of high-grade 100% Cotton material ensuring sweat is absorbed and ensures plain comfort. Look smart and tidy with this classic colour and logo combination",
  src:"Solidarity-Polo.jpg"
},
// 10
{
  prod_name:"ICC WTC FINAL Hoodie | Unisex | Retro Blue",
  price:3500,
  quantity:0,
  common_name:"Blue Hoodie",
  para:"Own this Retro Blue Hoodie that is made of high-grade 100% Cotton Combed Fleece material ensuring heat retention and snuggly comfort. Embroidered logo on the chest and Heat-transferred design on the sleeves make the hoodie look and feel sleek. ",
  src:"Hoodie-Blue.jpg"
},
{
  prod_name:"ICC WTC FINAL Hoodie – Unisex | Heather Grey",
  price:3500,
  quantity:0,
  common_name:"Grey Hoodie",
  para:"Own this Heather Grey Hoodie that is made of high-grade 100% Cotton Combed Fleece material ensuring heat retention and snuggly comfort. Embroidered logo on the chest and Heat-transferred design on the sleeves make the hoodie look and feel sleek. ",
  src:"Hoodie-Grey_2.jpg"
},
//12
{
  prod_name:"ICC WTC FINAL Bottle | Black",
  price:700,
  quantity:0,
  common_name:"Special Bottle (Black)",
  para:"Black Metal Bottle with a curved shoulder design. Carry easily with the multi-purpose cap. Smooth finish on the outside and stylish imprint of the logo to enhance the overall look. ",
  src:"16-Sipper-3.jpg"
},
{
  prod_name:"ICC WTC FINAL Face Mask | Grey",
  price:300,
  quantity:0,
  common_name:"Face Mask (Grey)",
  para:"Protect yourself with these high-quality, reusable face masks. Lightweight and dries quickly after a wash. Maintain the style quotient while keeping the germs away. Grey colour logo to help you make a fashion statement. ",
  src:"18-Mask_2-2.jpg"
},
{
  prod_name:"ICC WTC FINAL Hat | White",
  price:700,
  quantity:0,
  common_name:"White Umpire Hat",
  para:"White Hat made of Cotton fabric ensuring sweat absorption & breathability. Embroidered & Heat-transferred logos on the front and side make this a stylish choice to protect yourself from the sun and look dapper at the same time. ",
  src:"Umpire-Hat_2.jpg"
},
{
  prod_name:"ICC WTC FINAL Cap | Unisex | Retro Blue",
  price:600,
  quantity:0,
  common_name:"Retro Blue Indian Cap",
  para:"Own this Retro Blue Cap that is made of Cotton Twill fabric material ensuring sweat absorption & breathability. Embroidered & Heat-transferred logos on the front and side make this a stylish choice to protect yourself from the sun and look dapper at the same time. ",
  src:"Cap-Blue_2.jpg"
},
{
  prod_name:"ICC WTC FINAL Metallic Fridge Magnet | Black",
  price:500,
  quantity:0,
  common_name:"Fridge Magnet(Non-Metallic)",
  para:"Black Lapel Pin made of durable and high-quality metal. Add a stylish accessory to enhance the richness of your overall look with these classy lapel pins which come with the ICC WTC 2021 logos pasted on them. ",
  src:"20-Fridge-Magnet-.jpg"
},
{
  prod_name:"ICC WTC FINAL Fridge Magnet | Black",
  price:300,
  quantity:0,
  common_name:"Fridge Magnet(Metallic)",
  para:"Metal Fridge Magnet to take back as a memorabilia. Stylish souvenir that you can collect to engrave this historic series in your memories forever.  ",
  src:"19-Fridge-Magnet.jpg"
}
];
var num=0,cart_qty,total=0,cart_remove,cart_pdt_container,cart_quantity,qty_up_i,qty_down_i,bill_details_user="notdone";
//Cart Indicator
cart_items_container=document.querySelector(".tot-cart-items");
//1st Page add to cart functionality
//Add to cart button
add_to_button=document.querySelectorAll(".add_to");
//For each Function to iterate over array of objects
add_to_button.forEach(index_iterate)
//Finding which element got clicked and padding it with value,index
function index_iterate(item,index)
{
  item.addEventListener('click',function()
{
  disp(index);
});
}
//Add addEventListener calls below fn
var cart_order = [];
var cart_pop=document.querySelector(".cart_pop");
var cart_added_msg = document.querySelector(".cart_added_msg");
var sub_total = document.getElementById("sub_total");
var page_1=document.querySelector(".page-1");
var shop_cart_disp = document.querySelector(".shopping_cart_container");
var cart_icon = document.getElementById("cart_icon");
var close_cart = document.getElementById("close_cart");
var cart_empty_shop = document.getElementById("cart_empty_shop");
//When u click add to cart button these changes are
function disp(index)
{

    num++;
    cart_items_container.innerHTML=num;
    products_info[index].quantity++;
    total+=products_info[index].price;
    if(products_info[index].quantity==1)
    {
      cart_order.push(index);
      cart_pop.innerHTML+=`
      <div class="cart_pdt_container">
        <div class="cart_pdt_info_cont">
             <div class="cart_pdt_info">
                    <p class="cart_pdt_name">${products_info[index].prod_name}</p>
                    <p class="cart_pdt_price">₹${products_info[index].price}</p>
                    <div class="cart_qty">
                       <span>Quantity : </span>

                       <div class="inp_qty">
                           <span><i class="fas fa-plus-circle" onclick="qty_up(${index})" id="qty_up_${index}"></i></span>
                           <input class="cart_quantity" type="number" readonly="value" max="6" value=${products_info[index].quantity} id="quan_${index}">
                           <span><i class="fas fa-minus-circle" onclick="qty_down(${index})" id="qty_down_${index}"></i></span>
                       </div>
                    </div>
             </div>
             <div class="cart_pdt_img_cont">
                  <div class="cart_img">
                     <img src="${products_info[index].src}" alt="">
                  </div>
             </div>

        </div>
        <div class="cart_remove_cont">
              <button type="button" name="button" class="cart_remove" onclick="cart_remove_1(${index})">Remove</button>
        </div>

      </div>`;
    }

     cart_qty=document.querySelectorAll(".cart_qty input");
    for(i=0;i<cart_order.length;i++)
    {
    if(index==cart_order[i])
    {
    cart_qty[i].defaultValue = products_info[index].quantity;
    }


    }
    cart_added_msg.style.display="inline";
    sub_total.innerHTML=total;
    setTimeout(function(){
    cart_added_msg.style.display="none";
  }, 1500);
  cart_remove = document.querySelectorAll(".cart_remove");
  }
// Cart_disp Ends(the above is when user clicks add to cart in 1st pages)

//Page-2 Removing Unwanted products from users list
  //Cart Remove Function
 var cart_pdt_container = document.querySelectorAll(".cart_pdt_container");
  function cart_remove_1(index)
  {
    cart_remove = document.querySelectorAll(".cart_remove");
   cart_pdt_container = document.querySelectorAll(".cart_pdt_container");
    for(i=0;i<cart_order.length;i++)
    {
      if(index==cart_order[i])
      {
       cart_order.splice(i,1);
       cart_pdt_container[i].remove();
       total-=(products_info[index].price*products_info[index].quantity);
       num-=products_info[index].quantity;
       products_info[index].quantity=0;
       sub_total.innerHTML=total;
       cart_items_container.innerHTML=num;
      }
    }
    if(cart_order.length==0)
    {
      shop_cart_disp.style.display="none";
      page_03_cart.style.display="flex";
    }

  }
//Cart Remove End

// Quantity Up
var limit_add = document.querySelector(".limit_add");
function qty_up(index)
{
for(i=0;i<cart_order.length;i++)
{
  if(cart_order[i]===index)
  {
    // changing orig value
    if(products_info[index].quantity<10)
    {
      products_info[index].quantity+=1;
      cart_qty[i].defaultValue=products_info[index].quantity;
      num++;
      cart_items_container.innerHTML=num;
     total+=products_info[index].price;
      sub_total.innerHTML=total;
    }
    else
    {
      limit_add.style.display="inline";
      setTimeout(function(){
      limit_add.style.display="none";
    }, 1500);

    }

  }
}
}
// Quantitry Down
function qty_down(index)
{
for(i=0;i<cart_order.length;i++)
{
  if(cart_order[i]===index)
  {
    // changing orig value
    if(products_info[index].quantity>=1)
    {
      products_info[index].quantity-=1;
      cart_qty[i].defaultValue=products_info[index].quantity;
      num--;
      cart_items_container.innerHTML=num;
      total-=products_info[index].price;
      sub_total.innerHTML=total;
      // If product quantity goes to zero then remove it
      if(products_info[index].quantity==0)
      {
        cart_remove_1(index);
      }

    }
  }
}
}
// Quantity End

// Cart Icon touch on page 2
cart_icon.addEventListener('click',function()
{
page_2();
});

var page_03_cart = document.querySelector(".page_03_cart");
function page_2()
{
  page_1.style.display="none";
  if(cart_order.length>=1)
  {
    shop_cart_disp.style.display="block";
  }
 else
 {
   page_03_cart.style.display="flex";
 }

}

// Bill Show when check out clicked (bill-display and cart-none)
function checkout()
{
  shop_cart_disp.style.display="none";
  if(bill_details_user=="notdone")
  {
      document.querySelector(".page_bill").style.display="flex";
  }
  else
  {
    bill_verified(0);
    console.log("bill Verified");
  }

}

//Pop ups of cart

//Pop_of returns to first page to continue shopping (empty page button)
function pop_of()
{
    shop_cart_disp.style.display="none";
  page_03_cart.style.display="none";
  page_1.style.display="block";
}

// Quick View
var page_quick_view=document.querySelector(".quick_view_cont");
function quick_view(index)
{
  // page_1.style.display="none";
  page_quick_view.style.display="flex";
  document.getElementById("quick_view_img").src=`${products_info[index].src}`;
  document.getElementById("quick_view_price").innerHTML="$"+products_info[index].price
  document.getElementById("quick_view_name").innerHTML=products_info[index].prod_name;
  document.getElementById("quick_view_para").innerHTML=products_info[index].para;

}
function close_quick_view()
{
page_quick_view.style.display="none";
}
//Bill bill_verified
var first_name_inp = document.getElementById("first_name");
var last_name_inp = document.getElementById("last_name");
var address_inp = document.getElementById("address");
var country_inp = document.getElementById("country");
var state_inp = document.getElementById("state");
var email_inp = document.getElementById("email");
var phone_inp = document.getElementById("phone");

// Touching previous Button of Bill page
// Bill Previous
function bill_prev()
{
  document.querySelector(".page_bill").style.display="none";
  shop_cart_disp.style.display="block";
}
// Next page variable
var payment_div = document.querySelector(".payment_div");
var first_name,last_name,address,country,state,email,phone;
var address_content = document.querySelector(".address_content");
var order_product_add = document.querySelector(".order_product_add");
function bill_verified(who_calls)
{
  if(who_calls==1)
  {
    first_name=first_name_inp.value;
    last_name=last_name_inp.value;
    address=address_inp.value;
    country=country_inp.value;
    state=state_inp.value;
    email=email_inp.value;
    phone=  phone_inp.value

    first_name_inp.value="";
    last_name_inp.value="";
    address_inp.value="";
    country_inp.value="";
    state_inp.value="";
    email_inp.value="";
    phone_inp.value="";
  }



  payment_div.style.display="block";
  //Changing details in Paymentpage
 address_content.innerHTML=`<p>${first_name +" "+ last_name}</p>
 <p>${address}</p>
 <p>${state},${country}</p>`;
 order_product_add.innerHTML="";
 for(i=0;i<cart_order.length;i++)
 {
   for(j=0;j<17;j++)
   {
     if(cart_order[i]==j)
     {
       order_product_add.innerHTML+=`<div class="order_product_container">
         <div class="order_product">
           <div class="order_product_image">
             <img src="${products_info[j].src}" alt="">
             <span><i class="fas fa-times"></i> </span>
             <span  class="order_product_qty">${products_info[j].quantity}</span>
           </div>
           <div class="order_product_content">
             <p>${products_info[j].common_name}</p>
             <p style="font-family: 'Josefin Sans', sans-serif;" class="order_product_price">₹${products_info[j].price * products_info[j].quantity}
             </p>
           </div>
         </div>
       </div>`;
     }
   }

 }
 bill_details_user="done";
 document.querySelector(".payment_total_price").innerHTML="₹"+total;
  // Disabling Bill Page
  document.querySelector(".page_bill").style.display="none";
}
// Edit Address
function edit_address()
{
  // Disable Payment Details and Enable Billing det
  payment_div.style.display="none";
    document.querySelector(".page_bill").style.display="flex";
}
//Edit Order
function edit_order()
{
  //Disable Payment page and Enabling Cart Page
    payment_div.style.display="none";
    shop_cart_disp.style.display="block";
}

var payment_success_page = document.querySelector(".payment_done_pop");
function payment_success()
{
  payment_success_page.style.display="flex";
  payment_div.style.display="none";
}

function load_new()
{

  window.location.href="store_front.html";
}
