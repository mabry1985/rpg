import { calculate } from "./daycalculator.js"
import { userInput } from "./frontend.js"

describe ('Calculator', function() {

  it ('should return a day corresponding to the day of the week', function () {

    expect(calculate("March 1, 1985")).toBe("Wednesday");
  })
})

describe ('User Input', function() {

  it ('should concatenate the output from the user input', function () {

    expect(userInput("March", "1", "1985")).toBe("March 1, 1945");
  })
})
