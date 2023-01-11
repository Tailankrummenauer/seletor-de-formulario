function showInfo(){
var name = document.querySelector("input[name='name']").value
var favoriteColor = document.querySelector("select[name='color'] option:checked").text //pega o conteudo que ta dentro da tag option
var likeProgram = document.querySelector("input[name='like-programming']:checked").value
var developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
var optionsValue = []
developerOptions.forEach(element => {optionsValue.push(element.value)})
var optionsChecked = optionsValue.join(", ")
alert("Nome: " +name + "\nCor primária: " + favoriteColor+ "\nGosta de programar? "+likeProgram+
                    "Conhecimentos em programação web: " +optionsChecked)


}