# BootstrapCaptivePortal
Bootstrap captive portal for Untangle

Installation instructions:
Either upload captive_portal.zip to your Untangle server, or compress the existing files into a new zip file after editing and upload it.

Notes:
Some branding and certificates are TOWER's own Untangle certificates. You should replace root_authority.cer and RootCAInstaller.exe in the "cert" directory, and change names as appropriate in custom.html and certificate_install.html.

By default, BootstrapCaptivePortal comes with certificate detection for use with SSL Inspector. If you are not using this, you can easily turn off certificate detection by commenting out the line ```<script type="text/javascript" src="$.CustomPath.$/js/secure.js"></script>``` in custom.html.
