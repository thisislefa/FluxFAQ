// --- ACCORDION LOGIC ---
        const accordionHeaders = document.querySelectorAll('.accordion-header');

        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const content = item.querySelector('.accordion-content');
                const isOpen = item.classList.contains('active');

                // Close all other items (Optional - remove this block if you want multiple open)
                document.querySelectorAll('.accordion-item').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.accordion-content').style.maxHeight = null;
                        otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                    }
                });

                // Toggle current item
                if (isOpen) {
                    item.classList.remove('active');
                    content.style.maxHeight = null;
                    header.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('active');
                    // Set max-height to scrollHeight for smooth animation
                    content.style.maxHeight = content.scrollHeight + "px";
                    header.setAttribute('aria-expanded', 'true');
                }
            });
        });