Simple KWin script to implement functionality like [focus_last](https://github.com/JCallicoat/focus_last), where activating the shortcut will focus the last active normal window, including switching desktops if needed.

Installation:
----
```shell
git clone https://github.com/JCallicoat/switch-to-previous-window
cd switch-to-previous-window
kpackagetool6 --type KWin/Script --install switch-to-previous-window
```

Configuration:
----
Go to the "KWin Scripts" settings page and enable "Switch to Previous Window"

The default shortcut added by the script is `Meta+Y`, which can be changed in the Shortcuts section of Settings.

Credit:
----
Inspired by: https://invent.kde.org/vladz/switch-to-previous-desktop
