window.onload = updateDownloadLink

function updateDownloadLink() {
  var matches = window.location.href.match(/https:\/\/.*?\.thingiverse.com\/thing:[0-9]+[^\/]/)
  var currentPageIsThing = false
  var newDownloadLink = ""
  console.log(matches)
  if (matches.length == 1) {
    currentPageIsThing = true
    newDownloadLink = matches[0]
  }
  console.log(currentPageIsThing)
  var downloadAnchor = document.querySelector('[class*="SidebarMenu__download"]')
  console.log(downloadAnchor)
  if (downloadAnchor) {
    downloadAnchor.addEventListener("click", () => {
      if (newDownloadLink !== "") {
        window.location.href = newDownloadLink + "/zip"
      }
    })
  }
}