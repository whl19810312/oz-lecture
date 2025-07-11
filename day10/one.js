//후치연산
let increment = 10;
screenLog("1", increment);
increment++;
screenLog("2", increment);
screenLog("3", increment++);
screenLog("4", increment);

let decrement = 10;
screenLog("dec1", decrement);
decrement--;
screenLog("dec3", decrement--);
screenLog("dec4", decrement--);

//전치연산
let incFirst = 10;
screenLog("incFirst 1", incFirst);
++incFirst;
screenLog("incFirst 2", incFirst);
screenLog("incFirst 3", ++incFirst);
screenLog("incFirst 4", incFirst);

let decFirst = 10;
screenLog("decFirst 1", decFirst);
--decFirst;
screenLog("decFirst 2", decFirst);
screenLog("decFirst 3", --decFirst);
screenLog("decFirst 4", decFirst);

//
