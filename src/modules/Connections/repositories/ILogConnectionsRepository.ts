
interface ILogConnectionsDTO{
    connection_name: string;
    userconnect: string;
    dateconnect?: Date;
    datedesconnect?: Date;

}

interface ILogConnectionsRepository{
    createConnect({connection_name, userconnect, dateconnect}:ILogConnectionsDTO ): void;
    createDesconnect({connection_name, userconnect, datedesconnect}:ILogConnectionsDTO ):void;
}

export {ILogConnectionsRepository, ILogConnectionsDTO};