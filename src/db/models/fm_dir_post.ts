// create table with id primary key and name string in typeorm
import {
	Entity,
	PrimaryGeneratedColumn,
	JoinColumn,
	ManyToOne,
	OneToOne,
	UpdateDateColumn,
	CreateDateColumn,
} from 'typeorm';

import fm_location from './fm_location';
import fm_commerce from './fm_commerce';

@Entity()
export default class fm_dir_post {
	@PrimaryGeneratedColumn()
	id?: number;

	@OneToOne(() => fm_location)
	@JoinColumn()
	id_location!: number;

	@ManyToOne(() => fm_commerce, (fm_Commerce) => fm_Commerce.dir_posts)
	@JoinColumn()
	id_commerce!: number;

	@CreateDateColumn()
	createdAt?: string;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt?: number;
}
