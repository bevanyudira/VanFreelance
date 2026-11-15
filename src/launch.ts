import type { Platform } from './types'

// Satu-satunya tempat yang menentukan ke mana klik pada tile dan tombol "Masuk" pergi.
// Saat ini tujuannya selalu halaman login platform. Perilaku baru nanti cukup mengubah fungsi ini.
export function launchTarget(platform: Platform): string {
  return platform.loginUrl
}
