export interface Album {
  id: number
  userId: number
  title: string
}

export interface UsersState {
  users: User[]
}

export interface User {
  id: number
}

export interface AlbumsState {
  albums: Album[]
}

export interface Photo {
  id: number
  albumId: number
  thumbnailUrl: string
  title: string
  url: string
}
