var bottle = {
    color: "green",
    isLongBottle: false,
    quantity: 1,
    write: function() {
        console.log("There is " + this.quantity + " " + this.color + " bottle on the table" + ".");
    }
}

bottle.write();
