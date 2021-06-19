import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateConnections1623548371490 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "connections",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        }, 
                        {
                            name: "client",
                            type: "varchar"

                        },
                        {
                            name: "connection_name",
                            type: "varchar"
                        },
                        {
                            name: "address",
                            type: "varchar"
                        },
                        {
                            name: "domain",
                            type: "varchar",
                            default: "null"
                        },
                        {
                            name: "username",
                            type: "varchar",
                            default: "null"
                        },
                        {
                            name: "password",
                            type: "varchar",
                            default: "null"
                        },
                        {
                            name: "passworddb",
                            type: "varchar",
                            default: "null"
                        },
                        {
                            name: "passwordapp",
                            type: "varchar",
                            default: "null"
                        },
                        {
                            name: "userconect",
                            type: "varchar",
                            default: "null"
                        },
                        {
                            name: "date",
                            type: "timestamp",
                            default: "now()"
                        },
                        {
                            name: "status",
                            type: "varchar",
                            default: "null"
                        },
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("connections")
    }

}
