document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("main-content");

  // 인트로 2초 후 페이드아웃 및 메인 보여주기
  setTimeout(() => {
    intro.classList.add("hide");
    setTimeout(() => {
      intro.style.display = "none";
      mainContent.style.display = "block";
    }, 1000);
  }, 2000);

  // 왼쪽 메뉴 클릭 시 오른쪽 스크롤 이동
  const timelineTexts = document.querySelectorAll(".timeline-text");
  const rightMain = document.querySelector(".right-main");

  timelineTexts.forEach(text => {
    text.addEventListener("click", () => {
      const index = text.getAttribute("data-index");
      // 섹션 선택
      const targetSection = document.getElementById(`section${index}`);

      if (targetSection) {
        // 스크롤 이동
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

        // active 클래스 토글
        timelineTexts.forEach(t => t.classList.remove("active"));
        text.classList.add("active");
      }
    });
  });

  // 초기 active 세팅
  timelineTexts[0].classList.add("active");

  // 프로젝트 탭 기능
  const tabButtons = document.querySelectorAll(".tab-btn");
  const projectContents = document.querySelectorAll(".project-content");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const projIndex = btn.getAttribute("data-project");

      tabButtons.forEach(b => b.classList.remove("active"));
      projectContents.forEach(pc => pc.classList.remove("active"));

      btn.classList.add("active");
      const activeContent = document.querySelector(`.project-content[data-project="${projIndex}"]`);
      if (activeContent) activeContent.classList.add("active");
    });
  });
});
