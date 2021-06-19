import { v4 as uuidV4 } from "uuid"
import {Column, Entity, PrimaryColumn} from "typeorm"

@Entity("connections")
class Connections{
    @PrimaryColumn()
    id?: string;
    @Column()
    client: string;
    @Column()
    connection_name: string;
    @Column()
    address: string;
    @Column({nullable: true})
    domain?: string;
    @Column({nullable: true})
    username?: string;
    @Column({nullable: true})
    password?: string;
    @Column({nullable: true})
    passworddb?: string;
    @Column({nullable: true})
    passwordapp?: string;
    @Column({nullable: true})
    userconect?:  string;
    @Column({nullable: true})
    date?: Date;
    @Column({nullable: true})
    status?: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
            this.userconect = null;
            this.status = 'A'
        }
    }

}

export {Connections}