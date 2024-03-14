function startCountdown() {

    const inputTime = Date.parse(document.getElementById("dateInput").value)
    const now = new Date().getTime()
    if (inputTime > now) {
      
      function run() {
        const now = new Date().getTime()
        const timeCount = inputTime - now
        if (timeCount < 0) {
          clearInterval(runCountdown);
          document.getElementById("countdown").innerHTML = "Kết thúc đếm ngược."
        } else {
          const days = Math.floor(timeCount / (1000 * 60 * 60 * 24))
          const hours = Math.floor(
            (timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            const minutes = Math.floor(
              (timeCount % (1000 * 60 * 60)) / (1000 * 60)
              )
              const seconds = Math.floor((timeCount % (1000 * 60)) / 1000)
              document.getElementById("countdown").innerHTML = days + " ngày " + hours + " giờ " + minutes + " phút " + seconds + " giây "
            }
          }
          const runCountdown = setInterval(run, 1000)
        } else {
      document.getElementById("countdown").innerHTML = "Thời gian đếm ngược kết thúc."
    }
  }