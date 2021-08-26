import { MigrationInterface, QueryRunner } from 'typeorm';

export class initDB1629992831075 implements MigrationInterface {
	name = 'initDB1629992831075';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_activity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_bank\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_ident_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_department\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_worker\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`id_roles\` int NOT NULL DEFAULT '2', \`password\` varchar(255) NOT NULL, \`id_ident_type\` int NOT NULL, \`id_depart\` int NOT NULL, \`ident_number\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_31d0936c224004a411a4e3b5c7\` (\`id_ident_type\`, \`ident_number\`), UNIQUE INDEX \`IDX_35eb1f25e7bf89140a2c986b07\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_phone\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_client\` int NOT NULL, \`phone\` varchar(255) NOT NULL, \`idClientId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_way_pay\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_type_request\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_status_request\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_request\` (\`id\` int NOT NULL AUTO_INCREMENT, \`const_post\` int NOT NULL, \`fm_act\` varchar(255) NOT NULL, \`fm_pro_doc\` varchar(255) NOT NULL, \`fm_services\` varchar(255) NOT NULL, \`fm_contributor\` varchar(255) NOT NULL, \`fm_ref_bank\` varchar(255) NOT NULL, \`fm_ref_perso\` varchar(255) NOT NULL, \`fm_account\` varchar(255) NOT NULL, \`fm_front_local\` varchar(255) NOT NULL, \`fm_in_local\` varchar(255) NOT NULL, \`fm_rif\` varchar(255) NOT NULL, \`fm_ident_card\` varchar(255) NOT NULL, \`id_way_pay\` int NOT NULL, \`id_client\` int NOT NULL, \`id_commerce\` int NOT NULL, \`id_type_request\` int NOT NULL, \`fm_status_request\` int NOT NULL, \`idWayPayId\` int NULL, \`idClientId\` int NULL, \`idCommerceId\` int NULL, UNIQUE INDEX \`REL_af880b2a93f79cc4377ab8c7ac\` (\`idWayPayId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_Client\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`id_roles\` int NOT NULL DEFAULT '1', \`password\` varchar(255) NOT NULL, \`ident_num\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`idIdentTypeId\` int NULL, UNIQUE INDEX \`IDX_e91fef0286bceafad924f0a650\` (\`idIdentTypeId\`, \`ident_num\`), UNIQUE INDEX \`IDX_d2a205757a25596c6a6a9c155d\` (\`email\`), UNIQUE INDEX \`REL_ae5f554ac598ec350d69439868\` (\`idIdentTypeId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_ciudad\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_estado\` int NOT NULL, \`ciudad\` varchar(255) NOT NULL, \`capital\` varchar(255) NOT NULL, \`idEstadoId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_estado\` (\`id\` int NOT NULL AUTO_INCREMENT, \`estado\` varchar(255) NOT NULL, \`iso_3166\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_parroquia\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_municipio\` int NOT NULL, \`parroquia\` varchar(255) NOT NULL, \`idMunicipioId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_municipio\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_estado\` int NOT NULL, \`municipio\` varchar(255) NOT NULL, \`idEstadoId\` int NULL, UNIQUE INDEX \`REL_c2952f0ade0c768923bfcd091e\` (\`idEstadoId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_cod_postal\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_parroquia\` int NOT NULL, \`cod\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_location\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_estado\` int NOT NULL, \`id_municipio\` int NOT NULL, \`id_ciudad\` int NOT NULL, \`id_parroquia\` int NOT NULL, \`id_cod_postal\` int NOT NULL, \`sector\` varchar(255) NOT NULL, \`calle\` varchar(255) NOT NULL, \`local\` varchar(255) NOT NULL, \`idEstadoId\` int NULL, \`idMunicipioId\` int NULL, \`idCiudadId\` int NULL, \`idParroquiaId\` int NULL, \`idCodPostalId\` int NULL, UNIQUE INDEX \`REL_7faad64c4d276d229d45585e99\` (\`idEstadoId\`), UNIQUE INDEX \`REL_e68b330dedc0ef489fa8b4d423\` (\`idMunicipioId\`), UNIQUE INDEX \`REL_77a478bbe486ef168042ef7709\` (\`idCiudadId\`), UNIQUE INDEX \`REL_681edb0782ea058000073db6f4\` (\`idParroquiaId\`), UNIQUE INDEX \`REL_1958317995d7b21b3174f67f89\` (\`idCodPostalId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_dir_post\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_location\` int NOT NULL, \`id_commerce\` int NOT NULL, \`idLocationId\` int NULL, \`idCommerceId\` int NULL, UNIQUE INDEX \`REL_91fc4ff405576c467174ba9948\` (\`idLocationId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_commerce\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`id_ident_type\` int NOT NULL, \`nro_ident\` varchar(255) NOT NULL, \`special_contributor\` int NOT NULL DEFAULT '0', \`id_activity\` int NOT NULL, \`id_location\` int NOT NULL, \`id_aci\` int NOT NULL, \`id_client\` int NOT NULL, \`idActivityId\` int NULL, \`idAciId\` int NULL, \`idClientId\` int NULL, UNIQUE INDEX \`REL_196bd8fe75da538dc9d9443566\` (\`idActivityId\`), UNIQUE INDEX \`REL_8531fcd1168b00dc828cd075aa\` (\`idAciId\`), UNIQUE INDEX \`REL_d15fa48b2e2917bbad5ca93f0b\` (\`idClientId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_bank_commerce\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_commerce\` int NOT NULL, \`id_bank\` int NOT NULL, \`bank_account_num\` int NOT NULL, \`idCommerceId\` int NULL, \`idBankId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_worker_id_roles_fm_roles\` (\`fmWorkerId\` int NOT NULL, \`fmRolesId\` int NOT NULL, INDEX \`IDX_b7a9522a06e7bb726aae971474\` (\`fmWorkerId\`), INDEX \`IDX_e76591268bcc2449c6dd2f8eb3\` (\`fmRolesId\`), PRIMARY KEY (\`fmWorkerId\`, \`fmRolesId\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_worker_id_depart_fm_department\` (\`fmWorkerId\` int NOT NULL, \`fmDepartmentId\` int NOT NULL, INDEX \`IDX_e2077c5c12d933e07a0e9d4eb1\` (\`fmWorkerId\`), INDEX \`IDX_51b234013c18f576736031ce5a\` (\`fmDepartmentId\`), PRIMARY KEY (\`fmWorkerId\`, \`fmDepartmentId\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`1000pagosdev\`.\`fm_Client_id_roles_fm_roles\` (\`fmClientId\` int NOT NULL, \`fmRolesId\` int NOT NULL, INDEX \`IDX_23cfd0777e0909f616fd4ca533\` (\`fmClientId\`), INDEX \`IDX_0a692a01d5e806bcfe3d49978e\` (\`fmRolesId\`), PRIMARY KEY (\`fmClientId\`, \`fmRolesId\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_phone\` ADD CONSTRAINT \`FK_c6e07f1585b1805268c9c6584a5\` FOREIGN KEY (\`idClientId\`) REFERENCES \`1000pagosdev\`.\`fm_Client\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_request\` ADD CONSTRAINT \`FK_af880b2a93f79cc4377ab8c7ac7\` FOREIGN KEY (\`idWayPayId\`) REFERENCES \`1000pagosdev\`.\`fm_way_pay\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_request\` ADD CONSTRAINT \`FK_1134cd317f45c6a39458764451b\` FOREIGN KEY (\`idClientId\`) REFERENCES \`1000pagosdev\`.\`fm_Client\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_request\` ADD CONSTRAINT \`FK_4634fa27193bcbbe0e27d909385\` FOREIGN KEY (\`idCommerceId\`) REFERENCES \`1000pagosdev\`.\`fm_commerce\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_Client\` ADD CONSTRAINT \`FK_ae5f554ac598ec350d694398686\` FOREIGN KEY (\`idIdentTypeId\`) REFERENCES \`1000pagosdev\`.\`fm_ident_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_ciudad\` ADD CONSTRAINT \`FK_06b45182e630a7a33123d77b6c6\` FOREIGN KEY (\`idEstadoId\`) REFERENCES \`1000pagosdev\`.\`fm_estado\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_parroquia\` ADD CONSTRAINT \`FK_9f3024408c0cb02a72e0898be67\` FOREIGN KEY (\`idMunicipioId\`) REFERENCES \`1000pagosdev\`.\`fm_municipio\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_municipio\` ADD CONSTRAINT \`FK_c2952f0ade0c768923bfcd091e1\` FOREIGN KEY (\`idEstadoId\`) REFERENCES \`1000pagosdev\`.\`fm_estado\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_location\` ADD CONSTRAINT \`FK_7faad64c4d276d229d45585e99c\` FOREIGN KEY (\`idEstadoId\`) REFERENCES \`1000pagosdev\`.\`fm_estado\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_location\` ADD CONSTRAINT \`FK_e68b330dedc0ef489fa8b4d4235\` FOREIGN KEY (\`idMunicipioId\`) REFERENCES \`1000pagosdev\`.\`fm_municipio\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_location\` ADD CONSTRAINT \`FK_77a478bbe486ef168042ef77099\` FOREIGN KEY (\`idCiudadId\`) REFERENCES \`1000pagosdev\`.\`fm_ciudad\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_location\` ADD CONSTRAINT \`FK_681edb0782ea058000073db6f41\` FOREIGN KEY (\`idParroquiaId\`) REFERENCES \`1000pagosdev\`.\`fm_parroquia\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_location\` ADD CONSTRAINT \`FK_1958317995d7b21b3174f67f89f\` FOREIGN KEY (\`idCodPostalId\`) REFERENCES \`1000pagosdev\`.\`fm_cod_postal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_dir_post\` ADD CONSTRAINT \`FK_91fc4ff405576c467174ba99488\` FOREIGN KEY (\`idLocationId\`) REFERENCES \`1000pagosdev\`.\`fm_location\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_dir_post\` ADD CONSTRAINT \`FK_e1db58f255fe5ca787974f4b023\` FOREIGN KEY (\`idCommerceId\`) REFERENCES \`1000pagosdev\`.\`fm_commerce\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_commerce\` ADD CONSTRAINT \`FK_196bd8fe75da538dc9d94435666\` FOREIGN KEY (\`idActivityId\`) REFERENCES \`1000pagosdev\`.\`fm_activity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_commerce\` ADD CONSTRAINT \`FK_8531fcd1168b00dc828cd075aac\` FOREIGN KEY (\`idAciId\`) REFERENCES \`1000pagosdev\`.\`fm_worker\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_commerce\` ADD CONSTRAINT \`FK_d15fa48b2e2917bbad5ca93f0b9\` FOREIGN KEY (\`idClientId\`) REFERENCES \`1000pagosdev\`.\`fm_Client\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_bank_commerce\` ADD CONSTRAINT \`FK_4fdb498852192b9992039cf9dc8\` FOREIGN KEY (\`idCommerceId\`) REFERENCES \`1000pagosdev\`.\`fm_commerce\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_bank_commerce\` ADD CONSTRAINT \`FK_7aca6edbc077a370a90dde3a3da\` FOREIGN KEY (\`idBankId\`) REFERENCES \`1000pagosdev\`.\`fm_bank\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_worker_id_roles_fm_roles\` ADD CONSTRAINT \`FK_b7a9522a06e7bb726aae9714748\` FOREIGN KEY (\`fmWorkerId\`) REFERENCES \`1000pagosdev\`.\`fm_worker\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_worker_id_roles_fm_roles\` ADD CONSTRAINT \`FK_e76591268bcc2449c6dd2f8eb38\` FOREIGN KEY (\`fmRolesId\`) REFERENCES \`1000pagosdev\`.\`fm_roles\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_worker_id_depart_fm_department\` ADD CONSTRAINT \`FK_e2077c5c12d933e07a0e9d4eb12\` FOREIGN KEY (\`fmWorkerId\`) REFERENCES \`1000pagosdev\`.\`fm_worker\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_worker_id_depart_fm_department\` ADD CONSTRAINT \`FK_51b234013c18f576736031ce5a6\` FOREIGN KEY (\`fmDepartmentId\`) REFERENCES \`1000pagosdev\`.\`fm_department\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_Client_id_roles_fm_roles\` ADD CONSTRAINT \`FK_23cfd0777e0909f616fd4ca5332\` FOREIGN KEY (\`fmClientId\`) REFERENCES \`1000pagosdev\`.\`fm_Client\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_Client_id_roles_fm_roles\` ADD CONSTRAINT \`FK_0a692a01d5e806bcfe3d49978e9\` FOREIGN KEY (\`fmRolesId\`) REFERENCES \`1000pagosdev\`.\`fm_roles\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_Client_id_roles_fm_roles\` DROP FOREIGN KEY \`FK_0a692a01d5e806bcfe3d49978e9\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_Client_id_roles_fm_roles\` DROP FOREIGN KEY \`FK_23cfd0777e0909f616fd4ca5332\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_worker_id_depart_fm_department\` DROP FOREIGN KEY \`FK_51b234013c18f576736031ce5a6\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_worker_id_depart_fm_department\` DROP FOREIGN KEY \`FK_e2077c5c12d933e07a0e9d4eb12\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_worker_id_roles_fm_roles\` DROP FOREIGN KEY \`FK_e76591268bcc2449c6dd2f8eb38\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_worker_id_roles_fm_roles\` DROP FOREIGN KEY \`FK_b7a9522a06e7bb726aae9714748\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_bank_commerce\` DROP FOREIGN KEY \`FK_7aca6edbc077a370a90dde3a3da\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_bank_commerce\` DROP FOREIGN KEY \`FK_4fdb498852192b9992039cf9dc8\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_commerce\` DROP FOREIGN KEY \`FK_d15fa48b2e2917bbad5ca93f0b9\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_commerce\` DROP FOREIGN KEY \`FK_8531fcd1168b00dc828cd075aac\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_commerce\` DROP FOREIGN KEY \`FK_196bd8fe75da538dc9d94435666\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_dir_post\` DROP FOREIGN KEY \`FK_e1db58f255fe5ca787974f4b023\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_dir_post\` DROP FOREIGN KEY \`FK_91fc4ff405576c467174ba99488\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_location\` DROP FOREIGN KEY \`FK_1958317995d7b21b3174f67f89f\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_location\` DROP FOREIGN KEY \`FK_681edb0782ea058000073db6f41\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_location\` DROP FOREIGN KEY \`FK_77a478bbe486ef168042ef77099\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_location\` DROP FOREIGN KEY \`FK_e68b330dedc0ef489fa8b4d4235\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_location\` DROP FOREIGN KEY \`FK_7faad64c4d276d229d45585e99c\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_municipio\` DROP FOREIGN KEY \`FK_c2952f0ade0c768923bfcd091e1\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_parroquia\` DROP FOREIGN KEY \`FK_9f3024408c0cb02a72e0898be67\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_ciudad\` DROP FOREIGN KEY \`FK_06b45182e630a7a33123d77b6c6\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_Client\` DROP FOREIGN KEY \`FK_ae5f554ac598ec350d694398686\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_request\` DROP FOREIGN KEY \`FK_4634fa27193bcbbe0e27d909385\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_request\` DROP FOREIGN KEY \`FK_1134cd317f45c6a39458764451b\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_request\` DROP FOREIGN KEY \`FK_af880b2a93f79cc4377ab8c7ac7\``
		);
		await queryRunner.query(
			`ALTER TABLE \`1000pagosdev\`.\`fm_phone\` DROP FOREIGN KEY \`FK_c6e07f1585b1805268c9c6584a5\``
		);
		await queryRunner.query(
			`DROP INDEX \`IDX_0a692a01d5e806bcfe3d49978e\` ON \`1000pagosdev\`.\`fm_Client_id_roles_fm_roles\``
		);
		await queryRunner.query(
			`DROP INDEX \`IDX_23cfd0777e0909f616fd4ca533\` ON \`1000pagosdev\`.\`fm_Client_id_roles_fm_roles\``
		);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_Client_id_roles_fm_roles\``);
		await queryRunner.query(
			`DROP INDEX \`IDX_51b234013c18f576736031ce5a\` ON \`1000pagosdev\`.\`fm_worker_id_depart_fm_department\``
		);
		await queryRunner.query(
			`DROP INDEX \`IDX_e2077c5c12d933e07a0e9d4eb1\` ON \`1000pagosdev\`.\`fm_worker_id_depart_fm_department\``
		);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_worker_id_depart_fm_department\``);
		await queryRunner.query(
			`DROP INDEX \`IDX_e76591268bcc2449c6dd2f8eb3\` ON \`1000pagosdev\`.\`fm_worker_id_roles_fm_roles\``
		);
		await queryRunner.query(
			`DROP INDEX \`IDX_b7a9522a06e7bb726aae971474\` ON \`1000pagosdev\`.\`fm_worker_id_roles_fm_roles\``
		);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_worker_id_roles_fm_roles\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_bank_commerce\``);
		await queryRunner.query(`DROP INDEX \`REL_d15fa48b2e2917bbad5ca93f0b\` ON \`1000pagosdev\`.\`fm_commerce\``);
		await queryRunner.query(`DROP INDEX \`REL_8531fcd1168b00dc828cd075aa\` ON \`1000pagosdev\`.\`fm_commerce\``);
		await queryRunner.query(`DROP INDEX \`REL_196bd8fe75da538dc9d9443566\` ON \`1000pagosdev\`.\`fm_commerce\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_commerce\``);
		await queryRunner.query(`DROP INDEX \`REL_91fc4ff405576c467174ba9948\` ON \`1000pagosdev\`.\`fm_dir_post\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_dir_post\``);
		await queryRunner.query(`DROP INDEX \`REL_1958317995d7b21b3174f67f89\` ON \`1000pagosdev\`.\`fm_location\``);
		await queryRunner.query(`DROP INDEX \`REL_681edb0782ea058000073db6f4\` ON \`1000pagosdev\`.\`fm_location\``);
		await queryRunner.query(`DROP INDEX \`REL_77a478bbe486ef168042ef7709\` ON \`1000pagosdev\`.\`fm_location\``);
		await queryRunner.query(`DROP INDEX \`REL_e68b330dedc0ef489fa8b4d423\` ON \`1000pagosdev\`.\`fm_location\``);
		await queryRunner.query(`DROP INDEX \`REL_7faad64c4d276d229d45585e99\` ON \`1000pagosdev\`.\`fm_location\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_location\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_cod_postal\``);
		await queryRunner.query(`DROP INDEX \`REL_c2952f0ade0c768923bfcd091e\` ON \`1000pagosdev\`.\`fm_municipio\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_municipio\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_parroquia\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_estado\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_ciudad\``);
		await queryRunner.query(`DROP INDEX \`REL_ae5f554ac598ec350d69439868\` ON \`1000pagosdev\`.\`fm_Client\``);
		await queryRunner.query(`DROP INDEX \`IDX_d2a205757a25596c6a6a9c155d\` ON \`1000pagosdev\`.\`fm_Client\``);
		await queryRunner.query(`DROP INDEX \`IDX_e91fef0286bceafad924f0a650\` ON \`1000pagosdev\`.\`fm_Client\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_Client\``);
		await queryRunner.query(`DROP INDEX \`REL_af880b2a93f79cc4377ab8c7ac\` ON \`1000pagosdev\`.\`fm_request\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_request\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_status_request\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_type_request\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_way_pay\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_phone\``);
		await queryRunner.query(`DROP INDEX \`IDX_35eb1f25e7bf89140a2c986b07\` ON \`1000pagosdev\`.\`fm_worker\``);
		await queryRunner.query(`DROP INDEX \`IDX_31d0936c224004a411a4e3b5c7\` ON \`1000pagosdev\`.\`fm_worker\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_worker\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_department\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_roles\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_ident_type\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_bank\``);
		await queryRunner.query(`DROP TABLE \`1000pagosdev\`.\`fm_activity\``);
	}
}