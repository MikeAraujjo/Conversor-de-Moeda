function result() {
    let real = document.getElementById("real").value;
    let moeda = document.getElementById("moeda").value;
    let convert = (real / moeda);

    if (real === "") {
        document.getElementById("Resultado").innerHTML = "Insira informações validas";
    } else {
        document.getElementById("Resultado").innerHTML = "Seu valor é de " + convert.toFixed(2);
    }
}
