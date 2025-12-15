// Composable for scroll reveal animations using IntersectionObserver
import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
    let observer = null

    const initObserver = () => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                    // Optional: unobserve after revealing to improve performance
                    // observer.unobserve(entry.target)
                }
            })
        }, options)

        // Observe all elements with reveal classes
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
        revealElements.forEach(el => observer.observe(el))
    }

    onMounted(() => {
        // Small delay to ensure DOM is ready
        setTimeout(initObserver, 100)
    })

    onUnmounted(() => {
        if (observer) {
            observer.disconnect()
        }
    })

    return {
        initObserver
    }
}
