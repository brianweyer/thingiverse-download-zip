# Thingiverse Zip Download Chrome Extension
An extension for Google Chrome (and derivatives) that returns functionality to the "Download All Files" button on Thingiverse's website

## How it works
This extension is a very small script that Google's Chrome browser will execute on all pages on the matching the pattern `https://*.thingiverse.com/thing:*`. The script waits for window load, then it looks for the `Download All Files` button by class, and adds an href to it to the current thing's url + `/zip`
## Installation


### Prerequisites (Packed and Unpacked Installations, non-release)

- Clone the repo

### Unpacked

- Open Chrome (or other Chromium distro) browser
- Visit: `chrome://extensions`
- There is a button that says `Load unpacked extension`, click it.
- It will open a file browser for your local machine, point it to the _directory_ of the cloned repository.

> If you load the extension this way, you can make quick changes to the `content-script.js` file and simply "reload" the extension from `chrome://extensions` at any time (should be supported by all recent Chromium-based browsers)

### Packed

#### Pack it yourself

- Open Chrome (or other Chromium distro) browser
- Visit: `chrome://extensions`
- There is a button that says `Pack extension`, click it.
- It will open a file browser for your local machine, point it ot the _directory_ of the cloned repository
- it will produce a `*.crx` of the extension, and a `*.pem` in the directory _above_ the cloned repository
- Drag-and-drop the `.crx` file into the extension screen in the browser to install

#### Download from releases

- Visit the release page [here](https://github.com/brianweyer/thingiverse-download-zip/releases)
- Download the latest release
- Visit: `chrome://extensions`
- Drag-and-drop the `.crx` file into the extension screen in the browser to install