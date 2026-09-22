import { translate } from '@/i18n/i18n'

export function getUnableToParseShortcutMessage(): string {
  return translate(
    'auto.components.settings.ShortcutsPane.unableToParseShortcut',
    'Unable to parse shortcut.'
  )
}

export function getShortcutUnavailableMessage(): string {
  return translate(
    'auto.components.settings.ShortcutsPane.shortcutUnavailable',
    'Shortcut is no longer available.'
  )
}

export function getBindingConflictMessage(binding: string, conflictLabels: string): string {
  return translate(
    'auto.components.settings.ShortcutsPane.bindingConflict',
    '{{value0}} conflicts with {{value1}}.',
    { value0: binding, value1: conflictLabels }
  )
}
