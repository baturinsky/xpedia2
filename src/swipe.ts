export default function onSwipe(touchsurface, handleswipe) {
  let startX,
    startY,
    deltaX,
    thresholdX = 150,
    thresholdY = 100,
    allowedTime = 300,
    elapsedTime,
    startTime

  touchsurface.addEventListener('touchstart', function (e) {
    let touchobj = e.changedTouches[0]
    deltaX = 0
    startX = touchobj.pageX
    startY = touchobj.pageY
    startTime = Date.now() 
  }, false)

  touchsurface.addEventListener('touchend', function (e) {
    let touchobj = e.changedTouches[0]
    deltaX = touchobj.pageX - startX 
    elapsedTime = Date.now() - startTime 

    let wasTouch = elapsedTime <= allowedTime && Math.abs(deltaX) < thresholdX && Math.abs(touchobj.pageY - startY) <= thresholdY;
    if(wasTouch){
      let element = e.target as HTMLElement;
      while(element != null && wasTouch){
        let tag = element.tagName
        if(tag == "A" || tag == "BUTTON" || tag == "INPUT" || tag == "NAV")
          wasTouch = false
        element = element.parentElement;
      }      
    }

    let wasSwipe = elapsedTime <= allowedTime && Math.abs(deltaX) >= thresholdX && Math.abs(touchobj.pageY - startY) <= thresholdY;

    if(wasTouch){
      handleswipe(touchobj.pageX>window.innerWidth/2)
    }
    /*if(wasSwipe)
      handleswipe(deltaX>0);*/
  }, false)
}
