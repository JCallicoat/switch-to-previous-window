/*
    SPDX-FileCopyrightText: 2025 Jordan Callicoat <jordan.callicoat@gmail.com>

    SPDX-License-Identifier: GPL-2.0-or-later
*/

class SwitchToPreviousVirtualWindowShortcut {
    constructor() {
        this.previousWindows = [];

        workspace.windowActivated.connect(window => {
            if (window && window.normalWindow) {
                if (this.previousWindows.length == 0) {
                    this.previousWindows.push(window);
                } else if (this.previousWindows[1] != window) {
                    if (this.previousWindows.length > 1) {
                        this.previousWindows[0] = this.previousWindows[1];
                    }
                    this.previousWindows[1] = window;
                }
            }
        });

        registerShortcut("Switch to Previously Used Window", "Switch to Previously Used Window", "Meta+Y", () => {
            if (!this.previousWindows.length > 0) {
                return;
            }
            const window = this.previousWindows[0];
            if (!window.onAllDesktops &&
                !window.onCurrentDesktop && 
                window.desktops.length > 0) {
                workspace.currentDesktop = window.desktops[0];
            }
            workspace.activeWindow = window;
        });
    }
}

new SwitchToPreviousVirtualWindowShortcut();
