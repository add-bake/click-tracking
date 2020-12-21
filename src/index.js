export function init (callback) {
  window.addEventListener('click', function (e) {
    callback({
      class: e.target.className,
      id: e.target.id,
      event: e
    })
  })
}
