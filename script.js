// 默认显示英文
document.addEventListener('DOMContentLoaded', () => {
    const zhBtn = document.getElementById('zhBtn');
    const enBtn = document.getElementById('enBtn');
    
    // 初始状态
    zhBtn.classList.remove('active');
    enBtn.classList.add('active');
});

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
    } else {
        zhElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'block');
        zhBtn.classList.remove('active');
        enBtn.classList.add('active');
    }
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 返回顶部按钮
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 页面加载完成后的动画
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
}); 