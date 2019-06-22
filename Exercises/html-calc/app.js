document.add.addEventListener("submit", function(e) {
    e.preventDefault();

    var newadd1 = document.add.add1.value;
    var newadd2 = document.add.add2.value;
    alert(Number(newadd1) + Number(newadd2));
});

document.subtract.addEventListener("submit", function(e) {
    e.preventDefault();

    var newsub1 = document.subtract.sub1.value;
    var newsub2 = document.subtract.sub2.value;
    alert(Number(newsub1) - Number(newsub2));
});

document.multiply.addEventListener("submit", function(e) {
    e.preventDefault();

    var newmul1 = document.multiply.mul1.value;
    var newmul2 = document.multiply.mul2.value;
    alert(Number(newmul1) * Number(newmul2));
})