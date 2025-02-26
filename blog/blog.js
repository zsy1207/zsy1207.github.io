// 博客页面脚本
document.addEventListener('DOMContentLoaded', () => {
    // 初始状态设置
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
    
    // 检查本地存储中的语言设置
    const savedLanguage = localStorage.getItem('language') || 'en';
    toggleLanguage(savedLanguage);
    
    // 添加语言切换事件监听器
    if (zhBtn && enBtn) {
        zhBtn.addEventListener('click', () => toggleLanguage('zh'));
        enBtn.addEventListener('click', () => toggleLanguage('en'));
    }
    
    // 添加平滑滚动
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
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // 滚动时固定导航栏
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navContainer.classList.add('sticky');
            } else {
                navContainer.classList.remove('sticky');
            }
        });
    }
    
    // 初始化页面动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease';
        document.body.style.opacity = '1';
    }, 100);

    // 添加博客分类点击效果与筛选功能
    initBlogCategories();
});

// 初始化导航栏
function initNavigation() {
    // 添加导航项激活效果
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.parentElement.classList.contains('dropdown') || link.classList.contains('dropdown-toggle')) return;
        
        link.addEventListener('click', function() {
            navLinks.forEach(l => {
                if (!l.parentElement.classList.contains('dropdown') && !l.classList.contains('dropdown-toggle')) {
                    l.classList.remove('active');
                }
            });
            this.classList.add('active');
        });
    });
    
    // 添加语言切换下拉菜单交互
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.nav-link');
        
        trigger.addEventListener('click', function(e) {
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
    
    // 添加博客分类点击效果
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', function() {
            categories.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            // 这里可以添加过滤博客文章的逻辑
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
}

// 初始化博客分类功能
function initBlogCategories() {
    const categories = document.querySelectorAll('.blog-category');
    if (categories.length > 0) {
        categories.forEach(category => {
            category.addEventListener('click', function(e) {
                e.preventDefault();
                
                // 更新活动类名
                categories.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                
                // 获取选择的分类
                const selectedCategory = this.getAttribute('data-category');
                
                // 筛选博客卡片
                filterBlogCards(selectedCategory);
                
                // 保存当前分类到会话存储
                sessionStorage.setItem('selectedCategory', selectedCategory);
            });
        });
        
        // 检查会话存储中是否有保存的分类
        const savedCategory = sessionStorage.getItem('selectedCategory');
        if (savedCategory) {
            // 找到对应的分类按钮并模拟点击
            const categoryBtn = document.querySelector(`.blog-category[data-category="${savedCategory}"]`);
            if (categoryBtn) {
                categoryBtn.click();
            }
        }
    }
}

// 筛选博客卡片
function filterBlogCards(category) {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            const cardCategories = card.getAttribute('data-categories')?.split(' ') || [];
            if (cardCategories.includes(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// 更新标签点击处理功能
function setupTagNavigation() {
    const blogTags = document.querySelectorAll('.blog-tag');
    blogTags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            if (this.hasAttribute('data-category')) {
                e.preventDefault();
                const category = this.getAttribute('data-category');
                
                // 如果在博客详情页，需要跳转到博客首页
                if (!window.location.pathname.endsWith('index.html')) {
                    // 保存选择的分类到会话存储
                    sessionStorage.setItem('selectedCategory', category);
                    window.location.href = 'index.html';
                } else {
                    // 如果已经在博客首页，直接激活对应分类
                    const categoryBtn = document.querySelector(`.blog-category[data-category="${category}"]`);
                    if (categoryBtn) {
                        categoryBtn.click();
                    }
                }
            }
        });
    });
    
    // 检查页面加载时是否需要选中特定标签
    if (window.location.pathname.endsWith('index.html')) {
        const savedCategory = sessionStorage.getItem('selectedCategory');
        if (savedCategory) {
            const categoryBtn = document.querySelector(`.blog-category[data-category="${savedCategory}"]`);
            if (categoryBtn) {
                setTimeout(() => {
                    categoryBtn.click();
                }, 100);
            }
        }
    }
}

// 增强页面交互效果
function enhancePageInteractions() {
    // 为博客卡片添加悬停效果
    const blogCards = document.querySelectorAll('.blog-card');
    if (blogCards.length > 0) {
        blogCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease';
            });
        });
    }
    
    // 为标签添加涟漪效果
    const tags = document.querySelectorAll('.blog-tag, .blog-category');
    if (tags.length > 0) {
        tags.forEach(tag => {
            tag.addEventListener('click', function(e) {
                // 创建涟漪元素
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                this.appendChild(ripple);
                
                // 设置涟漪位置
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = e.clientX - rect.left - size/2 + 'px';
                ripple.style.top = e.clientY - rect.top - size/2 + 'px';
                
                // 动画结束后移除元素
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
}

// 在页面加载时调用新增函数
document.addEventListener('DOMContentLoaded', function() {
    setupTagNavigation();
    enhancePageInteractions();
    
    // 添加平滑滚动到文章头部
    if (document.querySelector('.blog-post')) {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 100);
    }
});