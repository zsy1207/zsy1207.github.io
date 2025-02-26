// 默认显示英文
document.addEventListener('DOMContentLoaded', () => {
    const zhBtn = document.getElementById('zhBtn');
    const enBtn = document.getElementById('enBtn');
    
    // 初始状态
    zhBtn.classList.remove('active');
    enBtn.classList.add('active');
    
    // 初始化导航栏
    initNavigation();
    
    // 检查本地存储中的主题设置
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        document.getElementById('light-icon').style.display = 'none';
        document.getElementById('dark-icon').style.display = 'block';
    }
    
    // 添加滚动动画
    addScrollAnimations();
    
    // 检查本地存储中的语言设置
    const savedLanguage = localStorage.getItem('language') || 'en';
    toggleLanguage(savedLanguage);
    
    // 添加语言切换事件监听器
    if (zhBtn && enBtn) {
        zhBtn.addEventListener('click', () => toggleLanguage('zh'));
        enBtn.addEventListener('click', () => toggleLanguage('en'));
    }
    
    // 初始化页面
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // 添加卡片悬停效果
    addCardHoverEffects();
});

// 初始化导航栏
function initNavigation() {
    // 添加导航项激活效果
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') !== '#' && link.getAttribute('href') !== null) {
            const isCurrentPage = window.location.pathname.includes(link.getAttribute('href'));
            if (isCurrentPage) {
                link.classList.add('active');
                document.querySelectorAll('.nav-link').forEach(l => {
                    if (l !== link) l.classList.remove('active');
                });
            }
        }
    });
    
    // 添加语言切换下拉菜单交互
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.nav-link');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        // 触摸设备支持
        trigger.addEventListener('touchstart', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
            
            // 关闭其他打开的下拉菜单
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                    otherDropdown.classList.remove('active');
                }
            });
        });
        
        // 点击页面其他区域关闭下拉菜单
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
}

function toggleLanguage(lang) {
    const zhElements = document.querySelectorAll('.zh');
    const enElements = document.querySelectorAll('.en');
    const zhBtn = document.getElementById('zhBtn');
    const enBtn = document.getElementById('enBtn');
    
    if (lang === 'zh') {
        zhElements.forEach(el => el.style.display = 'block');
        enElements.forEach(el => el.style.display = 'none');
        zhBtn.classList.add('active');
        enBtn.classList.remove('active');
        document.documentElement.setAttribute('lang', 'zh');
    } else {
        zhElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'block');
        enBtn.classList.add('active');
        zhBtn.classList.remove('active');
        document.documentElement.setAttribute('lang', 'en');
    }
    
    // 保存语言设置到本地存储
    localStorage.setItem('language', lang);
}

// 切换暗黑模式
function toggleTheme() {
    const root = document.documentElement;
    const lightIcon = document.getElementById('light-icon');
    const darkIcon = document.getElementById('dark-icon');
    
    if (root.classList.contains('dark-mode')) {
        root.classList.remove('dark-mode');
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
        localStorage.setItem('theme', 'light');
    } else {
        root.classList.add('dark-mode');
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
        localStorage.setItem('theme', 'dark');
    }
    
    // 添加过渡动画
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    
    // 重新应用卡片悬停效果
    addCardHoverEffects();
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// 返回顶部按钮
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // 导航栏滚动效果
    const mainNav = document.querySelector('.main-nav');
    if (window.scrollY > 10) {
        mainNav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        mainNav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    // 检查滚动位置，触发动画
    animateOnScroll();
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 添加滚动动画
function addScrollAnimations() {
    const sectionCards = document.querySelectorAll('.section-card');
    sectionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        card.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // 初始触发一次动画
    setTimeout(() => {
        animateOnScroll();
    }, 100);
}

// 滚动时触发动画
function animateOnScroll() {
    const sectionCards = document.querySelectorAll('.section-card');
    sectionCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.1;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// 添加卡片悬停效果
function addCardHoverEffects() {
    document.querySelectorAll('.section-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
    
    // 添加联系方式项悬停效果
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });
} 