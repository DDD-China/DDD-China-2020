!function() {
  $('#fixed-subscribe-button').click(function() {
    $('#fixed-subscribe-window').show()
  })
  
  $('#fixed-subscribe-window .over-layer').click(function() {
    $('#fixed-subscribe-window').hide()
  })
  
  $('#fixed-subscribe-window .close-button').click(function() {
    $('#fixed-subscribe-window').hide()
  })
}()