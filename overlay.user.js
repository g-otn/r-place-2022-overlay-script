// ==UserScript==
// @name         r/place 2022 Image Overlay
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Script that adds a button to toggle an hardcoded image shown in the 2022's r/place canvas
// @author       g-otn
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png
// @grant        none
// ==/UserScript==

if (window.top !== window.self) {
  addEventListener('load', () => {
    // ==============================================

    const OVERLAY_IMAGE_MAX_OPACITY = 0.9;

    // ==============================================
    // Insert image

    const img = document.createElement('img');
    img.style.pointerEvents = 'none';
    img.style.position = 'absolute';
    img.style.imageRendering = 'pixelated';
    img.style.opacity = OVERLAY_IMAGE_MAX_OPACITY;
    img.style.outline = '5px inset grey';

    const mainContainer = document
      .querySelector('mona-lisa-embed')
      .shadowRoot.querySelector('.layout');
    const positionContainer = mainContainer
      .querySelector('mona-lisa-canvas')
      .shadowRoot.querySelector('.container');
    positionContainer.appendChild(img);

    // ==============================================
    // Add button to toggle overlay

    const pillButtonContainer = mainContainer.querySelector(
      'mona-lisa-status-pill'
    ).shadowRoot;

    const toggleOverlay = (e) => {
      img.style.opacity === OVERLAY_IMAGE_MAX_OPACITY.toString()
        ? (img.style.opacity = '0')
        : (img.style.opacity = OVERLAY_IMAGE_MAX_OPACITY);
    };

    const loadOverlay = (e) => {
      const {
        url,
        x,
        y,
        name = '(unnamed)',
      } = JSON.parse(window.prompt('Paste the overlay settings JSON to load'));

      img.src = url;
      img.style.top = `${y}px`;
      img.style.left = `${x}px`;
      pillButtonContainer.querySelector(
        '#overlay-toggle-child'
      ).innerText = `Toggle overlay for '${name}'`;
    };

    const createButton = (text, onClick, id) => {
      const buttonChild = document.createElement('div');
      buttonChild.classList.add('pill');
      buttonChild.style.marginLeft = '50px';
      buttonChild.innerText = text;
      if (id) {
        buttonChild.id = id;
      }
      const button = document.createElement('button');
      button.onclick = onClick;
      button.appendChild(buttonChild);

      pillButtonContainer.appendChild(button);
    };

    createButton(
      'Toggle overlay (unloaded)',
      toggleOverlay,
      'overlay-toggle-child'
    );

    createButton('Load settings', loadOverlay);
  });
}
