# Mat.zip
---
한국의 Matzip(맛집)을 찾아서
1. 맵 좌표(위치) 조회
2. 음식점 조회(카테고리로)
  2.1. 맵의 위치(혹은 영역) 기반 음식점 조회
  2.2. 좌표의 음식점 힘들고, 최초 좌표에 지역구 abstraction, 지역구의 음식점을 조회
3. 음식점(Keyword) 음식점 갯수를 한정
  3.1. 별점 기준으로 Sorting 음식점 n개만 가져온다(기준은 가능한 api로 변경될 수 있고)
4. 음식점(Keyword) 기반 instagram crawling(기간을 한정) 을 한다.
  4.1. 음식점 이름이 해시태그인 글의 갯수 처리 (hot place 점수)
5. 음식점(hot place 점수 포함)의  맵에 표시
  5.1. 전체 보여준다 or 하이랭크 음식점만 보여준다
  5.2. 음식점 클릭 시나리오 - 별점 리뷰/최근 instagram 글
6. enhance 음식점 점수 저장(캐쉬), 반응성을 빠르게
--