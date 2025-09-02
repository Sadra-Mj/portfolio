const title = document.getElementById('scrollTitle');
const footer = document.getElementById('scrollFooter');
const arrow = document.getElementById('arrow');
const subtitle = document.getElementById('scrollSubtitle');

function onScroll() {
    // How far you scrolled (0 = top, increases as you scroll down)
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight; // full screen height
    const progress = Math.min(scrollY / maxScroll, 1); // clamp 0–1

    // H1 zoom + fade
    const scale = 1 + progress * 2;
    title.style.transform = `scale(${scale})`;
    title.style.opacity = 1 - progress;

    // H3 + footer fade only
    const subOpacity = 1 - progress * 5;
    const footOpacity = 1 - progress * 3;



    subtitle.style.opacity = Math.max(subOpacity, 0);
    footer.style.opacity = Math.max(footOpacity, 0);

}

window.addEventListener('scroll', onScroll, { passive: true });


