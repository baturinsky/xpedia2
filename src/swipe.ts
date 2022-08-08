export default function onSwipe(touchsurface, handleswipe) {
  let startX,
    startY,
    dist,
    threshold = 150, // минимальное расстояние для swipe
    allowedTime = 200, // максимальное время прохождения установленного расстояния
    elapsedTime,
    startTime

  touchsurface.addEventListener('touchstart', function (e) {
    var touchobj = e.changedTouches[0]
    dist = 0
    startX = touchobj.pageX
    startY = touchobj.pageY
    startTime = new Date().getTime() // время контакта с поверхностью сенсора    
  }, false)

  touchsurface.addEventListener('touchend', function (e) {
    var touchobj = e.changedTouches[0]
    dist = touchobj.pageX - startX // получаем пройденную дистанцию
    elapsedTime = new Date().getTime() - startTime // узнаем пройденное время
    // проверяем затраченное время,горизонтальное перемещение >= threshold, и вертикальное перемещение <= 100
    var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
    handleswipe(swiperightBol)
  }, false)
}
