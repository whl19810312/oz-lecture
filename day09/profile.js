      // var, let, const 실습
      var name = "oz";
      var name = "oz2";

      // 변수
      let age = 25;
      //   let age = 30;
      age = 30;
      age = 32;
      age = 40;

      // 상수
      const pi = 3.14;
      //   pi = 3.2; // 재할당 안됨

      const profile = { name: "yujun" }; // 객체 Object
      //   profile = 23; // 재할당 안됨
      // profile = {name: "taem"} // 재할당안됨
      profile.name = "taem";

      // string 문자열
      let string1 = "작은따옴표(')가 포함됩니다.";
      let string2 = '큰따옴표(")가 포함됩니다.';
      //   console.log("string1", string1);
      //   console.log("string2", string2);

      // string 문자열 연결
      let stringA = "문자열" + " 연결";
      let stringB = string1 + " " + string2;
      console.log("stringA", stringA);
      console.log("stringB", stringB);

      // ES6 문자열 (백틱)
      let myName = "taem";
      let oldString = "나의 이름은 " + myName + "입니다.";
      let es6String = `나의 이름은 ${myName}입니다.`;
      console.log(oldString);
      console.log(es6String);

      // 숫자형
      // 숫자 - 정수
      let num1 = 1;
      let num2 = 2;
      console.log("num1 + num2:", num1 + num2);

      // 숫자 - 실수
      let float1 = 0.1;
      let float2 = 1.1;
      console.log("float1 + float2:", float1 + float2);

      // 논리형
      let boolean1 = true;
      let boolean2 = false;
      let boolean3 = 10 < 20;
      let boolean4 = 10 > 20;
      console.log("boolean1", boolean1);
      console.log("boolean2", boolean2);
      console.log("boolean3", boolean3);
      console.log("boolean4", boolean4);

      // 객체
      // 배열
      let studentScore = [80, 70, 90, 60, 20];
      let emptyScore = []; // 빈 배열
      console.log(studentScore);
      console.log("studentScore[0]", studentScore[0]);
      console.log("studentScore[1]", studentScore[1]);
      console.log("studentScore[2]", studentScore[2]);
      console.log("studentScore[3]", studentScore[3]);
      console.log("studentScore.length", studentScore.length);
      console.log("emptyScore.length", emptyScore.length);

      // 객체 리터럴 Object
      let studentScoreObj = {
        koreanScore: 80, // koreanScore라는 key가 80이라는 value를 가진 attribute(속성)이 있다.
        englishScore: 70,
        mathScore: 90,
        scienceScore: 60,
      };
      console.log("studentScoreObj.koreanScore", studentScoreObj.koreanScore);
      console.log(
        "studentScoreObj['koreanScore']",
        studentScoreObj["koreanScore"]
      );

      console.log(typeof es6String);
      console.log(typeof float1);
      console.log(typeof boolean1);
      console.log(typeof studentScoreObj);

      const Head = document.getElementById("Head");
      const Head_explan = document.getElementById("Head_explan");
      const My1 = document.getElementById("My1");
      const My1_explan = document.getElementById("My1_explan");
      const My2 = document.getElementById("My2");
      const My2_explan = document.getElementById("My2_explan");

      Head.textContent = "WON HO LEE Portfolio"; 
      Head_explan.textContent = "Exploring faith through words and truth.";
     
      My1.textContent = "The Bible System (English)";
      My1_explan.textContent = "A deep theological exploration of union with God, obedience, and the true meaning of the Kingdom. \
              This book invites readers to a personal journey of faith, rooted in the Word and the Spirit.";
      My2.textContent = "The Bible System (Korean)";
      My2_explan.textContent = "하나님과의 연합, 믿음, 순종, 하나님의 나라를 중심으로 구성된 신학적 고백서. \
              말씀의 원리에 따라 구성된 이 책은 독자를 생명의 길로 이끕니다.";
              
