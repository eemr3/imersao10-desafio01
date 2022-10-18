import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transationRepository: Repository<Transaction>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    return this.transationRepository.create(createTransactionDto);
  }

  async findAll() {
    return await this.transationRepository.find();
  }

  async findOne(id: number) {
    const transaction = await this.transationRepository.findOne({
      where: { id },
    });
    if (!transaction) {
      throw new Error('Transaction not found');
    }
    return transaction;
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const transaction = await this.transationRepository.findOne({
      where: { id },
    });
    if (!transaction) {
      throw new Error('Transaction not found');
    }

    return await this.transationRepository.update(id, updateTransactionDto);
  }

  async remove(id: number) {
    const transaction = await this.transationRepository.findOne({
      where: { id },
    });
    if (!transaction) {
      throw new Error('Transaction not found');
    }
    return this.transationRepository.delete(id);
  }
}
