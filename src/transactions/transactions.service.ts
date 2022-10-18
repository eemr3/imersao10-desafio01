import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transactions } from './transactions.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { TransactionsDto } from './dto/transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transactions)
    private repository: Repository<TransactionsDto>,
  ) {}

  async create(data: TransactionsDto) {
    return await this.repository.save(data);
  }

  async findAll() {
    return await this.repository.find();
  }
  async findById(id: number) {
    const transaction = await this.repository.findOne({ where: { id } });
    if (!transaction) {
      throw new Error('Transaction not found!');
    }
    return transaction;
  }

  async updata(id: number, data: TransactionsDto): Promise<UpdateResult> {
    const transaction = await this.repository.findOne({ where: { id } });
    if (!transaction) {
      throw new Error('Transaction not found!');
    }
    return await this.repository.update(id, data);
  }

  async delete(id: number): Promise<DeleteResult> {
    const transaction = await this.repository.findOne({ where: { id } });
    if (!transaction) {
      throw new Error('Transaction not found!');
    }
    return this.repository.delete(id);
  }
}
