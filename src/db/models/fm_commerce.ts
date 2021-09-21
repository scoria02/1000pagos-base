import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import fm_activity from './fm_activity';
import fm_Client from './fm_client';
import fm_bank_commerce from './fm_bank_commerce';
import fm_request from './fm_request';
import fm_photo from './fm_photo';
import fm_location from './fm_location';
import fm_aci_commerce from './fm_aci_commerce';

@Entity()
export default class fm_commerce {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	name!: string;

	@Column()
	id_ident_type!: number;

	@Column()
	ident_num!: string;

	@Column({ default: 0 })
	special_contributor!: number;

	@OneToMany(() => fm_activity, (fm_activity) => fm_activity.commerces)
	@JoinColumn({ name: 'id_activity' })
	id_activity!: number;

	@OneToOne(() => fm_location)
	@JoinColumn({ name: 'id_location' })
	id_location!: number;

	@OneToMany(() => fm_aci_commerce, (fm_aci_commerce) => fm_aci_commerce.id_commerce)
	@JoinColumn({ name: 'aci' })
	aci?: fm_bank_commerce[];

	@OneToOne(() => fm_Client)
	@JoinColumn({ name: 'id_client' })
	id_client!: number;

	@OneToMany(() => fm_bank_commerce, (fm_bank_commerce) => fm_bank_commerce.id_commerce)
	@JoinColumn({ name: 'banks' })
	banks?: fm_bank_commerce[];

	@ManyToMany(() => fm_location)
	@JoinTable({ name: 'fm_dir_pos' })
	dir_pos?: fm_location[];

	@ManyToMany(() => fm_photo)
	@JoinTable()
	photos?: fm_photo[];

	@OneToMany(() => fm_request, (fm_request) => fm_request.id_commerce)
	@JoinColumn({ name: 'requests' })
	requests!: fm_request[];

	@CreateDateColumn()
	createdAt?: string;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt?: number;
}
