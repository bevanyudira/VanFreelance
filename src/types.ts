export type GroupId = 'A' | 'B' | 'C'

export interface Group {
  id: GroupId
  title: string
  hint: string
}

export interface Wordmark {
  main: string
  sub?: string
  layout: 'inline' | 'stacked'
}

export interface Platform {
  id: string
  name: string
  group: GroupId
  url: string // beranda platform
  loginUrl: string // halaman login, atau dashboard utama kalau tidak ada halaman login terpisah
  logo: string // path relatif ke file di public/, mis. 'logos/upwork.svg'
  note: string
  wordmark: Wordmark // dipakai hanya sebagai fallback kalau logo tidak tersedia
}
