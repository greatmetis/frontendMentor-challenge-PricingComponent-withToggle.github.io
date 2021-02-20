
const checkBox = $("#switch")
const priceM = $(".price-monthly")
const priceA = $(".price-annually")

function changePrice(){
    if(checkBox.is(':checked')){
        priceM.show()
        priceA.hide()
    }else{
        priceM.hide()
        priceA.show()
    }
}



