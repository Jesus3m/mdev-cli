import fs from 'fs'
import ora from "ora"
import chalk from "chalk"
import  inquirer  from 'inquirer'
import { configFiles } from '../resources/configsFiles'
import { isValidDirectory, localProjectRootPath, writeFileSync} from '../utils'
import { directoriesTree } from '../resources/directories'
import path from 'path'

const spinner = ora({
    color: "blue",
    spinner: "dots"
})

// comando de inicio de proyectos
export const initCommand = async (name: string) =>{
    // Obtener el nombre del proyecto pasado como parametro
    let projectName = name
    // Validar si proporciona el nombre por consola. O perdirlo
    if(!name){
        const answers: {name: string} = await inquirer.prompt([
            {
                name: "name",
                message: "Ingrese el nombre del proyecto",
                validate: (input: string) =>{
                    if(!input) return input || "Debe proporcionar un nombre para el proyecto"
                    return !(new RegExp(" ")).test(input) || "El nombre del proyecto no debe tener espacios"
                }
            }
            ])
            projectName = answers.name
    }
    !isValidDirectory(localProjectRootPath(projectName)) ? generateNewProject(projectName) : console.log(chalk.bold.red("Ya existe un directorio con el nombre del proyecto"))
}

// Logica para generar el proyecto
const generateNewProject = (projectName: string) =>{
    try{
    // Spinner
        spinner.start()
        spinner.text = chalk.green(`Creando Proyecto: ${projectName}`)
    // Empezar a crear los directorios
    const projectPath = localProjectRootPath(projectName)

    // Directorio principal
    fs.mkdir(projectPath, (err)=>{
        if(err) {
            spinner.stop()
            console.log(chalk.red("Problema creando el directorio del proyecto"))
            return
        }

        // Escribir los archivos de configuracion de proyecto
        configFiles.forEach(({name, data}) =>{
            writeFileSync(projectPath, name, data)
        })

        // estructura de directorios
        createSubDirectories(projectPath, directoriesTree)
    })

    // Set timeout para que la consola no cierre tan rapido
    setTimeout(()=>{
        spinner.stop()
    }, 4000)
    return
    } catch (error) {
        spinner.stop()
        console.log(chalk.red("Ha habido un problema"))
    }
}

// Crear directorios recursivamente
const createSubDirectories = async (root: string, dirs: any[]) =>{
    dirs.forEach(dir =>{
        const allPath = path.join(root, dir.name)
        fs.mkdir(allPath, (err) => {
            if(err) {
                spinner.stop()
                console.log(chalk.red("Error creando la estructura de directorios"))
                return
            }
            if(!err && dir.sub){
                createSubDirectories(allPath, dir.sub)
            }
        })
    })
}