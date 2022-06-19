var matches = window.location.href.match(/https:\/\/.*?\.thingiverse.com\/thing:[0-9]+[^\/]/)
var currentPageIsThing = false
var newDownloadLink = ""

if (matches.length == 1) {
  currentPageIsThing = true
  newDownloadLink = matches[0]
}
var downloadAnchor = document.querySelector('[class*="SidebarMenu__download"]')
if (!!downloadAnchor) {
  downloadAnchor.addEventListener("click", () => {
    if (newDownloadLink !== "") {
      window.location.href = newDownloadLink + "/zip"
    }
  })
}