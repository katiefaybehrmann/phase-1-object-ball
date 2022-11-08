function gameObject(){
    const obj = {
        "home": {
            "teamName": "Brooklyn Nets", 
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee":{
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        "away": {
            "teamName": "Charlotte Hornets", 
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrienn": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon":{
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals":22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
}

function numPointsScored(name) {
    let points;
    for (let x in gameObject()) {
      for (let y in gameObject()[x]) {
        for (let z in gameObject()[x][y]) {
          if (z === name) {
            points = gameObject()[x][y][z]["points"];
          }
        }
      }
    }
    return points;
  }
  
  function shoeSize(name) {
    let size;
    for (let x in gameObject()) {
      for (let y in gameObject()[x]) {
        for (let z in gameObject()[x][y]) {
          if (z === name) {
            size = gameObject()[x][y][z]["shoe"];
          }
        }
      }
    }
    return size;
  }

  function teamColors(name) {
    let colors;
    for (let x in gameObject()) {
      for (let y in gameObject()[x]) {
        if(gameObject()[x][y] === name){
          colors = gameObject()[x]["colors"]
        }
      }
    }
    return colors.toString();
  }

  function teamNames(){
    const array = [];
    for (let x in gameObject()){
      array.push(gameObject()[x]["teamName"])
    }
    return array;
  }

  function playerNumbers(teemNeem){
    let array = [];
      for (let x in gameObject()) {
        for (let y in gameObject()[x]) {
          if(gameObject()[x][y] === teemNeem){
            for (let z in gameObject()[x]["players"])
            array.push(gameObject()[x]["players"][z]["number"])
          }
        }
      }
    return array;
  }

  function playerStats(name) {
    let status ={};
    for (let x in gameObject()) {
      for (let y in gameObject()[x]) {
        for (let z in gameObject()[x][y]) {
          if (z === name) {
            status = {...gameObject()[x][y][z]};
          }
        }
      }
    }
    return status;
  }

  function bigShoeRebounds() {
    let shoobie;
    for (let x in gameObject()) {
      for (let y in gameObject()[x]) {
        if (y = "players") {
          for (let z in gameObject()[x][y]) {
            if (gameObject()[x][y][z]["shoe"] > 18){
              shoobie = (gameObject()[x][y][z]["rebounds"])
            }
          }
        }
      }
    }
    return shoobie;
  }

  function mostPointsScored() {
    let counter = 0;
    let players;
    let mvp;
  
    for (let x in gameObject()) {
      players = (gameObject()[x]["players"])
  }
    for(let y in players){
      if (players[y]["points"] > counter){
        counter = players[y]["points"]
        console.log(counter)
        mvp = y
      }
    }
    return mvp;
  }
  
  
