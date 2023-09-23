const showAlert = (message = 'Default Message', delay = 3000) => {
  setTimeout(() => {
    alert(message)
  }, delay)
}

export default showAlert
