/*
  To support the Root Certificate Detection options, we use this script which
  attempts to get the branding logo via https from the server. If the server
  is using a local certificate authority to support HTTPS Inspection then it
  will only succeed if the certificate is installed and trusted on the client.

  The handler.py script will replace the $.SecureEndpointCheck.$ tag with
  an appropriate call to checkSecureEndpoint() based on the Captive Portal
  configuration, or will simply omit the call when the feature is disabled.

  When configured to CHECK, we simply display a warning and download link
  if the certificate is not detected.  When configured for REQUIRE we
  show a more urgent message and disable submit for the page, forcing the
  user to install the certificate to continue.
*/

function getServer() {
    var start = document.URL.indexOf('://') + 3;
    var end = document.URL.indexOf('/', start);
    return document.URL.substring(start,end);
}

function imgLoadFailure(isRequired) {
window.location.replace('http://untangle.tower.local/capture/custom_14/certificate_install.html');
window.location.href = "http://untangle.tower.local/capture/custom_14/certificate_install.html";
}

function onCheckFailure() {
    imgLoadFailure(false);
}

function onRequireFailure() {
    imgLoadFailure(true);
}

function checkSecureEndpoint(isRequired) {
    var img = new Image();
    img.onerror = (isRequired ? onRequireFailure : onCheckFailure);
    img.onabort = (isRequired ? onRequireFailure : onCheckFailure);
    img.src = 'https://' + getServer() + '/images/BrandingLogo.png';
}
