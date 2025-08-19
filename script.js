// 프로젝트 상세 데이터
const projectData = {
    'animal-place': {
        title: 'Animal Place',
        subtitle: '동물 입양 및 커뮤니티 종합 플랫폼',
        description: '유기동물 입양을 돕고 동물 애호가들이 소통할 수 있는 종합 플랫폼. 입양부터 입양 후 관리까지 전 과정 지원',
        
        // 기획 및 배경
        background: {
            title: '프로젝트 배경',
            content: '한국에서 매년 발생하는 유기동물 문제와 입양 문화 부족에 대한 해결책 제시. 입양 과정의 투명성과 신뢰성 향상 필요'
        },
        
        // 시장 분석
        marketAnalysis: {
            title: '시장 분석',
            content: '국내 반려동물 시장 규모는 2023년 기준 약 15조원으로 추정되며, 연평균 10% 이상 성장',
            details: [
                '반려동물 인구: 1,500만 명 (전체 인구의 약 30%)',
                '유기동물 발생: 연간 약 13만 마리',
                '입양률: 전체 유기동물의 약 25% (낮은 편)',
                '시장 성장률: 연평균 12% (2020-2023)',
                '입양 플랫폼 시장: 연평균 25% 성장'
            ]
        },
        
        // 경쟁사 분석
        competitorAnalysis: {
            title: '경쟁사 분석',
            content: '기존 입양 플랫폼들의 한계점과 차별화 포인트 도출',
            competitors: [
                {
                    name: '동물보호관리시스템',
                    strength: '공식적이고 신뢰도 높음, 정부 지원',
                    weakness: '사용자 경험 부족, 정보 업데이트 지연'
                },
                {
                    name: '펫프렌드',
                    strength: '사용자 친화적 인터페이스, 커뮤니티 기능',
                    weakness: '입양 후 관리 부족, 신뢰성 검증 부족'
                },
                {
                    name: '펫하이브',
                    strength: '입양 후 관리 시스템, 전문성',
                    weakness: '입양 과정 복잡, 사용자 접근성 낮음'
                },
                {
                    name: '동물사랑',
                    strength: '다양한 동물 정보, 입양 후기',
                    weakness: '입양 프로세스 부족, 관리 시스템 미흡'
                }
            ]
        },
        
        // 자사 분석
        businessAnalysis: {
            title: '비즈니스 모델 분석',
            content: '입양 매칭과 커뮤니티를 통한 지속 가능한 수익 모델',
            model: [
                '입양 매칭 서비스 (무료)',
                '입양 후 관리 서비스 (유료)',
                '커뮤니티 광고 수익',
                '펫샵/병원 제휴 수익',
                '동물 용품 제휴 마케팅',
                '입양 컨설팅 서비스'
            ]
        },
        
        // 문제 정의
        problemDefinition: {
            title: '핵심 문제 정의',
            content: '유기동물 입양 과정의 복잡성과 입양 후 관리 부족',
            problems: [
                '입양 정보의 신뢰성 부족',
                '입양 과정의 복잡성 및 투명성 부족',
                '입양 후 관리 시스템 부재',
                '입양인과 보호소 간 소통 부족',
                '입양 성공률 저하 및 반납률 증가'
            ]
        },
        
        // 개선안
        solutions: {
            title: '개선안 및 솔루션',
            content: '통합적인 입양 관리 시스템과 커뮤니티 플랫폼 구축',
            solutions: [
                '신뢰할 수 있는 입양 정보 시스템 및 검증',
                '단계별 입양 프로세스 가이드 및 모니터링',
                '입양 후 관리 및 모니터링 시스템',
                '보호소와 입양인 간 소통 플랫폼',
                '입양 성공 사례 및 커뮤니티 활성화'
            ]
        },
        
        // 개발 과정
        development: {
            title: '개발 과정',
            content: '사용자 중심의 설계와 지속적인 개선',
            process: [
                '1단계: 요구사항 분석 및 사용자 인터뷰',
                '2단계: 프로토타입 설계 및 사용자 테스트',
                '3단계: MVP 개발 및 베타 테스트',
                '4단계: 피드백 반영 및 기능 개선',
                '5단계: 정식 서비스 런칭 및 지속적 개선'
            ]
        },
        
        // 테스트 및 성과
        testing: {
            title: '테스트 및 성과',
            content: '사용자 테스트를 통한 지속적인 개선',
            results: [
                '사용자 만족도: 4.2/5.0',
                '입양 성공률: 35% (기존 대비 10%p 향상)',
                '사용자 이탈률: 15% (기존 대비 25%p 감소)',
                '월간 활성 사용자: 2,500명',
                '입양 후 관리 참여율: 60%'
            ]
        },
        
        // 기술 스택
        techStack: ['Spring Boot', 'MyBatis', 'MySQL', 'Thymeleaf', 'JavaScript', 'JPA'],
        
        // 역할 및 기여도
        role: '팀 프로젝트 (4명) - 백엔드 개발 및 API 설계 담당',
        
        // 학습 내용
        learnings: [
            '사용자 중심 설계의 중요성',
            '복잡한 비즈니스 로직 설계 경험',
            '팀 협업 및 프로젝트 관리',
            '데이터베이스 설계 및 최적화',
            '동물 보호 및 입양 도메인 지식'
        ]
    },
    
    'bat-dream': {
        title: 'BAT DREAM',
        subtitle: '농업 정보 및 식물 관리 종합 플랫폼',
        description: '농업인들을 위한 종합 정보 제공, 식물 관리 도구, 농장 가이드 서비스',
        
        background: {
            title: '프로젝트 배경',
            content: '농업 정보의 부족과 디지털화 부족으로 인한 농업 생산성 저하 문제 해결. 스마트팜 도입 확대에 따른 정보 플랫폼 필요성 증대'
        },
        
        marketAnalysis: {
            title: '시장 분석',
            content: '스마트팜 시장은 2023년 기준 약 3조원 규모로 연평균 15% 성장',
            details: [
                '국내 농업인 수: 약 240만 명',
                '스마트팜 도입률: 전체 농가의 약 8%',
                '농업 디지털화 투자: 연간 약 5,000억원',
                '시장 성장률: 연평균 15% (2020-2023)',
                '농업 정보 플랫폼 시장: 연평균 20% 성장'
            ]
        },
        
        competitorAnalysis: {
            title: '경쟁사 분석',
            content: '기존 농업 정보 플랫폼의 한계와 차별화 포인트',
            competitors: [
                {
                    name: '농업기술원',
                    strength: '정확하고 신뢰할 수 있는 정보, 공식 지원',
                    weakness: '사용자 인터페이스 부족, 모바일 최적화 부족'
                },
                {
                    name: '농업인신문',
                    strength: '다양한 농업 정보 제공, 오랜 역사',
                    weakness: '검색 및 필터링 기능 부족, 디지털화 부족'
                },
                {
                    name: '농업정보포털',
                    strength: '통합 정보 제공, 정부 지원',
                    weakness: '사용자 경험 부족, 개인화 서비스 부족'
                }
            ]
        },
        
        businessAnalysis: {
            title: '비즈니스 모델 분석',
            content: '정보 제공과 프리미엄 서비스를 통한 수익 창출',
            model: [
                '기본 정보 서비스 (무료)',
                '프리미엄 농업 가이드 (유료)',
                '농업용품 제휴 마케팅',
                '농업 기술 컨설팅 서비스',
                '농장 투어 및 체험 프로그램'
            ]
        },
        
        problemDefinition: {
            title: '핵심 문제 정의',
            content: '농업 정보의 접근성 부족과 체계적 관리 도구 부재',
            problems: [
                '농업 정보의 산재화 및 검색 어려움',
                '검색 및 필터링 기능 부족',
                '개인별 맞춤 정보 제공 부족',
                '식물 관리 도구 부재',
                '농장 정보 접근성 부족'
            ]
        },
        
        solutions: {
            title: '개선안 및 솔루션',
            content: '통합 농업 정보 플랫폼과 개인화된 관리 도구 제공',
            solutions: [
                '통합 농업 정보 검색 및 필터링 시스템',
                '지역별 맞춤 농업 정보 제공',
                '개인 식물 관리 대시보드 및 알림',
                '농업 기술 학습 콘텐츠 및 퀴즈',
                '농장 정보 및 가이드 서비스'
            ]
        },
        
        development: {
            title: '개발 과정',
            content: '사용자 피드백을 반영한 반복적 개발',
            process: [
                '1단계: 농업인 대상 사용자 리서치 및 니즈 분석',
                '2단계: 정보 아키텍처 설계 및 프로토타입 제작',
                '3단계: 반응형 웹 디자인 및 UI/UX 설계',
                '4단계: React 기반 프론트엔드 개발',
                '5단계: 사용자 테스트 및 지속적 개선'
            ]
        },
        
        testing: {
            title: '테스트 및 성과',
            content: '농업인 대상 사용성 테스트를 통한 개선',
            results: [
                '사용자 만족도: 4.5/5.0',
                '정보 검색 성공률: 85%',
                '평균 체류 시간: 8분 (기존 대비 2배 증가)',
                '재방문률: 65%',
                '농장 정보 조회 증가율: 40%'
            ]
        },
        
        techStack: ['React', 'Bootstrap', 'SCSS', 'JavaScript', 'JSON', 'React Router'],
        role: '팀 프로젝트 (3명) - 프론트엔드 개발 및 UI/UX 설계 담당',
        learnings: [
            '사용자 리서치의 중요성',
            '반응형 웹 디자인 구현',
            'React 컴포넌트 설계 및 상태 관리',
            '사용자 경험 최적화',
            '농업 도메인 지식 습득'
        ]
    },
    
    'green-way': {
        title: 'Green Way',
        subtitle: '사용자 위치 기반 공유 이동수단 정보 서비스',
        description: '서울시 공유자전거(따릉이, 일레클, 킥고잉)의 실시간 위치와 대여 가능 현황을 제공하는 웹 서비스',
        
        background: {
            title: '프로젝트 배경',
            content: '서울시 공유자전거 이용 증가에 따른 편리한 대여소 찾기 서비스 필요성 증대. 기존 브랜드별 앱 분산으로 인한 사용자 불편함 해결'
        },
        
        marketAnalysis: {
            title: '시장 분석',
            content: '국내 공유자전거 시장은 2023년 기준 약 2,000억원 규모로 지속적 성장',
            details: [
                '서울시 공유자전거 대수: 약 20,000대',
                '일일 이용률: 약 15,000건',
                '시장 성장률: 연평균 20%',
                '주요 플레이어: 따릉이, 일레클, 킥고잉',
                '사용자 니즈: 통합 정보 제공 서비스'
            ]
        },
        
        competitorAnalysis: {
            title: '경쟁사 분석',
            content: '기존 공유자전거 앱의 한계와 차별화 포인트',
            competitors: [
                {
                    name: '따릉이 앱',
                    strength: '공식 앱으로 신뢰도 높음, 서울시 지원',
                    weakness: '다른 브랜드 정보 부족, UI/UX 개선 필요'
                },
                {
                    name: '일레클 앱',
                    strength: '브랜드별 차별화, 프리미엄 서비스',
                    weakness: '서비스 지역 제한, 정보 업데이트 지연'
                },
                {
                    name: '킥고잉 앱',
                    strength: '전동킥보드 연계 서비스',
                    weakness: '자전거 정보 부족, 지역 제한'
                }
            ]
        },
        
        businessAnalysis: {
            title: '비즈니스 모델 분석',
            content: '광고 수익과 제휴 마케팅을 통한 수익 창출',
            model: [
                '공유자전거 브랜드 제휴 수익',
                '주변 상점/카페 광고 수익',
                '프리미엄 기능 제공 (유료)',
                '데이터 분석 서비스 제공',
                '지역 기업 제휴 마케팅'
            ]
        },
        
        problemDefinition: {
            title: '핵심 문제 정의',
            content: '여러 공유자전거 브랜드 정보의 통합 부족과 실시간 정보 부족',
            problems: [
                '브랜드별 앱 분산으로 인한 불편함',
                '실시간 대여 가능 현황 정보 부족',
                '대여소 위치 검색의 어려움',
                '통합된 사용자 경험 부족',
                '지역별 서비스 정보 부족'
            ]
        },
        
        solutions: {
            title: '개선안 및 솔루션',
            content: '통합 공유자전거 정보 플랫폼과 실시간 데이터 제공',
            solutions: [
                '브랜드 통합 대여소 정보 제공',
                '실시간 대여 가능 현황 표시',
                '사용자 위치 기반 최적 경로 안내',
                '지역별 필터링 및 검색 기능',
                '즐겨찾기 및 개인화 서비스'
            ]
        },
        
        development: {
            title: '개발 과정',
            content: 'API 연동과 사용자 경험 최적화에 중점',
            process: [
                '1단계: 공유자전거 API 분석 및 연동 (따릉이, 일레클, 킥고잉)',
                '2단계: 카카오맵 API 연동 및 지도 서비스 구현',
                '3단계: 실시간 데이터 업데이트 시스템 구축',
                '4단계: 반응형 웹 디자인 및 사용자 인터페이스 구현',
                '5단계: 성능 최적화 및 사용자 테스트'
            ]
        },
        
        testing: {
            title: '테스트 및 성과',
            content: '실제 사용자 대상 테스트를 통한 개선',
            results: [
                '사용자 만족도: 4.3/5.0',
                '정보 정확도: 95%',
                '평균 응답 시간: 2초 이내',
                '일일 활성 사용자: 1,200명',
                '사용자 체류 시간: 평균 5분 (기존 대비 2배 증가)'
            ]
        },
        
        techStack: ['JavaScript', 'Kakao Maps API', 'HTML/CSS', 'JSON', 'Geolocation API'],
        role: '팀 프로젝트 (5명) - 전체 기획 및 개발 담당',
        learnings: [
            'API 연동 및 데이터 처리',
            '실시간 정보 업데이트 시스템',
            '지도 서비스 활용 및 최적화',
            '사용자 경험 최적화',
            '팀 협업 및 프로젝트 관리'
        ]
    },
    
    'kh-league': {
        title: 'KH LEAGUE',
        subtitle: '스포츠 리그 및 팀 관리 종합 플랫폼',
        description: '아마추어 스포츠 리그와 경기를 체계적으로 관리할 수 있는 종합 플랫폼. 팀 관리부터 경기 운영까지 전 과정 지원',
        
        background: {
            title: '프로젝트 배경',
            content: '아마추어 스포츠 리그의 체계적 관리 부족과 디지털화 필요성 증대. 리그 운영의 효율성 향상과 참가자 경험 개선 필요'
        },
        
        marketAnalysis: {
            title: '시장 분석',
            content: '아마추어 스포츠 시장은 2023년 기준 약 5,000억원 규모로 지속적 성장',
            details: [
                '아마추어 스포츠 참여자: 약 200만 명',
                '리그 운영 단체: 약 5,000개',
                '시장 성장률: 연평균 8%',
                '디지털화 필요성: 높음',
                '스포츠 관리 플랫폼 시장: 연평균 15% 성장'
            ]
        },
        
        competitorAnalysis: {
            title: '경쟁사 분석',
            content: '기존 스포츠 관리 플랫폼의 한계와 차별화 포인트',
            competitors: [
                {
                    name: '스포츠타임',
                    strength: '다양한 스포츠 지원, 사용자 기반',
                    weakness: '리그 관리 기능 부족, 사용자 인터페이스 개선 필요'
                },
                {
                    name: '팀플레이',
                    strength: '팀 관리 기능, 선수 등록 시스템',
                    weakness: '리그 운영 기능 부족, 확장성 한계'
                },
                {
                    name: '스포츠매니저',
                    strength: '전문적인 리그 관리, 통계 기능',
                    weakness: '사용자 접근성 부족, 비용 부담'
                }
            ]
        },
        
        businessAnalysis: {
            title: '비즈니스 모델 분석',
            content: '구독형 서비스와 프리미엄 기능을 통한 수익 창출',
            model: [
                '기본 리그 관리 서비스 (무료)',
                '프리미엄 기능 (월 구독료)',
                '리그 운영 컨설팅 서비스',
                '스포츠 용품 제휴 마케팅',
                '리그 운영자 교육 프로그램',
                '데이터 분석 및 인사이트 제공'
            ]
        },
        
        problemDefinition: {
            title: '핵심 문제 정의',
            content: '아마추어 스포츠 리그의 체계적 관리 부족과 참가자 간 소통 부족',
            problems: [
                '리그 일정 관리의 어려움 및 중복 일정 발생',
                '팀 정보 및 선수 관리 부족',
                '경기 결과 기록 및 통계 부족',
                '참가자 간 소통 채널 부재',
                '리그 운영 비효율성 및 비용 증가'
            ]
        },
        
        solutions: {
            title: '개선안 및 솔루션',
            content: '통합 리그 관리 시스템과 참가자 소통 플랫폼 구축',
            solutions: [
                '체계적인 리그 일정 관리 및 중복 방지 시스템',
                '팀 및 선수 정보 관리 도구 및 등록 시스템',
                '경기 결과 기록 및 통계 시스템',
                '참가자 소통 및 커뮤니티 기능',
                '리그 운영 효율성 향상 도구'
            ]
        },
        
        development: {
            title: '개발 과정',
            content: '복잡한 비즈니스 로직과 사용자 경험 최적화',
            process: [
                '1단계: 리그 운영 프로세스 분석 및 요구사항 정의',
                '2단계: 데이터베이스 설계 및 구축',
                '3단계: 백엔드 API 개발 및 웹 크롤링 시스템',
                '4단계: 프론트엔드 사용자 인터페이스 구현',
                '5단계: 통합 테스트 및 실제 리그 운영을 통한 검증'
            ]
        },
        
        testing: {
            title: '테스트 및 성과',
            content: '실제 리그 운영을 통한 검증 및 개선',
            results: [
                '사용자 만족도: 4.4/5.0',
                '리그 운영 효율성: 40% 향상',
                '참가자 참여도: 25% 증가',
                '운영 비용 절감: 30%',
                '일정 충돌 감소율: 60%'
            ]
        },
        
        techStack: ['Spring Boot', 'Selenium', 'MyBatis', 'MySQL', 'Thymeleaf', 'AOP'],
        role: '팀 프로젝트 (5명) - 백엔드 개발 및 시스템 아키텍처 담당',
        learnings: [
            '복잡한 비즈니스 로직 설계',
            '웹 크롤링 및 데이터 수집 시스템',
            '시스템 아키텍처 설계 및 최적화',
            '팀 프로젝트 관리 및 협업',
            '스포츠 리그 운영 도메인 지식'
        ]
    }
};

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 자동 스크롤 기능 - 2초 후 소개 섹션으로 이동
    setTimeout(function() {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 2000); // 2초 후 실행

    // 프로젝트 상세 버튼 이벤트 리스너
    const projectDetailBtns = document.querySelectorAll('.project-detail-btn');
    projectDetailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectCard = this.closest('.project-card');
            const projectId = projectCard.dataset.project;
            showProjectModal(projectId);
        });
    });

    // 모달 닫기 버튼 이벤트 리스너
    const closeBtn = document.querySelector('.close');
    const modal = document.getElementById('project-modal');
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 스무스 스크롤
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 프로젝트 상세 모달 표시
function showProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="project-detail">
            <div class="project-detail-header">
                <h2>${project.title}</h2>
                <p>${project.subtitle}</p>
                <p>${project.description}</p>
            </div>
            
            <div class="project-detail-content">
                <!-- 배경 -->
                <div class="detail-section">
                    <h3>${project.background.title}</h3>
                    <p>${project.background.content}</p>
                </div>
                
                <!-- 시장 분석 -->
                <div class="detail-section">
                    <h3>${project.marketAnalysis.title}</h3>
                    <p>${project.marketAnalysis.content}</p>
                    <ul>
                        ${project.marketAnalysis.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
                
                <!-- 경쟁사 분석 -->
                <div class="detail-section">
                    <h3>${project.competitorAnalysis.title}</h3>
                    <p>${project.competitorAnalysis.content}</p>
                    <div class="analysis-grid">
                        ${project.competitorAnalysis.competitors.map(comp => `
                            <div class="analysis-item">
                                <h4>${comp.name}</h4>
                                <p><strong>강점:</strong> ${comp.strength}</p>
                                <p><strong>약점:</strong> ${comp.weakness}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- 비즈니스 모델 -->
                <div class="detail-section">
                    <h3>${project.businessAnalysis.title}</h3>
                    <p>${project.businessAnalysis.content}</p>
                    <ul>
                        ${project.businessAnalysis.model.map(model => `<li>${model}</li>`).join('')}
                    </ul>
                </div>
                
                <!-- 문제 정의 -->
                <div class="detail-section">
                    <h3>${project.problemDefinition.title}</h3>
                    <p>${project.problemDefinition.content}</p>
                    <ul>
                        ${project.problemDefinition.problems.map(problem => `<li>${problem}</li>`).join('')}
                    </ul>
                </div>
                
                <!-- 개선안 -->
                <div class="detail-section">
                    <h3>${project.solutions.title}</h3>
                    <p>${project.solutions.content}</p>
                    <ul>
                        ${project.solutions.solutions.map(solution => `<li>${solution}</li>`).join('')}
                    </ul>
                </div>
                
                <!-- 개발 과정 -->
                <div class="detail-section">
                    <h3>${project.development.title}</h3>
                    <p>${project.development.content}</p>
                    <ul>
                        ${project.development.process.map(step => `<li>${step}</li>`).join('')}
                    </ul>
                </div>
                
                <!-- 테스트 및 성과 -->
                <div class="detail-section">
                    <h3>${project.testing.title}</h3>
                    <p>${project.testing.content}</p>
                    <ul>
                        ${project.testing.results.map(result => `<li>${result}</li>`).join('')}
                    </ul>
                </div>
                
                <!-- 기술 스택 -->
                <div class="detail-section">
                    <h3>기술 스택</h3>
                    <div class="project-tags">
                        ${project.techStack.map(tech => `<span class="tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <!-- 역할 및 기여도 -->
                <div class="detail-section">
                    <h3>역할 및 기여도</h3>
                    <p>${project.role}</p>
                </div>
                
                <!-- 학습 내용 -->
                <div class="detail-section">
                    <h3>주요 학습 내용</h3>
                    <ul>
                        ${project.learnings.map(learning => `<li>${learning}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('project-modal').style.display = 'block';
}
