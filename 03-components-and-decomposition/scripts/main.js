/** main.js
 * This is the main entry point for the application.
 * It is responsible for initializing the application and
 * setting up the event listeners.
 */

import '../components/theme-picker/theme-picker.js';
import '../components/lang-picker/lang-picker.js';
import '../components/article-viewer/article-viewer.js';

document.addEventListener('DOMContentLoaded', () => {
    bindEvents();
    console.log(`Application ready @ ${new Date().toISOString()}`);
});

function bindEvents() {
    const themePicker = document.querySelector('theme-picker');
    const langPicker = document.querySelector('lang-picker');
    const articleViewer = document.querySelector('article-viewer');

    themePicker.addEventListener('theme-changed', (event) => {
        console.log('Theme changed:', event.detail);
    });

    langPicker.addEventListener('lang-changed', (event) => {
        console.log('Language changed:', event.detail);
    });

    articleViewer.addEventListener('article-changed', (event) => {
        console.log('Article changed:', event.detail);
    });
}
