import fs from "fs"
import csvParse from "csv-parse"
import { IConnectionsRepository } from "../../repositories/IConnectionsRepository"


interface IImportConnections{
    client: string;
    connection_name: string;
    address: string;
    domain?: string;
    username?: string;
    password?: string;
    passworddb?: string;
    passwordapp?: string;
    userconect?:  string;
}


class ImportConnectionsUseCase{

    constructor(private connectionsRepository: IConnectionsRepository){}


    loadConnections(file: Express.Multer.File): Promise<IImportConnections[]>{
        return  new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path)
            const connections: IImportConnections[] = []
    
            const parseFile = csvParse()
     
            stream.pipe(parseFile)
     
            parseFile.on("data", async (line) => {
                const [client, connection_name, address, domain, username, password, passworddb, passwordapp, userconect] = line
                connections.push({
                    client,
                    connection_name,
                    address,
                    domain,
                    username,
                    password,
                    passworddb,
                    passwordapp
                })
            }).on("end", () =>{
                resolve(connections)
            }).on("error", (err)=> {
                reject(err)
            })
        })
    }

    async execute(file: Express.Multer.File): Promise<void>{
        const connections = await this.loadConnections(file)
        
        
        connections.map(async (connection) => {
            const {client, connection_name, address, domain, username, password, passworddb, passwordapp } = connection

            const existConnection = this.connectionsRepository.findByConnectionName(connection_name)

            if(!existConnection){
                this.connectionsRepository.create({
                    client, connection_name, address, domain, username, password, passworddb, passwordapp
                })
            }
        })
    }
}

export {ImportConnectionsUseCase}