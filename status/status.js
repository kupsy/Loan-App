function know() {
    let qualify = document.getElementById('salary').value
    document.getElementById('answer').innerHTML = qualify



if (qualify <= 20000 ){
    document.getElementById('answer').innerHTML =alert("You do not qualify for the loan")
}

else {
    let a = prompt('How much loan do you want?')
    document.getElementById('answer').innerHTML =alert("Congratulations you qualify for the loan of" +" " + a * 10)

}
}