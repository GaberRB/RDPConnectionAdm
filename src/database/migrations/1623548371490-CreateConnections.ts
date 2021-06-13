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
                            type: "varchar"
                        },
                        {
                            name: "username",
                            type: "varchar"
                        },
                        {
                            name: "password",
                            type: "varchar"
                        },
                        {
                            name: "passworddb",
                            type: "varchar"
                        },
                        {
                            name: "passwordapp",
                            type: "varchar"
                        },
                        {
                            name: "userconect",
                            type: "varchar"
                        },
                        {
                            name: "date",
                            type: "timestamp",
                            default: "now()"
                        },
                        {
                            name: "status",
                            type: "varchar"
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
