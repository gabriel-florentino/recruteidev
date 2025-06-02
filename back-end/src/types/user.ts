export enum TipoUsuario {
  DEV = 'DEV',
  EMPRESA = 'EMPRESA',
}

export type TipoUsuarioType = keyof typeof TipoUsuario; // 'DEV' | 'EMPRESA'
