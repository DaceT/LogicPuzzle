describe("Check puzzle function", () => {
  test("It should return a score for full points", () => {
    const userSolution = [[0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
    ]

    const solution = [[0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
    ]



    let score = 0;
    for (let x = 0; x < userSolution.length; x++) {
      for (let y = 0; y < userSolution[0].length; y++) {
        if (userSolution[x][y] != solution[x][y]) {
          console.log("Your puzzle is wrong");
          score--;
        }
        score++;
      }
    }


    expect(score).toEqual(36);

  });
});



describe("Check puzzle function", () => {
  test("It should return a score of 0", () => {
    const userSolution = [[0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
    ]

    const solution = []



    let score = 0;
    if(solution.length != 0) {

      for (let x = 0; x < userSolution.length; x++) {
        for (let y = 0; y < userSolution[0].length; y++) {
          if (userSolution[x][y] != solution[x][y]) {
            console.log("Your puzzle is wrong");
            score--;
          }
          score++;
        }
      }
    } 

    expect(score).toEqual(0);

  });
});



describe("Check puzzle function", () => {
  test("It should return a score of 18", () => {
    const userSolution = [[0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
    ]

    const solution = [[0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    ]



    let score = 0;
    if(solution.length != 0) {

      for (let x = 0; x < userSolution.length; x++) {
        for (let y = 0; y < userSolution[0].length; y++) {
          if (userSolution[x][y] != solution[x][y]) {
            console.log("Your puzzle is wrong");
            score--;
          }
          score++;
        }
      }
    } 
    
    expect(score).toEqual(18);

  });
});