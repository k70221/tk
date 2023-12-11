function showBoard(boardId) {
  hideAllBoards();
  document.getElementById(boardId).style.display = 'block';
}

function hideAllBoards() {
  var boards = document.querySelectorAll('.board');
  boards.forEach(function(board) {
    board.style.display = 'none';
  });
}

function navigateTo(location) {
  var boardId = location + '_board';
  showBoard(boardId);
}


document.getElementById('seoul').addEventListener('click', function() {
  showBoard('seoul_board');
  window.location.href = 'seoul_board';
});
document.getElementById('daejeon').addEventListener('click', function() {
  showBoard('daejeon_board');
  window.location.href = '주소/서울';
});
document.getElementById('busan').addEventListener('click', function() {
  showBoard('busan_board');
  window.location.href = '주소/서울';
});
document.getElementById('gyeonggi').addEventListener('click', function() {
  showBoard('gyeonggi_board');
  window.location.href = '주소/서울';
});
document.getElementById('gangwon').addEventListener('click', function() {
  showBoard('gangwon_board');
  window.location.href = '주소/서울';
});
document.getElementById('chungbuk').addEventListener('click', function() {
  showBoard('chungbuk_board');
  window.location.href = '주소/서울';
});
document.getElementById('chungnam').addEventListener('click', function() {
  showBoard('chungnam_board');
  window.location.href = '주소/서울';
});
document.getElementById('jeonbuk').addEventListener('click', function() {
  showBoard('jeonbuk_board');
  window.location.href = '주소/서울';
});
document.getElementById('jeonnam').addEventListener('click', function() {
  showBoard('jeonnam_board');
  window.location.href = '주소/서울';
});
document.getElementById('gyeongbuk').addEventListener('click', function() {
  showBoard('gyeongbuk_board');
  window.location.href = '주소/서울';
});
document.getElementById('gyeongnam').addEventListener('click', function() {
  showBoard('gyeongnam_board');
  window.location.href = '주소/서울';
});
document.getElementById('jeju').addEventListener('click', function() {
  showBoard('jeju_board');
  window.location.href = '주소/서울';
});

// 나머지 여행지에 대한 클릭 이벤트도 추가
// 예를 들어, 경기도에 대한 클릭 이벤트
document.getElementById('gyeonggi').addEventListener('click', function () {
  // 경기도 게시판 표시
  showBoard('gyeonggi_board');
});
