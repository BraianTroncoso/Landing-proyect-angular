export interface video{
    tituolo?: string,
    id: string,
    playlist: PLAYLIST,
    descripcion: string,
    repositorio?: string,
    tecnologias?: string[]
    fecha?:Date,
    live?: string,

}

export enum PLAYLIST{
    todos,
    unVideoUnProyecto,
    explicativos
}