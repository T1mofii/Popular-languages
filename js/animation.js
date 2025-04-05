document.querySelectorAll('.item-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#home' || targetId === '#') {
            // Особый случай для прокрутки на самый верх
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            history.pushState(null, null, ' ');
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        // Получаем позицию элемента относительно документа
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 60; // 80px - высота хедера

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Обновляем URL
        history.pushState(null, null, targetId);
    });
});