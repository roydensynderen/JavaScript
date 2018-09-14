var form = document.formname;

form.addEventListener("submit", function(e) {
  e.preventDefault();
  var output = {};
  output.firstname = this.fName.value;
  output.lastname = this.lName.value;
  output.age = this.age.value;
  output.gender = this.gender.value;
  output.destination = this.destination.value;

  let restriction = [];
  if (this.vege.checked === true) {
    restriction.push("Vegetarian");
  }
  if (this.kosh.checked === true) {
    restriction.push("Kosher");
  }
  if (this.lacfree.checked === true) {
    restriction.push("Lactose Free");
  }

  alert(
    `
    First Name: ${output.firstname}

    Last Name: ${output.lastname}

    Age: ${output.age}

    Gender: ${output.gender}

    Destination: ${output.destination}

    Restriction: ${restriction}

    `
  );
});
