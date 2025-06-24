document.addEventListener("DOMContentLoaded", () => {
  // 스크롤 애니메이션
  const sections = document.querySelectorAll(".project-section");
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.style.animationPlayState = "paused";
    observer.observe(section);
  });

  // 네비게이션 스크롤 효과
  const navbar = document.querySelector(".navbar");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // 아래로 스크롤
      navbar.style.transform = "translateY(-100%)";
    } else {
      // 위로 스크롤
      navbar.style.transform = "translateY(0)";
    }
    
    lastScrollTop = scrollTop;
  });

  // 아키텍처 레이어 호버 효과
  const layers = document.querySelectorAll(".layer");
  layers.forEach((layer, index) => {
    layer.addEventListener("mouseenter", () => {
      // 이전 레이어들도 함께 하이라이트
      for (let i = 0; i <= index; i++) {
        layers[i].style.borderColor = "#00d4aa";
        layers[i].style.transform = `translateX(${(index - i) * 5}px)`;
      }
    });

    layer.addEventListener("mouseleave", () => {
      layers.forEach(l => {
        l.style.borderColor = "#333";
        l.style.transform = "translateX(0)";
      });
    });
  });

  // 결과 숫자 카운터 애니메이션
  const resultNumbers = document.querySelectorAll(".result-number");
  
  const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = target.textContent;
        const isPercentage = finalValue.includes('%');
        const isTime = finalValue.includes('초');
        
        let startValue = 0;
        const endValue = parseFloat(finalValue.replace(/[^\d.]/g, ''));
        const duration = 2000;
        const increment = endValue / (duration / 16);
        
        const timer = setInterval(() => {
          startValue += increment;
          if (startValue >= endValue) {
            startValue = endValue;
            clearInterval(timer);
          }
          
          if (isPercentage) {
            target.textContent = Math.floor(startValue) + '%';
          } else if (isTime) {
            target.textContent = startValue.toFixed(1) + '초';
          } else {
            target.textContent = Math.floor(startValue);
          }
        }, 16);
        
        numberObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  resultNumbers.forEach(number => {
    numberObserver.observe(number);
  });

  // 부드러운 스크롤
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 이미지 로딩 최적화
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
  });

  // 모바일 메뉴 토글 (필요시)
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
});

// 이미지 갤러리 기능
const galleryStates = {};

// 갤러리 토글 함수
function toggleGallery(galleryId) {
  const gallery = document.getElementById(galleryId);
  if (!gallery) return;
  
  if (gallery.classList.contains('active')) {
    closeGallery(galleryId);
  } else {
    openGallery(galleryId);
  }
}

// 갤러리 열기
function openGallery(galleryId) {
  const gallery = document.getElementById(galleryId);
  if (!gallery) return;
  
  // 다른 갤러리들 닫기
  document.querySelectorAll('.image-gallery.active').forEach(g => {
    if (g.id !== galleryId) {
      g.classList.remove('active');
    }
  });
  
  gallery.classList.add('active');
  galleryStates[galleryId] = { currentSlide: 0 };
  updateGalleryIndicators(galleryId);
  
  // 스크롤을 갤러리로 이동
  gallery.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 갤러리 닫기
function closeGallery(galleryId) {
  const gallery = document.getElementById(galleryId);
  if (!gallery) return;
  
  gallery.classList.remove('active');
  delete galleryStates[galleryId];
}

// 슬라이드 변경
function changeSlide(galleryId, direction) {
  const gallery = document.getElementById(galleryId);
  if (!gallery) return;
  
  const slides = gallery.querySelectorAll('.gallery-slide');
  const totalSlides = slides.length;
  
  if (!galleryStates[galleryId]) {
    galleryStates[galleryId] = { currentSlide: 0 };
  }
  
  let currentSlide = galleryStates[galleryId].currentSlide;
  currentSlide += direction;
  
  // 순환 슬라이드
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  
  galleryStates[galleryId].currentSlide = currentSlide;
  
  const slidesContainer = gallery.querySelector('.gallery-slides');
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  updateGalleryIndicators(galleryId);
}

// 특정 슬라이드로 이동
function goToSlide(galleryId, slideIndex) {
  const gallery = document.getElementById(galleryId);
  if (!gallery) return;
  
  const slides = gallery.querySelectorAll('.gallery-slide');
  if (slideIndex < 0 || slideIndex >= slides.length) return;
  
  if (!galleryStates[galleryId]) {
    galleryStates[galleryId] = { currentSlide: 0 };
  }
  
  galleryStates[galleryId].currentSlide = slideIndex;
  
  const slidesContainer = gallery.querySelector('.gallery-slides');
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
  
  updateGalleryIndicators(galleryId);
}

// 인디케이터 업데이트
function updateGalleryIndicators(galleryId) {
  const gallery = document.getElementById(galleryId);
  if (!gallery) return;
  
  const indicators = gallery.querySelectorAll('.gallery-indicator');
  const currentSlide = galleryStates[galleryId]?.currentSlide || 0;
  
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// 키보드 네비게이션
document.addEventListener('keydown', (e) => {
  const activeGallery = document.querySelector('.image-gallery.active');
  if (!activeGallery) return;
  
  const galleryId = activeGallery.id;
  
  switch (e.key) {
    case 'ArrowLeft':
      changeSlide(galleryId, -1);
      break;
    case 'ArrowRight':
      changeSlide(galleryId, 1);
      break;
    case 'Escape':
      closeGallery(galleryId);
      break;
  }
});

// 터치 스와이프 지원 (모바일)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const activeGallery = document.querySelector('.image-gallery.active');
  if (!activeGallery) return;
  
  const galleryId = activeGallery.id;
  const swipeThreshold = 50;
  
  if (touchEndX < touchStartX - swipeThreshold) {
    // 왼쪽으로 스와이프 - 다음 슬라이드
    changeSlide(galleryId, 1);
  } else if (touchEndX > touchStartX + swipeThreshold) {
    // 오른쪽으로 스와이프 - 이전 슬라이드
    changeSlide(galleryId, -1);
  }
} 