import Slider from './modules/slider';
import VideoPlayes from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');
    slider.render();
    const video = new VideoPlayes('.showup .play', '.overlay');
    video.init();

})