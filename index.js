function scuberGreetingForFeet(ride) {
  // Write your code here!
  let fee = 0;
  if (ride <= 400) {
    return "This one is on me!";
  } else if (ride >= 400 && ride <= 2000) {
    fee += 20;
    return "That will be twenty bucks.";
  } else if (ride > 2000 && ride <= 2500) {
    fee += 30;
    return "I will gladly take your thirty bucks.";
  } else if (ride > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  if (city === "NYC") {
    return "Ok, sounds good.";
  } else if (city !== "NYC") {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";

    case "not as generous":
      return "Thank you.";

    default:
      return "Bye.";
      break;
  }
}
