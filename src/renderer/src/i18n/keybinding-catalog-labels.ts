import type { KeybindingDefinition } from '../../../shared/keybindings'
import { translate } from './i18n'

// Why: keybinding definitions live in src/shared, which main-process code also
// imports, so they cannot call the renderer-only translate(). Localize their
// display strings here instead, keyed by the definition id (itself dotted, so
// it nests naturally under auto.lib.keybindings.titles like the id's own
// structure, e.g. 'floatingTerminal.toggle' -> ...titles.floatingTerminal.toggle).
export function translateKeybindingTitle(
  definition: Pick<KeybindingDefinition, 'id' | 'title'>
): string {
  return translate(`auto.lib.keybindings.titles.${definition.id}.title`, definition.title)
}

const GROUP_CATALOG_KEY_BY_TITLE: Record<string, string> = {
  Global: 'global',
  Tabs: 'tabs',
  'Tab Navigation': 'tabNavigation',
  Browser: 'browser',
  Editors: 'editors',
  'File Explorer': 'fileExplorer',
  Settings: 'settings',
  'Terminal Panes': 'terminalPanes',
  'Quick Commands': 'quickCommands'
}

export function translateKeybindingGroupTitle(groupTitle: string): string {
  const catalogKey = GROUP_CATALOG_KEY_BY_TITLE[groupTitle]
  if (!catalogKey) {
    return groupTitle
  }
  return translate(`auto.lib.keybindings.groups.${catalogKey}`, groupTitle)
}
