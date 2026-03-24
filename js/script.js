// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// フォーム送信
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('メッセージを送信しました！');
    this.reset();
});