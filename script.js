// 프로젝트 상세 데이터
const projectData = {
    'animal-place': {
        title: 'Animal Place',
        subtitle: '동물 입양 및 커뮤니티 종합 플랫폼',
        description: '유기동물 입양을 돕고 동물 애호가들이 소통할 수 있는 종합 플랫폼. 입양부터 입양 후 관리까지 전 과정 지원',
        
        // 서비스 개요
        overview: {
            title: '01 서비스 개요',
            content: '동물 입양 문화 활성화와 유기동물 문제 해결을 위한 통합 플랫폼',
            concept: 'Adopt + Community = Animal Place',
            target: '동물 입양을 원하는 20-40대, 동물 애호가 커뮤니티'
        },
        
        // 시장 분석
        marketAnalysis: {
            title: '02 시장 분석',
            content: '국내 반려동물 시장은 2023년 기준 약 15조원으로 추정되며, 연평균 10% 이상 성장',
            details: [
                '반려동물 인구: 1,500만 명 (전체 인구의 약 30%)',
                '유기동물 발생: 연간 약 13만 마리',
                '입양률: 전체 유기동물의 약 25% (낮은 편)',
                '시장 성장률: 연평균 12% (2020-2023)',
                '입양 플랫폼 시장: 연평균 25% 성장'
            ]
        },
        
        // 벤치마킹
        benchmarking: {
            title: '03 벤치마킹',
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
                }
            ]
        },
        
        // 페르소나
        persona: {
            title: '04 페르소나 분석',
            content: '동물 입양을 고려하는 타겟 사용자 분석',
            persona: {
                name: '김민수',
                age: '32세',
                job: '회사원',
                needs: [
                    '신뢰할 수 있는 입양 정보',
                    '입양 과정의 투명성',
                    '입양 후 관리 지원',
                    '동물 애호가 커뮤니티'
                ]
            }
        },
        
        // 서비스 목표/기능
        serviceGoal: {
            title: '05 서비스 목표/기능',
            content: 'AS-IS/TO-BE 분석을 통한 서비스 개선 방향',
            asis: [
                '입양 정보의 신뢰성 부족',
                '입양 과정의 복잡성',
                '입양 후 관리 시스템 부재'
            ],
            tobe: [
                '검증된 입양 정보 시스템',
                '단계별 입양 프로세스',
                '입양 후 관리 플랫폼'
            ]
        },
        
        // 와이어프레임
        wireframe: {
            title: '06 와이어프레임',
            content: '사용자 중심의 UI/UX 설계',
            features: [
                '메인 페이지: 입양 동물 목록 및 검색',
                '동물 상세: 상세 정보 및 입양 신청',
                '커뮤니티: 입양 후기 및 소통',
                '마이페이지: 입양 관리 및 후기 작성'
            ]
        },
        
        // 기대효과
        expectedEffects: {
            title: '07 기대효과',
            content: '서비스 출시를 통한 시장 영향 및 사용자 가치',
            effects: [
                '입양 성공률: 35% (기존 대비 10%p 향상)',
                '사용자 만족도: 4.2/5.0',
                '월간 활성 사용자: 2,500명',
                '입양 후 관리 참여율: 60%'
            ]
        },
        
        // 기술 스택
        techStack: ['Spring Boot', 'MyBatis', 'MySQL', 'Thymeleaf'],
        
        // 역할 및 기여도
        role: '팀 프로젝트 (4명) - 서비스 기획 및 백엔드 개발 담당',
        
        // 학습 내용
        learnings: [
            '사용자 중심 설계의 중요성',
            '시장 분석 및 경쟁사 벤치마킹',
            '페르소나 분석 및 사용자 니즈 파악',
            'AS-IS/TO-BE 분석을 통한 개선 방향 도출',
            '와이어프레임 및 프로토타입 설계'
        ]
    },
    
    'bat-dream': {
        title: 'BAT DREAM',
        subtitle: '농업 정보 및 식물 관리 종합 플랫폼',
        description: '농업인들을 위한 종합 정보 제공, 식물 관리 도구, 농장 가이드 서비스',
        
        overview: {
            title: '01 서비스 개요',
            content: '농업 정보의 디지털화와 스마트팜 도입 확대를 위한 통합 플랫폼',
            concept: 'Farm + Digital = BAT DREAM',
            target: '농업인, 스마트팜 도입 희망자, 식물 관리 애호가'
        },
        
        marketAnalysis: {
            title: '02 시장 분석',
            content: '스마트팜 시장은 2023년 기준 약 3조원 규모로 연평균 15% 성장',
            details: [
                '국내 농업인 수: 약 240만 명',
                '스마트팜 도입률: 전체 농가의 약 8%',
                '농업 디지털화 투자: 연간 약 5,000억원',
                '시장 성장률: 연평균 15% (2020-2023)',
                '농업 정보 플랫폼 시장: 연평균 20% 성장'
            ]
        },
        
        benchmarking: {
            title: '03 벤치마킹',
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
                }
            ]
        },
        
        persona: {
            title: '04 페르소나 분석',
            content: '농업 정보를 원하는 타겟 사용자 분석',
            persona: {
                name: '박영희',
                age: '45세',
                job: '농업인',
                needs: [
                    '실용적인 농업 정보',
                    '지역별 맞춤 정보',
                    '식물 관리 도구',
                    '농업 기술 학습'
                ]
            }
        },
        
        serviceGoal: {
            title: '05 서비스 목표/기능',
            content: 'AS-IS/TO-BE 분석을 통한 서비스 개선 방향',
            asis: [
                '농업 정보의 산재화',
                '검색 및 필터링 기능 부족',
                '개인별 맞춤 정보 제공 부족'
            ],
            tobe: [
                '통합 농업 정보 검색 시스템',
                '지역별 맞춤 정보 제공',
                '개인화된 관리 도구'
            ]
        },
        
        wireframe: {
            title: '06 와이어프레임',
            content: '사용자 중심의 UI/UX 설계',
            features: [
                '메인 페이지: 농업 정보 및 검색',
                '식물 관리: 개인 식물 대시보드',
                '농장 가이드: 지역별 농장 정보',
                '학습 센터: 농업 기술 콘텐츠'
            ]
        },
        
        expectedEffects: {
            title: '07 기대효과',
            content: '서비스 출시를 통한 시장 영향 및 사용자 가치',
            effects: [
                '사용자 만족도: 4.5/5.0',
                '정보 검색 성공률: 85%',
                '평균 체류 시간: 8분 (기존 대비 2배 증가)',
                '재방문률: 65%'
            ]
        },
        
        techStack: ['React', 'Bootstrap', 'SCSS', 'JavaScript'],
        role: '팀 프로젝트 (3명) - 서비스 기획 및 프론트엔드 개발 담당',
        learnings: [
            '사용자 리서치의 중요성',
            '반응형 웹 디자인 구현',
            '페르소나 분석 및 사용자 니즈 파악',
            '시장 분석 및 경쟁사 벤치마킹',
            '와이어프레임 및 프로토타입 설계'
        ]
    },
    
    'green-way': {
        title: 'Green Way',
        subtitle: '사용자 위치 기반 공유 이동수단 정보 서비스',
        description: '서울시 공유자전거(따릉이, 일레클, 킥고잉)의 실시간 위치와 대여 가능 현황을 제공하는 웹 서비스',
        
        overview: {
            title: '01 서비스 개요',
            content: '여러 공유자전거 브랜드 정보를 통합하여 편리한 대여소 찾기 서비스',
            concept: 'Green + Way = Green Way',
            target: '공유자전거 이용자, 환경 친화적 이동수단 선호자'
        },
        
        marketAnalysis: {
            title: '02 시장 분석',
            content: '국내 공유자전거 시장은 2023년 기준 약 2,000억원 규모로 지속적 성장',
            details: [
                '서울시 공유자전거 대수: 약 20,000대',
                '일일 이용률: 약 15,000건',
                '시장 성장률: 연평균 20%',
                '주요 플레이어: 따릉이, 일레클, 킥고잉',
                '사용자 니즈: 통합 정보 제공 서비스'
            ]
        },
        
        benchmarking: {
            title: '03 벤치마킹',
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
                }
            ]
        },
        
        persona: {
            title: '04 페르소나 분석',
            content: '공유자전거를 이용하는 타겟 사용자 분석',
            persona: {
                name: '이준호',
                age: '28세',
                job: '회사원',
                needs: [
                    '실시간 대여 가능 현황',
                    '통합된 브랜드 정보',
                    '위치 기반 최적 경로',
                    '즐겨찾기 및 개인화'
                ]
            }
        },
        
        serviceGoal: {
            title: '05 서비스 목표/기능',
            content: 'AS-IS/TO-BE 분석을 통한 서비스 개선 방향',
            asis: [
                '브랜드별 앱 분산으로 인한 불편함',
                '실시간 대여 가능 현황 정보 부족',
                '통합된 사용자 경험 부족'
            ],
            tobe: [
                '브랜드 통합 대여소 정보 제공',
                '실시간 대여 가능 현황 표시',
                '통합된 사용자 인터페이스'
            ]
        },
        
        wireframe: {
            title: '06 와이어프레임',
            content: '사용자 중심의 UI/UX 설계',
            features: [
                '메인 페이지: 지도 및 대여소 목록',
                '대여소 상세: 실시간 현황 및 정보',
                '즐겨찾기: 자주 이용하는 대여소 관리',
                '검색: 위치 기반 대여소 찾기'
            ]
        },
        
        expectedEffects: {
            title: '07 기대효과',
            content: '서비스 출시를 통한 시장 영향 및 사용자 가치',
            effects: [
                '사용자 만족도: 4.3/5.0',
                '정보 정확도: 95%',
                '평균 응답 시간: 2초 이내',
                '일일 활성 사용자: 1,200명'
            ]
        },
        
        techStack: ['JavaScript', 'Kakao Maps API', 'HTML/CSS', 'JSON'],
        role: '팀 프로젝트 (5명) - 서비스 기획 및 전체 개발 담당',
        learnings: [
            'API 연동 및 데이터 처리',
            '실시간 정보 업데이트 시스템',
            '사용자 경험 최적화',
            '시장 분석 및 경쟁사 벤치마킹',
            '페르소나 분석 및 사용자 니즈 파악'
        ]
    },
    
    'kh-league': {
        title: 'KH LEAGUE',
        subtitle: '스포츠 리그 및 팀 관리 종합 플랫폼',
        description: '아마추어 스포츠 리그와 경기를 체계적으로 관리할 수 있는 종합 플랫폼. 팀 관리부터 경기 운영까지 전 과정 지원',
        
        overview: {
            title: '01 서비스 개요',
            content: '아마추어 스포츠 리그의 체계적 관리와 디지털화를 위한 통합 플랫폼',
            concept: 'Sports + Management = KH LEAGUE',
            target: '아마추어 스포츠 참가자, 리그 운영자, 팀 관리자'
        },
        
        marketAnalysis: {
            title: '02 시장 분석',
            content: '아마추어 스포츠 시장은 2023년 기준 약 5,000억원 규모로 지속적 성장',
            details: [
                '아마추어 스포츠 참가자: 약 200만 명',
                '리그 운영 단체: 약 5,000개',
                '시장 성장률: 연평균 8%',
                '디지털화 필요성: 높음',
                '스포츠 관리 플랫폼 시장: 연평균 15% 성장'
            ]
        },
        
        benchmarking: {
            title: '03 벤치마킹',
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
                }
            ]
        },
        
        persona: {
            title: '04 페르소나 분석',
            content: '스포츠 리그를 운영하는 타겟 사용자 분석',
            persona: {
                name: '최성훈',
                age: '35세',
                job: '리그 운영자',
                needs: [
                    '체계적인 리그 일정 관리',
                    '팀 및 선수 정보 관리',
                    '경기 결과 기록 및 통계',
                    '참가자 소통 플랫폼'
                ]
            }
        },
        
        serviceGoal: {
            title: '05 서비스 목표/기능',
            content: 'AS-IS/TO-BE 분석을 통한 서비스 개선 방향',
            asis: [
                '리그 일정 관리의 어려움',
                '팀 정보 및 선수 관리 부족',
                '경기 결과 기록 및 통계 부족'
            ],
            tobe: [
                '체계적인 리그 일정 관리 시스템',
                '팀 및 선수 정보 관리 도구',
                '경기 결과 기록 및 통계 시스템'
            ]
        },
        
        wireframe: {
            title: '06 와이어프레임',
            content: '사용자 중심의 UI/UX 설계',
            features: [
                '대시보드: 리그 현황 및 일정',
                '팀 관리: 선수 등록 및 정보 관리',
                '경기 관리: 일정 및 결과 기록',
                '커뮤니티: 참가자 소통 공간'
            ]
        },
        
        expectedEffects: {
            title: '07 기대효과',
            content: '서비스 출시를 통한 시장 영향 및 사용자 가치',
            effects: [
                '사용자 만족도: 4.4/5.0',
                '리그 운영 효율성: 40% 향상',
                '참가자 참여도: 25% 증가',
                '운영 비용 절감: 30%'
            ]
        },
        
        techStack: ['Spring Boot', 'Selenium', 'MyBatis', 'MySQL'],
        role: '팀 프로젝트 (5명) - 서비스 기획 및 백엔드 개발 담당',
        learnings: [
            '복잡한 비즈니스 로직 설계',
            '시스템 아키텍처 설계 및 최적화',
            '시장 분석 및 경쟁사 벤치마킹',
            '페르소나 분석 및 사용자 니즈 파악',
            '와이어프레임 및 프로토타입 설계'
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
                <!-- 서비스 개요 -->
                <div class="detail-section">
                    <h3>${project.overview.title}</h3>
                    <p>${project.overview.content}</p>
                    <p><strong>핵심 개념:</strong> ${project.overview.concept}</p>
                    <p><strong>타겟:</strong> ${project.overview.target}</p>
                </div>
                
                <!-- 시장 분석 -->
                <div class="detail-section">
                    <h3>${project.marketAnalysis.title}</h3>
                    <p>${project.marketAnalysis.content}</p>
                    <ul>
                        ${project.marketAnalysis.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
                
                <!-- 벤치마킹 -->
                <div class="detail-section">
                    <h3>${project.benchmarking.title}</h3>
                    <p>${project.benchmarking.content}</p>
                    <div class="analysis-grid">
                        ${project.benchmarking.competitors.map(comp => `
                            <div class="analysis-item">
                                <h4>${comp.name}</h4>
                                <p><strong>강점:</strong> ${comp.strength}</p>
                                <p><strong>약점:</strong> ${comp.weakness}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- 페르소나 -->
                <div class="detail-section">
                    <h3>${project.persona.title}</h3>
                    <p>${project.persona.content}</p>
                    <div class="persona-info">
                        <h4>${project.persona.persona.name} (${project.persona.persona.age}, ${project.persona.persona.job})</h4>
                        <ul>
                            ${project.persona.persona.needs.map(need => `<li>${need}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <!-- 서비스 목표/기능 -->
                <div class="detail-section">
                    <h3>${project.serviceGoal.title}</h3>
                    <p>${project.serviceGoal.content}</p>
                    <div class="asis-tobe">
                        <div class="asis">
                            <h4>AS-IS (현재 상태)</h4>
                            <ul>
                                ${project.serviceGoal.asis.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="tobe">
                            <h4>TO-BE (개선 후 상태)</h4>
                            <ul>
                                ${project.serviceGoal.tobe.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                
                <!-- 와이어프레임 -->
                <div class="detail-section">
                    <h3>${project.wireframe.title}</h3>
                    <p>${project.wireframe.content}</p>
                    <ul>
                        ${project.wireframe.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <!-- 기대효과 -->
                <div class="detail-section">
                    <h3>${project.expectedEffects.title}</h3>
                    <p>${project.expectedEffects.content}</p>
                    <ul>
                        ${project.expectedEffects.effects.map(effect => `<li>${effect}</li>`).join('')}
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
