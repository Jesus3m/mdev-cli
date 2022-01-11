import path from "path"
import fs from 'fs'

// Obtener la ruta raiz del proyecto, basado en el nombre asignado o en la ubicacion de la consola
export const localProjectRootPath = (project?: string) => {
    return project ? path.resolve(process.cwd(), project) : process.cwd()
}
// Ver si un directorio es valido verificando su existencia
export const isValidDirectory = (directory: string) =>{
    return fs.existsSync(directory)
}
// Mini motor de plantillas basado en dos "pisos" (__) dentro la variable y otros "__"
export const  createStringFromTemplate = (template: string, variables: any) => {
    return template.replace(new RegExp("\__([^\{]+)\__", "g"), function(_unused, varName){
        return variables[varName];
    });
}

// Escribir directorios de forma sincrona
export const writeFileSync = (root: string, name: string, data: string) =>{
    return fs.writeFileSync(path.join(root, name), data)
}
