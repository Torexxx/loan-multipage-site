import MainSlider from './modules/slider/slider-main';
import VideoPlayes from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({btns: '.next', page: ".page"});
    slider.render();
    const video = new VideoPlayes('.showup .play', '.overlay');
    video.init();

})