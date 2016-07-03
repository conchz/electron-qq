"use strict"

class Common {

}

Common.ELECTRON = "Electron"
Common.ELECTRONIC_QQ = "Electronic QQ"
Common.DEBUG_MODE = false
Common.WINDOW_SIZE = {width: 800, height: 600}
Common.WINDOW_SIZE_LOGIN = {width: 380, height: 540}
Common.WINDOW_SIZE_LOADING = {width: 380, height: 120}
Common.USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36"

Common.SMART_QQ = "http://w.qq.com/"
Common.GITHUB = "https://github.com/lavenderx/electron-qq"
Common.GITHUB_RELEASES = "https://github.com/lavenderx/electron-qq/releases"
Common.GITHUB_ISSUES = "https://github.com/lavenderx/electron-qq/issues"
Common.GITHUB_API_HOST = "api.github.com"
Common.GITHUB_API_RELEASE_LATEST_PATH = "/repos/lavenderx/electron-qq/releases/latest"

Common.UPDATE_ERROR_ELECTRON = "Failed to get the local version. If you are using debug mode(by `npm start`), " +
  "this error would happen. Use packed app instead or manually check for updates.\n\n" + Common.GITHUB_RELEASES
Common.UPDATE_ERROR_EMPTY_RESPONSE = "Failed to fetch release info."
Common.UPDATE_ERROR_UNKNOWN = "Something went wrong."
Common.UPDATE_NA_TITLE = "No Update Available"
Common.UPDATE_ERROR_NETWORK = "Connection hang up unexpectedly. Check your network settings."
Common.UPDATE_ERROR_LATEST = (version)=> {
  return `You are using the latest version(${version}).`
}

Common.EMOJI_MAXIUM_SIZE = 120

module.exports = Common
