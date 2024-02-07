// function store(){
//    const Cars={
//     brand:brand.value,
//     price:price.value,
//     key:key.value
//    }
//    if (Cars.brand==""||Cars.price==""||Cars.key==""){
//     alert("All fields are required")
//    }
//    else{
//     localStorage.setItem(Cars.key,JSON.stringify(Cars));
//             alert('Record added Successfully')
//    }
// }
function add_car(){
//    alert("not found")
    const cars={
        brand:brand.value,
        price:price.value,
        key:key1.value

    }

    if(cars.brand=="" || cars.price=="" || cars.key==""){
        alert("All fields are required");
    }else {
        localStorage.setItem(cars.key,JSON.stringify(cars));
        alert('Record added Successfully')


}

}

function get_car(){

            
    var item = key2.value;
    console.log(item);
    if (item in localStorage){
        se =localStorage.getItem(item)
        console.log(se);
        car = JSON.parse(se)

        result.innerHTML =`<div class="card" style="width: 18rem;">

<ul class="list-group list-group-flush">
<li class="list-group-item">Brand:${car.brand}</li>
<li class="list-group-item">Price: ${car.price}</li>
<li class="list-group-item">key: ${car.key}</li>

</ul>
</div>`
    }
    else{
        alert( "No Details Found");
    }




}

function delete_car(){

    var item = key3.value
    console.log(item);
        if (item in localStorage){
            localStorage.removeItem(item)
            alert("Deleted Successfully")
        }
        else{
            alert('Key not found')

        }




}