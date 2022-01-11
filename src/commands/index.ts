
import { program } from 'commander'
import { initCommand } from '../controllers/init'
import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

// Definicion del comando mdev principal para la CLI
program
    .name('mdev')
    .description('MDev CLi frontend arch')
    .version('0.0.1')

// comando de inicio de proyectos
program
    .command('init [name]')
    .alias('i')
    .description("Genere un proyecto desde 0")
    .action(initCommand)

// Leer preferencias
program
    .command('fav')
    .alias('f')
    .description("Preferencias de arquitectura")
    .action(async ()=>{
        const prefers = fs.existsSync(path.join(process.cwd(), "mdev-cli.json")) && fs.readFileSync(path.join(process.cwd(), "mdev-cli.json"), { encoding: "utf-8" })
        const archPreferences = prefers && await import(path.join(process.cwd(), "mdev-cli.json"))
        console.log(archPreferences?.preferArch)
        !prefers && console.log(chalk.red("Ubiquese en un proyecto generado por MDev CLI primero"))
    })
program.parse(process.argv)