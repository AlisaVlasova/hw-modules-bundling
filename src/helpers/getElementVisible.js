const getElementVisible = (id) => {
  const target = document.getElementById(id);
  const targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    left: window.pageXOffset + target.getBoundingClientRect().left,
    right: window.pageXOffset + target.getBoundingClientRect().right,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
  };
  const windowPosition = {
    top: window.pageYOffset,
    left: window.pageXOffset,
    right: window.pageXOffset + document.documentElement.clientWidth,
    bottom: window.pageYOffset + document.documentElement.clientHeight,
  };

  return (
    targetPosition.bottom > windowPosition.top
    && targetPosition.top < windowPosition.bottom
    && targetPosition.right > windowPosition.left
    && targetPosition.left < windowPosition.right
  );
};

export default getElementVisible;
