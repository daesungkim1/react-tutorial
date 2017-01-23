const state = {
  activeTab : '',
  stories : [
    {
      title: '안정환 "아내 이혜원 때문에 벌금 천만원 낸 적 있어"',
      type: '연예',
      rankByMostPopular: 7,
      visited: false
    },
    {
      title: '[TV와치]\'도깨비\' 김고은의 4번째 생이 끝난 후, 공유는 어떻게 됐을까',
      type: '연예',
      rankByMostPopular: 5,
      visited: false
    },
    {
      title: '[단독][도깨비 20.5%] VOD 흥행기록 깼다..중국 없이도 흑자③',
      type: '연예',
      rankByMostPopular: 1,
      visited: false
    },
    {
      title: '[★밤TV]\'도깨비\'공유♥김고은, 이동욱♥유인나, 찬란한 재회',
      type: '연예',
      rankByMostPopular: 3,
      visited: false
    },
    {
      title: '\'우리 갑순이\' 김소은, 이보희 저격수 등극 \'사이다 며느리\'',
      type: '연예',
      rankByMostPopular: 2,
      visited: false
    },
    {
      title: '\'무도\', 11년 전 \'평균 이하\'를 주창하던 그 초심을 보다',
      type: '연예',
      rankByMostPopular: 6,
      visited: false
    },
    {
      title: '\'사람\' 김민정 부부, 원조 연상연하..10살 이겨낸 사랑꾼 ♥ [종합]',
      type: '연예',
      rankByMostPopular: 4,
      visited: false
    },
    {
      title: '\'연탄가스 흡입\' 지시 논란, 사과만으로 끝낼 일인가',
      type: '연예',
      rankByMostPopular: 8,
      visited: false
    },
    {
      title: '\'비디오여행\' 현빈 "유해진, 생각보다 약간 무서웠다"',
      type: '연예',
      rankByMostPopular: 9,
      visited: false
    },
    {
      title: '\'사람이 좋다\' 김민정♥신동일, 애틋한 이 부부',
      type: '연예',
      rankByMostPopular: 10,
      visited: false
    },
    {
      title: '[단독] 아이유·장기하, 교제 3년 만에 결별.."좋은 선후배로 남겠다"',
      type: '연예',
      rankByMostPopular: 11,
      visited: false
    },
    {
      title: '[단독]차태현, \'1박2일\' 스태프에 \'金카드\' 선물..\'훈훈\'',
      type: '연예',
      rankByMostPopular: 12,
      visited: false
    },
    {
      title: '[어제TV]천재소녀 이성은 안테나행에 유희열 천군만마 얻은듯 기세등등(K팝스타6)',
      type: '연예',
      rankByMostPopular: 13,
      visited: false
    },
    {
      title: '"\'김은숙 신작\' 내년 상반기에.. 다양한 가능성 열어놔"',
      type: '연예',
      rankByMostPopular: 14,
      visited: false
    },
    {
      title: '\'안녕\' 이영자♥황동주 만났다 "6개월만 우리 집에 있을래요?"',
      type: '연예',
      rankByMostPopular: 15,
      visited: false
    },
    {
      title: '배성우 "차태현·조인성, 사모임 \'불량서클\' 멤버..건전한 사람들"[인터뷰②]',
      type: '연예',
      rankByMostPopular: 16,
      visited: false
    },
    {
      title: '[Oh!쎈 토크③] 김용만 "정형돈 건강, 여행 통해 많이 나아지고 있다"',
      type: '연예',
      rankByMostPopular: 17,
      visited: false
    },
    {
      title: '[일문일답] \'도깨비\' 유인나가 밝힌 #써니말투 #다이어트 #저승사자',
      type: '연예',
      rankByMostPopular: 18,
      visited: false
    },
    {
      title: '[\'도깨비\'①] "시즌2 가자"..먹먹 엔딩에 대처하는 네티즌의 자세',
      type: '연예',
      rankByMostPopular: 19,
      visited: false
    },
    {
      title: '\'사람이 좋다\' 김민정♥신동일, 애틋한 이 부부',
      type: '연예',
      rankByMostPopular: 20,
      visited: false
    },
    {
      title: '안정환 "아내 이혜원 때문에 벌금 천만원 낸 적 있어"',
      type: '연예',
      rankByMostPopular: 7,
      visited: false
    },
    {
      title: '[TV와치]\'도깨비\' 김고은의 4번째 생이 끝난 후, 공유는 어떻게 됐을까',
      type: '연예',
      rankByMostPopular: 5,
      visited: false
    },
    {
      title: '[단독][도깨비 20.5%] VOD 흥행기록 깼다..중국 없이도 흑자③',
      type: '연예',
      rankByMostPopular: 1,
      visited: false
    },
    {
      title: '[★밤TV]\'도깨비\'공유♥김고은, 이동욱♥유인나, 찬란한 재회',
      type: '연예',
      rankByMostPopular: 3,
      visited: false
    },
    {
      title: '\'우리 갑순이\' 김소은, 이보희 저격수 등극 \'사이다 며느리\'',
      type: '연예',
      rankByMostPopular: 2,
      visited: false
    },
    {
      title: '\'무도\', 11년 전 \'평균 이하\'를 주창하던 그 초심을 보다',
      type: '연예',
      rankByMostPopular: 6,
      visited: false
    },
    {
      title: '\'사람\' 김민정 부부, 원조 연상연하..10살 이겨낸 사랑꾼 ♥ [종합]',
      type: '연예',
      rankByMostPopular: 4,
      visited: false
    },
    {
      title: '\'연탄가스 흡입\' 지시 논란, 사과만으로 끝낼 일인가',
      type: '연예',
      rankByMostPopular: 8,
      visited: false
    },
    {
      title: '\'비디오여행\' 현빈 "유해진, 생각보다 약간 무서웠다"',
      type: '연예',
      rankByMostPopular: 9,
      visited: false
    },
    {
      title: '[공식입장] \'무도\' 측 "역주행 장면, 인지하지 못한 실수..깊이 반성중"',
      type: '연예',
      rankByMostPopular: 10,
      visited: false
    },
    {
      title: '[단독]최순실, 삼성에 이메일·문자 통해 "돈 더 내놔"..특검, 증거 확보',
      type: '뉴스',
      rankByMostPopular: 2,
      visited: false
    },
    {
      title: '차은택 "崔-고영태 내연관계로 추측..돈 때문에 만난듯"',
      type: '뉴스',
      rankByMostPopular: 1,
      visited: false
    },
    {
      title: '차은택 "崔-고영태 내연관계로 추측..돈 때문에 만난듯"',
      type: '뉴스',
      rankByMostPopular: 4,
      visited: false
    },
    {
      title: '헌재, 김기춘 등 6명 증인추가..탄핵심판 2월로 넘어간다',
      type: '뉴스',
      rankByMostPopular: 5,
      visited: false
    },
    {
      title: '조윤선의 눈물 "블랙리스트 존재는 알았지만.."6위',
      type: '뉴스',
      rankByMostPopular: 6,
      visited: false
    },
    {
      title: '10대 건설사 아파트 \'미분양·계약포기\' 속출',
      type: '뉴스',
      rankByMostPopular: 4,
      visited: false
    },
    {
      title: '김경진, 조윤선 전장관 \'이쁜 여동생\' 표현 구설 "잘못했다"',
      type: '뉴스',
      rankByMostPopular: 7,
      visited: false
    },
    {
      title: '유진룡 "블랙리스트 작성 시행, 김기춘 주도한 것"',
      type: '뉴스',
      rankByMostPopular: 8,
      visited: false
    },
    {
      title: '朴대통령측 "고영태 전과조회 해달라"..헌재 "부적절"',
      type: '뉴스',
      rankByMostPopular: 9,
      visited: false
    },
    {
      title: '\'4일간의 꿈\'..위조지폐 만들어 흥청망청 쓴 40대',
      type: '뉴스',
      rankByMostPopular: 10,
      visited: false
    }
  ]
}


export default state