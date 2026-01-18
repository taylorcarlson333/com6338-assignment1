function greet() {
    let name = window.prompt("What is your name?");
    window.alert("Hello, " + name + "!");
    let age = window.prompt("How old are you?");
    age = parseInt(age);
    const currentYear = new Date("2026-01-14T15:15:30");
    const fullYear = currentYear.getFullYear();
    let yearBorn = 0;
    if (window.confirm("Have you had a birthday yet this year?")) {
        yearBorn = fullYear - age;
    } else {
        yearBorn = fullYear - age - 1;
    }
  window.alert("You were born in " + yearBorn + "!");
}