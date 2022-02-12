import { UserEntity } from '../entities';
import { CommonEntity } from './common.entity';
export declare class ReviewEntity extends CommonEntity {
    content: string;
    startedAt?: string;
    finishedAt?: string;
    user: UserEntity;
}
