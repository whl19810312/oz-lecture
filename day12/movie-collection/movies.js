// movies.js


// 기본 변수 선언: 영화 배열과 기본값들
let movies = []; // 영화 정보를 저장하는 배열
const defaultGenre = "Unknown"; // 기본 장르 값

// 영화 객체 생성 (하드코딩)
// var, let, const를 각각 사용
var movie1 = { title: "The Matrix", director: "Wachowskis", year: 1999, genre: "Sci-Fi" };
let movie2 = { title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" };
const movie3 = { title: "Parasite", director: "Bong", year: 2019, genre: "Drama" };

// 배열에 영화 객체 추가
movies.push(movie1, movie2, movie3);

// 함수 선언문: 영화 목록 출력 함수
function printMovies(movieList) {
  screenLog("Movie Collection:");

  // for 반복문을 사용하여 영화 정보 출력 (번호 포함)
  for (let i = 0; i < movieList.length; i++) {
    let movie = movieList[i];

    // 빈 속성이 있을 경우 기본값 지정
    if (!movie.title) movie.title = "Unknown";
    if (!movie.director) movie.director = "Unknown";
    if (!movie.year) movie.year = "Unknown";
    if (!movie.genre) movie.genre = defaultGenre;
    
    screenLog(`${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre}`);
  }
  screenLog(`Total Movies: ${movieList.length}\n`);
}

// 기본 영화 목록 출력
printMovies(movies);

// =============================
// 도전 과제 추가 기능 구현
// =============================

// 영화 검색 함수: 특정 장르의 영화만 출력 (대소문자 구분 없이)
function searchMoviesByGenre(movieList, genre = "") {
  // genre 입력이 없으면 빈 문자열 기본값 사용
  let found = movieList.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
  
  if (found.length === 0) {
    screenLog(`No movies found for genre: ${genre}.\n`);
  } else {
    screenLog(`${genre} Movies:`);
    
    for (let i = 0; i < found.length; i++) {
      const movie = found[i];
      screenLog(`${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre}`);
    }
    screenLog('');
  }
}

// 평균 출판년도 계산 함수 (함수 표현식 사용)
const calculateAverageYear = function(movieList) {
  if (movieList.length === 0) return 0;
  let sum = 0;
  for (let movie of movieList) {
    sum += movie.year;
  }
  return (sum / movieList.length).toFixed(2); // 소수점 둘째자리까지
};

// 가장 최신 영화 찾는 화살표 함수
const findNewestMovie = (movieList) => {
  if (movieList.length === 0) return null;
  let newest = movieList[0];
  for (let movie of movieList) {
    if (movie.year > newest.year) {
      newest = movie;
    }
  }
  return newest;
};

// ...rest를 이용하여 새로운 영화들을 추가하는 함수
function addMovies(...newMovies) {
  // newMovies는 배열로 전달됨
  for (let movie of newMovies) {
    // 만약 속성 중에 비어있는 값이 있으면 기본값 채워넣기
    if (!movie.title) movie.title = "Unknown";
    if (!movie.director) movie.director = "Unknown";
    if (!movie.year) movie.year = "Unknown";
    if (!movie.genre) movie.genre = defaultGenre;
    movies.push(movie);
  }
}

// 도전 과제용 추가 영화 객체 (예시)
const movie4 = { title: "Interstellar", director: "Nolan", year: 2014, genre: "Sci-Fi" };
const movie5 = { title: "Spirited Away", director: "Miyazaki", year: 2001, genre: "Animation" };

// ...rest를 이용해 새 영화들 추가
addMovies(movie4, movie5);

// 영화 목록 재출력 (추가 영화 포함)
printMovies(movies);

// 영화 검색 예시: Sci-Fi 장르의 영화 출력
searchMoviesByGenre(movies, "Sci-Fi");

// 통계 계산 및 출력
const averageYear = calculateAverageYear(movies);
const newestMovie = findNewestMovie(movies);

screenLog("Statistics:");
screenLog(`Average Year: ${averageYear}`);
if (newestMovie) {
  screenLog(`Newest Movie: ${newestMovie.title} (${newestMovie.year})`);
} else {
  screenLog("Newest Movie: Not available");
}

// 화면 콘솔에 메시지 출력하는 함수
function screenLog(message) {
	const consoleDiv = document.getElementById('console');
	consoleDiv.textContent += message + '\n';
}