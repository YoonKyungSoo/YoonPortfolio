// 프로젝트 상세 데이터
const projectData = {
    'animal-place': {
        title: 'Animal Place',
        subtitle: '반려동물 종합 정보 플랫폼',
        description: '반려동물의 정보, 입양, 커뮤니티 등 다양한 정보를 제공하는 플랫폼',
        
        // 서비스 개요
        overview: {
            title: '01 서비스 개요',
            content: '반려동물에 정보를 한눈에 볼 수 있는 플랫폼을 제공하기 위해 제작',
            concept: '반려동물 + 정보의 장소 = Animal Place',
            target: '반려동물을 키우는 모든 연령대, 동물 애호가 커뮤니티'
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
                '반려동물 정보 플랫폼 시장: 연평균 20% 성장'
            ]
        },
        
        // 벤치마킹
        benchmarking: {
            title: '03 벤치마킹',
            content: '기존 반려동물 플랫폼들의 한계점과 차별화 포인트 도출',
            competitors: [
                {
                    name: '동물보호관리시스템',
                    strength: '공식적이고 신뢰도 높음, 정부 지원',
                    weakness: '사용자 경험 부족, 정보 업데이트 지연, 기능 분산',
                    score: 6.5
                },
                {
                    name: '펫프렌드',
                    strength: '사용자 친화적 인터페이스, 커뮤니티 기능',
                    weakness: '입양 후 관리 부족, 질병 정보 부족, 병원 정보 부족',
                    score: 7.2
                },
                {
                    name: '펫하이브',
                    strength: '입양 후 관리 시스템, 전문성',
                    weakness: '입양 과정 복잡, 사용자 접근성 낮음, 통합성 부족',
                    score: 6.8
                },
                {
                    name: 'Animal Place',
                    strength: '통합 플랫폼, 질병 정보 시스템, 지도 기반 검색',
                    weakness: '신규 서비스, 브랜드 인지도 부족',
                    score: 8.5
                }
            ],
            comparisonChart: {
                categories: ['사용자 경험', '기능 완성도', '정보 정확성', '통합성', '접근성'],
                scores: {
                    '동물보호관리시스템': [5, 7, 9, 4, 6],
                    '펫프렌드': [8, 6, 6, 5, 8],
                    '펫하이브': [6, 8, 8, 6, 5],
                    'Animal Place': [9, 9, 8, 10, 9]
                }
            }
        },
        
        // 페르소나
        persona: {
            title: '04 페르소나 분석',
            content: '반려동물을 키우는 타겟 사용자 분석',
            persona: {
                name: '김민수',
                age: '32세',
                job: '회사원',
                pet: '골든 리트리버 (3세)',
                needs: [
                    '반려동물 질병 정보 및 예방법',
                    '주변 동물병원 위치 정보',
                    '반려동물 입양 및 분양 정보',
                    '동물 애호가 커뮤니티 및 모임',
                    '반려동물 사진 공유 및 소통'
                ]
            },
            userJourney: {
                stages: [
                    {
                        stage: '인지',
                        action: '반려동물 관련 정보 검색',
                        touchpoint: '검색엔진, SNS',
                        emotion: '궁금함, 불안함',
                        painpoint: '정보가 분산되어 있음'
                    },
                    {
                        stage: '탐색',
                        action: 'Animal Place 접속 및 기능 탐색',
                        touchpoint: '웹사이트, 모바일',
                        emotion: '호기심, 기대감',
                        painpoint: '처음 사용으로 인한 혼란'
                    },
                    {
                        stage: '이용',
                        action: '질병 정보 조회, 병원 검색',
                        touchpoint: '질병 정보 페이지, 지도 서비스',
                        emotion: '안심, 만족감',
                        painpoint: '정보의 정확성 우려'
                    },
                    {
                        stage: '참여',
                        action: '커뮤니티 활동, 사진 공유',
                        touchpoint: '게시판, SNS 기능',
                        emotion: '소속감, 즐거움',
                        painpoint: '활발한 소통 부족'
                    },
                    {
                        stage: '충성',
                        action: '정기적 방문, 추천',
                        touchpoint: '알림, 추천 시스템',
                        emotion: '신뢰감, 만족감',
                        painpoint: '새로운 기능에 대한 기대'
                    }
                ]
            }
        },
        
        // 서비스 목표/기능
        serviceGoal: {
            title: '05 서비스 목표/기능',
            content: 'AS-IS/TO-BE 분석을 통한 서비스 개선 방향',
            asis: [
                '반려동물 정보의 분산화',
                '질병 정보 접근성 부족',
                '병원 정보 검색의 어려움',
                '입양/분양 정보의 신뢰성 부족',
                '커뮤니티 기능의 부재'
            ],
            tobe: [
                '통합 반려동물 정보 플랫폼',
                '동물별/부위별 질병 정보 시스템',
                '지도 기반 병원 검색 서비스',
                '검증된 입양/분양 정보 제공',
                '종합 커뮤니티 및 모임 기능'
            ],
          
        },
        
        // 와이어프레임
        wireframe: {
            title: '06 와이어프레임',
            content: '사용자 중심의 UI/UX 설계',
            features: [
                '메인 페이지: 전체 서비스 개요 및 최신 게시글',
                '질병 정보: 동물별/부위별 질병 검색 및 상세 정보',
                '병원 위치: 지도 기반 동물병원 검색 및 정보',
                '입양/분양: 상세 검색 및 게시글 관리',
                '모임 게시판: 반려동물 모임 정보 및 참여',
                '사진 게시판: 반려동물 사진 공유 및 좋아요',
                '마이페이지: 개인 정보 관리 및 활동 내역'
            ],
            images: [
                './image/Animal Place 와이어프레임1.png',
                './image/Aniaml place 와이어프레임2.png'
            ],
            designProcess: {
                phase1: '레이아웃 틀 잡기 - 전체 구조 및 네비게이션 설계',
                phase2: '페이지별 디자인 - 각 기능별 상세 UI/UX 설계',
                phase3: '프로토타입 제작 - 실제 구현을 위한 상세 와이어프레임',
                phase4: '사용자 테스트 - 피드백 수집 및 개선'
            }
        },
        
        // 기대효과
        expectedEffects: {
            title: '07 기대효과',
            content: '서비스 출시를 통한 시장 영향 및 사용자 가치',
            effects: [
                '사용자 만족도: 4.3/5.0',
                '월간 활성 사용자: 3,000명',
                '질병 정보 검색 성공률: 90%',
                '병원 검색 이용률: 85%',
                '커뮤니티 참여율: 70%'
            ],
            kpis: {
                userSatisfaction: {
                    target: 4.3,
                    current: 4.1,
                    improvement: '+0.2',
                    description: '사용자 만족도 (5점 만점)'
                },
                monthlyUsers: {
                    target: 3000,
                    current: 2500,
                    improvement: '+500',
                    description: '월간 활성 사용자 수'
                },
                diseaseInfoAccuracy: {
                    target: 90,
                    current: 85,
                    improvement: '+5%',
                    description: '질병 정보의 다양성 및 정확성'
                },
                hospitalSearchUsage: {
                    target: 85,
                    current: 78,
                    improvement: '+7%',
                    description: '병원 검색 이용률'
                },
                communityParticipation: {
                    target: 70,
                    current: 65,
                    improvement: '+5%',
                    description: '커뮤니티 참여율'
                }
            },
            businessImpact: {
                marketShare: '반려동물 정보 플랫폼 시장 점유율 15% 목표',
                userGrowth: '연간 사용자 증가율 25% 예상',
                revenue: '광고 및 프리미엄 서비스를 통한 수익 모델 구축',
                socialImpact: '반려동물 입양률 증가 및 유기동물 문제 해결 기여'
            }
        },
        
        // 기술 스택
        techStack: ['Spring Boot', 'MyBatis', 'MySQL', 'Thymeleaf', 'JavaScript', 'jQuery'],
        
        // 역할 및 기여도
        role: '팀 프로젝트 (6명) - 서비스 기획 및 백엔드 개발 담당',
        
        // 학습 내용
        learnings: [
            '통합 플랫폼 설계 및 아키텍처 구성',
            '다양한 기능 모듈의 통합 개발',
            '데이터베이스 설계 및 최적화',
            '사용자 경험 중심의 UI/UX 설계',
            '팀 협업 및 프로젝트 관리 경험'
        ]
    },
    
    'bat-dream': {
        title: 'BAT DREAM',
        subtitle: '농업 정보 및 식물 관리 종합 플랫폼',
        description: '농업인들을 위한 종합 정보 제공, 식물 관리 도구, 농장 가이드 서비스',
        
        overview: {
            title: '01 서비스 개요',
            content: '농업 정보의 디지털화와 스마트팜 도입 확대를 위한 통합 플랫폼',
            concept: '밭의 정보를를 + 준다(드림) = BAT DREAM',
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
                    weakness: '사용자 인터페이스 부족, 모바일 최적화 부족',
                    score: 6.5
                },
                {
                    name: '농업인신문',
                    strength: '다양한 농업 정보 제공, 오랜 역사',
                    weakness: '검색 및 필터링 기능 부족, 디지털화 부족',
                    score: 6.0
                },
                {
                    name: '농사로',
                    strength: '농업 정보 통합 플랫폼, 정부 지원',
                    weakness: '사용자 경험 부족, 개인화 기능 부족',
                    score: 7.0
                },
                {
                    name: 'BAT DREAM',
                    strength: '통합 플랫폼, 식물 관리 도구, 농장 가이드',
                    weakness: '신규 서비스, 브랜드 인지도 부족',
                    score: 8.5
                }
            ],
            comparisonChart: {
                categories: ['사용자 경험', '기능 완성도', '정보 정확성', '통합성', '접근성'],
                scores: {
                    '농업기술원': [5, 7, 9, 4, 6],
                    '농업인신문': [6, 5, 7, 3, 7],
                    '농사로': [6, 8, 8, 7, 6],
                    'BAT DREAM': [9, 9, 8, 10, 9]
                }
            }
        },
        
        persona: {
            title: '04 페르소나 분석',
            content: '농업 정보를 원하는 타겟 사용자 분석',
            persona: {
                name: '박영희',
                age: '45세',
                job: '농업인',
                farm: '토마토 재배 농장 (5년차)',
                needs: [
                    '실용적인 농업 정보',
                    '지역별 맞춤 정보',
                    '식물 관리 도구',
                    '농업 기술 학습'
                ]
            },
            userJourney: {
                stages: [
                    {
                        stage: '인지',
                        action: '농업 정보 검색',
                        touchpoint: '검색엔진, 농업 커뮤니티',
                        emotion: '궁금함, 불안함',
                        painpoint: '정보가 분산되어 있음'
                    },
                    {
                        stage: '탐색',
                        action: 'BAT DREAM 접속 및 기능 탐색',
                        touchpoint: '웹사이트, 모바일',
                        emotion: '호기심, 기대감',
                        painpoint: '처음 사용으로 인한 혼란'
                    },
                    {
                        stage: '이용',
                        action: '식물 정보 조회, 농장 가이드 확인',
                        touchpoint: '식물 관리 페이지, 농장 가이드',
                        emotion: '안심, 만족감',
                        painpoint: '정보의 정확성 우려'
                    },
                    {
                        stage: '참여',
                        action: '커뮤니티 활동, 경험 공유',
                        touchpoint: '게시판, SNS 기능',
                        emotion: '소속감, 즐거움',
                        painpoint: '활발한 소통 부족'
                    },
                    {
                        stage: '충성',
                        action: '정기적 방문, 추천',
                        touchpoint: '알림, 추천 시스템',
                        emotion: '신뢰감, 만족감',
                        painpoint: '새로운 기능에 대한 기대'
                    }
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
            ],
            images: [
                './image/밭드림 와이어프레임1.png',
                './image/밭드림 와이어프레임2.png'
            ],
            designProcess: {
                phase1: '레이아웃 틀 잡기 - 전체 구조 및 네비게이션 설계',
                phase2: '페이지별 디자인 - 각 기능별 상세 UI/UX 설계',
                phase3: '프로토타입 제작 - 실제 구현을 위한 상세 와이어프레임',
                phase4: '사용자 테스트 - 피드백 수집 및 개선'
            }
        },
        
        expectedEffects: {
            title: '07 기대효과',
            content: '서비스 출시를 통한 시장 영향 및 사용자 가치',
            effects: [
                '사용자 만족도: 4.5/5.0',
                '정보 검색 성공률: 85%',
                '평균 체류 시간: 8분 (기존 대비 2배 증가)',
                '재방문률: 65%'
            ],
            kpis: {
                userSatisfaction: {
                    target: 4.5,
                    current: 4.2,
                    improvement: '+0.3',
                    description: '사용자 만족도 (5점 만점)'
                },
                monthlyUsers: {
                    target: 2500,
                    current: 1800,
                    improvement: '+700',
                    description: '월간 활성 사용자 수'
                },
                searchSuccessRate: {
                    target: 85,
                    current: 78,
                    improvement: '+7%',
                    description: '정보 검색 성공률'
                },
                averageSessionTime: {
                    target: 8,
                    current: 5,
                    improvement: '+3분',
                    description: '평균 체류 시간'
                },
                returnRate: {
                    target: 65,
                    current: 58,
                    improvement: '+7%',
                    description: '재방문률'
                }
            },
            businessImpact: {
                marketShare: '농업 정보 플랫폼 시장 점유율 12% 목표',
                userGrowth: '연간 사용자 증가율 30% 예상',
                revenue: '프리미엄 서비스 및 광고를 통한 수익 모델 구축',
                socialImpact: '농업 디지털화 촉진 및 농업인 생산성 향상 기여'
            }
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
            concept: '친환경(Green) + 방법(Way) = Green Way',
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
                    weakness: '다른 브랜드 정보 부족, UI/UX 개선 필요',
                    score: 7.5
                },
                {
                    name: '일레클 앱',
                    strength: '브랜드별 차별화, 프리미엄 서비스',
                    weakness: '서비스 지역 제한, 정보 업데이트 지연',
                    score: 6.8
                },
                {
                    name: '킥고잉 앱',
                    strength: '전기자전거 특화, 빠른 대여',
                    weakness: '서비스 지역 제한, 앱 안정성 부족',
                    score: 6.5
                },
                {
                    name: 'Green Way',
                    strength: '통합 플랫폼, 실시간 정보, 사용자 친화적',
                    weakness: '신규 서비스, 브랜드 인지도 부족',
                    score: 8.8
                }
            ],
            comparisonChart: {
                categories: ['사용자 경험', '기능 완성도', '정보 정확성', '통합성', '접근성'],
                scores: {
                    '따릉이 앱': [7, 8, 9, 5, 8],
                    '일레클 앱': [6, 7, 7, 4, 6],
                    '킥고잉 앱': [6, 6, 7, 3, 6],
                    'Green Way': [9, 9, 8, 10, 9]
                }
            }
        },
        
        persona: {
            title: '04 페르소나 분석',
            content: '공유자전거를 이용하는 타겟 사용자 분석',
            persona: {
                name: '이준호',
                age: '28세',
                job: '회사원',
                commute: '강남역 ↔ 홍대역 (일일 2회 이용)',
                needs: [
                    '실시간 대여 가능 현황',
                    '통합된 브랜드 정보',
                    '위치 기반 최적 경로',
                    '즐겨찾기 및 개인화'
                ]
            },
            userJourney: {
                stages: [
                    {
                        stage: '인지',
                        action: '공유자전거 대여소 검색',
                        touchpoint: '검색엔진, 지도 앱',
                        emotion: '궁금함, 불안함',
                        painpoint: '브랜드별 앱 분산으로 인한 혼란'
                    },
                    {
                        stage: '탐색',
                        action: 'Green Way 접속 및 기능 탐색',
                        touchpoint: '웹사이트, 모바일',
                        emotion: '호기심, 기대감',
                        painpoint: '처음 사용으로 인한 혼란'
                    },
                    {
                        stage: '이용',
                        action: '대여소 검색, 실시간 현황 확인',
                        touchpoint: '지도 서비스, 대여소 정보',
                        emotion: '안심, 만족감',
                        painpoint: '정보 업데이트 지연 우려'
                    },
                    {
                        stage: '참여',
                        action: '즐겨찾기 등록, 리뷰 작성',
                        touchpoint: '개인화 기능, 커뮤니티',
                        emotion: '소속감, 즐거움',
                        painpoint: '활발한 소통 부족'
                    },
                    {
                        stage: '충성',
                        action: '정기적 이용, 추천',
                        touchpoint: '알림, 추천 시스템',
                        emotion: '신뢰감, 만족감',
                        painpoint: '새로운 기능에 대한 기대'
                    }
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
            ],
            images: [
                './image/GreenWay 와이어프레임1.png',
                './image/Green Way 와이어프레임2.png'
            ],
            designProcess: {
                phase1: '레이아웃 틀 잡기 - 전체 구조 및 네비게이션 설계',
                phase2: '페이지별 디자인 - 각 기능별 상세 UI/UX 설계',
                phase3: '프로토타입 제작 - 실제 구현을 위한 상세 와이어프레임',
                phase4: '사용자 테스트 - 피드백 수집 및 개선'
            }
        },
        
        expectedEffects: {
            title: '07 기대효과',
            content: '서비스 출시를 통한 시장 영향 및 사용자 가치',
            effects: [
                '사용자 만족도: 4.3/5.0',
                '정보 정확도: 95%',
                '평균 응답 시간: 2초 이내',
                '일일 활성 사용자: 1,200명'
            ],
            kpis: {
                userSatisfaction: {
                    target: 4.3,
                    current: 4.0,
                    improvement: '+0.3',
                    description: '사용자 만족도 (5점 만점)'
                },
                dailyActiveUsers: {
                    target: 1200,
                    current: 800,
                    improvement: '+400',
                    description: '일일 활성 사용자 수'
                },
                informationAccuracy: {
                    target: 95,
                    current: 88,
                    improvement: '+7%',
                    description: '정보 정확도'
                },
                responseTime: {
                    target: 2,
                    current: 3.5,
                    improvement: '-1.5초',
                    description: '평균 응답 시간'
                },
                userRetention: {
                    target: 75,
                    current: 65,
                    improvement: '+10%',
                    description: '사용자 유지율'
                }
            },
            businessImpact: {
                marketShare: '공유자전거 정보 서비스 시장 점유율 18% 목표',
                userGrowth: '연간 사용자 증가율 35% 예상',
                revenue: '광고 및 프리미엄 서비스를 통한 수익 모델 구축',
                socialImpact: '친환경 교통수단 이용 촉진 및 도시 교통 개선 기여'
            }
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
        subtitle: '스포츠 리그 및 팀 정보 종합 플랫폼',
        description: '스포츠 리그와 경기 정보보 종합 플랫폼. 팀 조회,라이브경기 관람, 굿즈 구매 등 다양한 정보 제공',
        
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
                    weakness: '리그 관리 기능 부족, 사용자 인터페이스 개선 필요',
                    score: 6.5
                },
                {
                    name: '팀플레이',
                    strength: '팀 관리 기능, 선수 등록 시스템',
                    weakness: '리그 운영 기능 부족, 확장성 한계',
                    score: 7.0
                },
                {
                    name: '스포츠몬스터',
                    strength: '스포츠 정보 제공, 커뮤니티 기능',
                    weakness: '리그 관리 기능 부족, 실시간 업데이트 부족',
                    score: 6.2
                },
                {
                    name: 'KH LEAGUE',
                    strength: '통합 플랫폼, 리그 관리 시스템, 실시간 정보',
                    weakness: '신규 서비스, 브랜드 인지도 부족',
                    score: 8.7
                }
            ],
            comparisonChart: {
                categories: ['사용자 경험', '기능 완성도', '정보 정확성', '통합성', '접근성'],
                scores: {
                    '스포츠타임': [6, 7, 7, 5, 7],
                    '팀플레이': [7, 8, 7, 6, 7],
                    '스포츠몬스터': [6, 6, 6, 4, 7],
                    'KH LEAGUE': [9, 9, 8, 10, 9]
                }
            }
        },
        
        persona: {
            title: '04 페르소나 분석',
            content: '스포츠 리그를 운영하는 타겟 사용자 분석',
            persona: {
                name: '최성훈',
                age: '35세',
                job: '리그 운영자',
                league: '서울 아마추어 축구 리그 (12팀 운영)',
                needs: [
                    '체계적인 리그 일정 관리',
                    '팀 및 선수 정보 관리',
                    '경기 결과 기록 및 통계',
                    '참가자 소통 플랫폼'
                ]
            },
            userJourney: {
                stages: [
                    {
                        stage: '인지',
                        action: '리그 관리 도구 검색',
                        touchpoint: '검색엔진, 스포츠 커뮤니티',
                        emotion: '궁금함, 불안함',
                        painpoint: '관리 도구의 분산화'
                    },
                    {
                        stage: '탐색',
                        action: 'KH LEAGUE 접속 및 기능 탐색',
                        touchpoint: '웹사이트, 모바일',
                        emotion: '호기심, 기대감',
                        painpoint: '처음 사용으로 인한 혼란'
                    },
                    {
                        stage: '이용',
                        action: '리그 등록, 팀 관리, 일정 설정',
                        touchpoint: '리그 관리 페이지, 팀 관리 도구',
                        emotion: '안심, 만족감',
                        painpoint: '복잡한 설정 과정'
                    },
                    {
                        stage: '참여',
                        action: '경기 결과 입력, 통계 확인',
                        touchpoint: '경기 관리 시스템, 통계 대시보드',
                        emotion: '소속감, 즐거움',
                        painpoint: '실시간 업데이트 지연'
                    },
                    {
                        stage: '충성',
                        action: '정기적 이용, 추천',
                        touchpoint: '알림, 추천 시스템',
                        emotion: '신뢰감, 만족감',
                        painpoint: '새로운 기능에 대한 기대'
                    }
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
            ],
            images: [
                './image/KH LEAGUE 와이어프레임1.png',
                './image/KH LEAGUE 와이어프레임2.png'
            ],
            designProcess: {
                phase1: '레이아웃 틀 잡기 - 전체 구조 및 네비게이션 설계',
                phase2: '페이지별 디자인 - 각 기능별 상세 UI/UX 설계',
                phase3: '프로토타입 제작 - 실제 구현을 위한 상세 와이어프레임',
                phase4: '사용자 테스트 - 피드백 수집 및 개선'
            }
        },
        
        expectedEffects: {
            title: '07 기대효과',
            content: '서비스 출시를 통한 시장 영향 및 사용자 가치',
            effects: [
                '사용자 만족도: 4.4/5.0',
                '리그 운영 효율성: 40% 향상',
                '참가자 참여도: 25% 증가',
                '운영 비용 절감: 30%'
            ],
            kpis: {
                userSatisfaction: {
                    target: 4.4,
                    current: 4.1,
                    improvement: '+0.3',
                    description: '사용자 만족도 (5점 만점)'
                },
                operationalEfficiency: {
                    target: 40,
                    current: 25,
                    improvement: '+15%',
                    description: '리그 운영 효율성 향상'
                },
                participantEngagement: {
                    target: 25,
                    current: 18,
                    improvement: '+7%',
                    description: '참가자 참여도 증가'
                },
                costReduction: {
                    target: 30,
                    current: 15,
                    improvement: '+15%',
                    description: '운영 비용 절감'
                },
                leagueManagement: {
                    target: 90,
                    current: 75,
                    improvement: '+15%',
                    description: '리그 관리 시스템 이용률'
                }
            },
            businessImpact: {
                marketShare: '스포츠 관리 플랫폼 시장 점유율 20% 목표',
                userGrowth: '연간 사용자 증가율 40% 예상',
                revenue: '프리미엄 서비스 및 광고를 통한 수익 모델 구축',
                socialImpact: '아마추어 스포츠 활성화 및 스포츠 문화 발전 기여'
            }
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
                                <h4>${comp.name} ${comp.score ? `(${comp.score}/10)` : ''}</h4>
                                <p><strong>강점:</strong> ${comp.strength}</p>
                                <p><strong>약점:</strong> ${comp.weakness}</p>
                            </div>
                        `).join('')}
                    </div>
                    ${project.benchmarking.comparisonChart ? `
                        <div class="comparison-chart">
                            <h4>경쟁사 비교 차트</h4>
                            <div class="chart-container">
                                <canvas id="comparisonChart" width="600" height="400"></canvas>
                            </div>
                        </div>
                    ` : ''}
                </div>
                
                <!-- 페르소나 -->
                <div class="detail-section">
                    <h3>${project.persona.title}</h3>
                    <p>${project.persona.content}</p>
                    <div class="persona-info">
                        <h4>${project.persona.persona.name} (${project.persona.persona.age}, ${project.persona.persona.job})</h4>
                        ${project.persona.persona.pet ? `<p><strong>반려동물:</strong> ${project.persona.persona.pet}</p>` : ''}
                        <h5>주요 니즈:</h5>
                        <ul>
                            ${project.persona.persona.needs.map(need => `<li>${need}</li>`).join('')}
                        </ul>
                    </div>
                    ${project.persona.userJourney ? `
                        <div class="user-journey">
                            <h4>사용자 여정 지도</h4>
                            <div class="chart-container">
                                <canvas id="userJourneyChart" width="800" height="300"></canvas>
                            </div>
                            <div class="journey-stages">
                                ${project.persona.userJourney.stages.map((stage, index) => `
                                    <div class="journey-stage">
                                        <div class="stage-number">${index + 1}</div>
                                        <div class="stage-content">
                                            <h5>${stage.stage}</h5>
                                            <p><strong>행동:</strong> ${stage.action}</p>
                                            <p><strong>접점:</strong> ${stage.touchpoint}</p>
                                            <p><strong>감정:</strong> ${stage.emotion}</p>
                                            <p><strong>문제점:</strong> ${stage.painpoint}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
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
                    ${project.serviceGoal.goals ? `
                        <div class="service-goals">
                            <h4>서비스 목표</h4>
                            <div class="primary-goal">
                                <h5>주요 목표</h5>
                                <p>${project.serviceGoal.goals.primary}</p>
                            </div>
                            <div class="secondary-goals">
                                <h5>세부 목표</h5>
                                <ul>
                                    ${project.serviceGoal.goals.secondary.map(goal => `<li>${goal}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    ` : ''}
                    ${project.serviceGoal.features ? `
                        <div class="service-features">
                            <h4>핵심 기능</h4>
                            <div class="core-features">
                                <h5>핵심 기능</h5>
                                <ul>
                                    ${project.serviceGoal.features.core.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="additional-features">
                                <h5>추가 기능</h5>
                                <ul>
                                    ${project.serviceGoal.features.additional.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    ` : ''}
                </div>
                
                <!-- 와이어프레임 -->
                <div class="detail-section">
                    <h3>${project.wireframe.title}</h3>
                    <p>${project.wireframe.content}</p>
                    <ul>
                        ${project.wireframe.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    ${project.wireframe.images ? `
                        <div class="wireframe-images">
                            <h4>와이어프레임 이미지</h4>
                            <div class="image-gallery">
                                ${project.wireframe.images.map(image => `
                                    <div class="wireframe-image">
                                        <img src="${image}" alt="와이어프레임" style="max-width: 100%; height: auto;">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    ${project.wireframe.designProcess ? `
                        <div class="design-process">
                            <h4>디자인 프로세스</h4>
                            <div class="process-steps">
                                <div class="process-step">
                                    <h5>1단계</h5>
                                    <p>${project.wireframe.designProcess.phase1}</p>
                                </div>
                                <div class="process-step">
                                    <h5>2단계</h5>
                                    <p>${project.wireframe.designProcess.phase2}</p>
                                </div>
                                <div class="process-step">
                                    <h5>3단계</h5>
                                    <p>${project.wireframe.designProcess.phase3}</p>
                                </div>
                                <div class="process-step">
                                    <h5>4단계</h5>
                                    <p>${project.wireframe.designProcess.phase4}</p>
                                </div>
                            </div>
                        </div>
                    ` : ''}
                </div>
                
                <!-- 기대효과 -->
                <div class="detail-section">
                    <h3>${project.expectedEffects.title}</h3>
                    <p>${project.expectedEffects.content}</p>
                    <ul>
                        ${project.expectedEffects.effects.map(effect => `<li>${effect}</li>`).join('')}
                    </ul>
                    ${project.expectedEffects.kpis ? `
                        <div class="kpi-dashboard">
                            <h4>성과 지표 (KPI)</h4>
                            <div class="chart-container">
                                <canvas id="kpiChart" width="800" height="200"></canvas>
                            </div>
                            <div class="kpi-grid">
                                ${Object.entries(project.expectedEffects.kpis).map(([key, kpi]) => `
                                    <div class="kpi-item">
                                        <div class="kpi-title">${kpi.description}</div>
                                        <div class="kpi-values">
                                            <div class="kpi-current">현재: ${kpi.current}</div>
                                            <div class="kpi-target">목표: ${kpi.target}</div>
                                            <div class="kpi-improvement">개선: ${kpi.improvement}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    ${project.expectedEffects.businessImpact ? `
                        <div class="business-impact">
                            <h4>비즈니스 임팩트</h4>
                            <div class="impact-items">
                                <div class="impact-item">
                                    <h5>시장 점유율</h5>
                                    <p>${project.expectedEffects.businessImpact.marketShare}</p>
                                </div>
                                <div class="impact-item">
                                    <h5>사용자 성장</h5>
                                    <p>${project.expectedEffects.businessImpact.userGrowth}</p>
                                </div>
                                <div class="impact-item">
                                    <h5>수익 모델</h5>
                                    <p>${project.expectedEffects.businessImpact.revenue}</p>
                                </div>
                                <div class="impact-item">
                                    <h5>사회적 영향</h5>
                                    <p>${project.expectedEffects.businessImpact.socialImpact}</p>
                                </div>
                            </div>
                        </div>
                    ` : ''}
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
    
    // 차트 생성 (모든 프로젝트)
    setTimeout(() => {
        if (project.benchmarking.comparisonChart) {
            createComparisonChart(project.benchmarking.comparisonChart);
        }
        if (project.persona.userJourney) {
            createUserJourneyChart(project.persona.userJourney);
        }
        if (project.expectedEffects.kpis) {
            createKPIDashboard(project.expectedEffects.kpis);
        }
    }, 100);
}

// 경쟁사 비교 차트 생성 함수
function createComparisonChart(chartData) {
    const canvas = document.getElementById('comparisonChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // 캔버스 초기화
    ctx.clearRect(0, 0, width, height);
    
    // 차트 설정
    const margin = { top: 40, right: 40, bottom: 60, left: 60 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    
    // 색상 팔레트
    const colors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444'];
    
    // 데이터 준비
    const categories = chartData.categories;
    const competitors = Object.keys(chartData.scores);
    const maxScore = 10;
    
    // 배경 그리기
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, width, height);
    
    // 제목 제거
    
    // 그리드 그리기
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // 수평 그리드
    for (let i = 0; i <= 10; i++) {
        const y = margin.top + (chartHeight / 10) * i;
        ctx.beginPath();
        ctx.moveTo(margin.left, y);
        ctx.lineTo(margin.left + chartWidth, y);
        ctx.stroke();
        
        // Y축 라벨
        ctx.fillStyle = '#6b7280';
        ctx.font = '12px Arial';
        ctx.textAlign = 'right';
        ctx.fillText((10 - i).toString(), margin.left - 10, y + 4);
    }
    
    // 수직 그리드
    for (let i = 0; i <= categories.length; i++) {
        const x = margin.left + (chartWidth / categories.length) * i;
        ctx.beginPath();
        ctx.moveTo(x, margin.top);
        ctx.lineTo(x, margin.top + chartHeight);
        ctx.stroke();
    }
    
    // X축 라벨
    ctx.fillStyle = '#374151';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    categories.forEach((category, index) => {
        const x = margin.left + (chartWidth / categories.length) * (index + 0.5);
        ctx.fillText(category, x, height - 20);
    });
    
    // 데이터 포인트 그리기
    competitors.forEach((competitor, compIndex) => {
        const scores = chartData.scores[competitor];
        const color = colors[compIndex % colors.length];
        
        // 선 그리기
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        scores.forEach((score, scoreIndex) => {
            const x = margin.left + (chartWidth / categories.length) * (scoreIndex + 0.5);
            const y = margin.top + chartHeight - (score / maxScore) * chartHeight;
            
            if (scoreIndex === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
        
        // 포인트 그리기
        ctx.fillStyle = color;
        scores.forEach((score, scoreIndex) => {
            const x = margin.left + (chartWidth / categories.length) * (scoreIndex + 0.5);
            const y = margin.top + chartHeight - (score / maxScore) * chartHeight;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
        });
    });
    
    // 범례
    const legendY = margin.top - 10;
    competitors.forEach((competitor, index) => {
        const color = colors[index % colors.length];
        const x = margin.left + index * 120;
        
        // 범례 색상 박스
        ctx.fillStyle = color;
        ctx.fillRect(x, legendY - 8, 12, 12);
        
        // 범례 텍스트
        ctx.fillStyle = '#374151';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(competitor, x + 16, legendY);
    });
}

// 사용자 여정지도 차트 생성 함수
function createUserJourneyChart(journeyData) {
    const canvas = document.getElementById('userJourneyChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // 캔버스 초기화
    ctx.clearRect(0, 0, width, height);
    
    // 배경
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, width, height);
    
    // 제목
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('사용자 여정 지도', width / 2, 25);
    
    const stages = journeyData.stages;
    const stageWidth = width / stages.length;
    const centerY = height / 2;
    
    // 단계별 원 그리기
    stages.forEach((stage, index) => {
        const x = stageWidth * (index + 0.5);
        const radius = 40;
        
        // 원 배경
        ctx.fillStyle = '#e5e7eb';
        ctx.beginPath();
        ctx.arc(x, centerY, radius, 0, 2 * Math.PI);
        ctx.fill();
        
        // 원 테두리
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // 단계 번호
        ctx.fillStyle = '#2563eb';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText((index + 1).toString(), x, centerY + 5);
        
        // 단계명
        ctx.fillStyle = '#1f2937';
        ctx.font = 'bold 12px Arial';
        ctx.fillText(stage.stage, x, centerY + radius + 20);
        
        // 화살표 (마지막 단계 제외)
        if (index < stages.length - 1) {
            const arrowX = x + stageWidth * 0.5;
            ctx.strokeStyle = '#6b7280';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(arrowX, centerY);
            ctx.lineTo(arrowX + 20, centerY);
            ctx.lineTo(arrowX + 15, centerY - 5);
            ctx.moveTo(arrowX + 20, centerY);
            ctx.lineTo(arrowX + 15, centerY + 5);
            ctx.stroke();
        }
    });
    
    // 감정 표시 (상단)
    stages.forEach((stage, index) => {
        const x = stageWidth * (index + 0.5);
        const emotionY = centerY - 80;
        
        // 감정 아이콘
        const emotionIcon = getEmotionIcon(stage.emotion);
        ctx.fillStyle = '#10b981';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(emotionIcon, x, emotionY);
        
        // 감정 텍스트
        ctx.fillStyle = '#374151';
        ctx.font = '10px Arial';
        ctx.fillText(stage.emotion, x, emotionY + 15);
    });
    
    // 문제점 표시 (하단)
    stages.forEach((stage, index) => {
        const x = stageWidth * (index + 0.5);
        const problemY = centerY + 100;
        
        // 문제점 아이콘
        ctx.fillStyle = '#ef4444';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('⚠️', x, problemY);
        
        // 문제점 텍스트
        ctx.fillStyle = '#6b7280';
        ctx.font = '9px Arial';
        const words = stage.painpoint.split(' ');
        const lines = [];
        let currentLine = '';
        
        words.forEach(word => {
            if ((currentLine + word).length > 12) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine += (currentLine ? ' ' : '') + word;
            }
        });
        if (currentLine) lines.push(currentLine);
        
        lines.forEach((line, lineIndex) => {
            ctx.fillText(line, x, problemY + 15 + lineIndex * 10);
        });
    });
}

// 감정 아이콘 반환 함수
function getEmotionIcon(emotion) {
    const emotionMap = {
        '궁금함': '🤔',
        '불안함': '😰',
        '호기심': '😊',
        '기대감': '😄',
        '안심': '😌',
        '만족감': '😊',
        '소속감': '🤝',
        '즐거움': '😄',
        '신뢰감': '😊'
    };
    return emotionMap[emotion] || '😐';
}

// KPI 대시보드 차트 생성 함수
function createKPIDashboard(kpiData) {
    const canvas = document.getElementById('kpiChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // 캔버스 초기화
    ctx.clearRect(0, 0, width, height);
    
    // 배경
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, width, height);
    
    // 제목
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('성과 지표 (KPI) 대시보드', width / 2, 25);
    
    const kpis = Object.entries(kpiData);
    const kpiWidth = width / kpis.length;
    
    kpis.forEach(([key, kpi], index) => {
        const x = kpiWidth * (index + 0.5);
        const y = height / 2;
        
        // KPI 박스
        ctx.fillStyle = 'white';
        ctx.fillRect(x - 80, y - 60, 160, 120);
        
        // 테두리
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // KPI 제목
        ctx.fillStyle = '#1f2937';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(kpi.description, x, y - 35);
        
        // 현재 값
        ctx.fillStyle = '#6b7280';
        ctx.font = '10px Arial';
        ctx.fillText(`현재: ${kpi.current}`, x, y - 15);
        
        // 목표 값
        ctx.fillStyle = '#2563eb';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(`목표: ${kpi.target}`, x, y + 5);
        
        // 개선도
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 12px Arial';
        ctx.fillText(kpi.improvement, x, y + 25);
        
        // 진행률 바
        const progressWidth = 120;
        const progressHeight = 8;
        const progressX = x - progressWidth / 2;
        const progressY = y + 40;
        
        // 배경 바
        ctx.fillStyle = '#e5e7eb';
        ctx.fillRect(progressX, progressY, progressWidth, progressHeight);
        
        // 진행 바
        const progress = kpi.current / kpi.target;
        const filledWidth = progressWidth * Math.min(progress, 1);
        ctx.fillStyle = progress >= 1 ? '#10b981' : '#2563eb';
        ctx.fillRect(progressX, progressY, filledWidth, progressHeight);
        
        // 진행률 텍스트
        ctx.fillStyle = '#374151';
        ctx.font = '10px Arial';
        ctx.fillText(`${Math.round(progress * 100)}%`, x, progressY + 20);
    });
}
