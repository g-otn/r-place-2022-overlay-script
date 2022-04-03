// Correct Window (canvas iframe)
if (top !== self && document.title === 'Reddit A1 2022') {
  // ==============================================
  const PIXEL_ART_TOP_LEFT_X = 777;
  const PIXEL_ART_TOP_LEFT_Y = 141;
  const PIXEL_ART_SQUARE_WIDTH = 21;
  const PIXEL_ART_SQUARE_HEIGHT = 32;

  const OVERLAY_IMAGE_URL =
    'https://media.discordapp.net/attachments/959925405068972103/959979992077463562/unknown.png';
  const OVERLAY_IMAGE_MAX_OPACITY = 0.9;

  // ==============================================
  // Insert image

  const img = document.createElement('img');
  img.src = OVERLAY_IMAGE_URL;
  img.style.pointerEvents = 'none';
  img.style.position = 'absolute';
  img.style.top = `${PIXEL_ART_TOP_LEFT_Y}px`;
  img.style.left = `${PIXEL_ART_TOP_LEFT_X}px`;
  img.style.width = `${PIXEL_ART_SQUARE_WIDTH}px`;
  img.style.height = `${PIXEL_ART_SQUARE_HEIGHT}px`;
  img.style.imageRendering = 'pixelated';
  img.style.opacity = OVERLAY_IMAGE_MAX_OPACITY;
  img.style.outline = '5px inset grey';

  const mainContainer = Array.from(
    document.getElementsByTagName('mona-lisa-embed')[0].shadowRoot.children
  ).find((e) => e?.classList?.contains('layout'));
  const positionContainer = Array.from(
    mainContainer.getElementsByTagName('mona-lisa-canvas')[0].shadowRoot
      .children
  ).find((e) => e?.classList?.contains('container'));

  positionContainer.appendChild(img);

  // ==============================================
  // Add button to toggle overlay

  const pillButtonContainer = mainContainer.getElementsByTagName(
    'mona-lisa-status-pill'
  )[0].shadowRoot;

  const toggleOverlay = (e) => {
    img.style.opacity === OVERLAY_IMAGE_MAX_OPACITY.toString()
      ? (img.style.opacity = '0')
      : (img.style.opacity = OVERLAY_IMAGE_MAX_OPACITY);
  };

  const createButton = (text, onClick) => {
    const buttonChild = document.createElement('div');
    buttonChild.classList.add('pill');
    buttonChild.style.marginLeft = '50px';
    buttonChild.innerText = text;
    const button = document.createElement('button');
    button.onclick = onClick;
    button.appendChild(buttonChild);

    pillButtonContainer.appendChild(button);
  };

  createButton('Toggle overlay', toggleOverlay);
}
