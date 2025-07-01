document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("main-content");

  // 인트로가 이미 숨겨져 있는지 확인
  if (sessionStorage.getItem('introShown')) {
    intro.style.display = "none";
    mainContent.style.display = "block";
  } else {
    // 인트로 2초 후 페이드아웃 및 메인 보여주기
    setTimeout(() => {
      intro.classList.add("hide");
      setTimeout(() => {
        intro.style.display = "none";
        mainContent.style.display = "block";
        // 인트로가 표시되었음을 세션에 저장
        sessionStorage.setItem('introShown', 'true');
      }, 1000);
    }, 2000);
  }

  // 스크롤 애니메이션
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  
  const observerOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  portfolioItems.forEach(item => {
    observer.observe(item);
  });

  // 프로젝트 클릭 이벤트
  portfolioItems.forEach(item => {
    item.addEventListener("click", () => {
      const projectId = item.getAttribute("data-project");
      // 기존 창에서 이동하도록 수정
      window.location.href = `./project${projectId}.html`;
    });
  });

  // 깃허브 버튼 클릭 시 부모 클릭 이벤트 전파 방지
  document.querySelectorAll('.github-link-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      // 기본 동작(깃허브 이동)은 그대로 유지
    });
  });

  // 스크롤 인디케이터 클릭 시 포트폴리오 섹션으로 스크롤
  const scrollIndicator = document.querySelector(".scroll-indicator");
  const portfolioSection = document.querySelector(".portfolio-section");
  
  scrollIndicator.addEventListener("click", () => {
    portfolioSection.scrollIntoView({ 
      behavior: "smooth", 
      block: "start" 
    });
  });

  // 스크롤 시 헤더 텍스트 효과
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const headerQuote = document.querySelector(".header-quote");
    
    if (headerQuote) {
      const opacity = Math.max(0, 1 - scrolled / 500);
      headerQuote.style.opacity = opacity;
      headerQuote.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });
});
