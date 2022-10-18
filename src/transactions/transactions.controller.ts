import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { TransactionsDto } from './dto/transaction.dto';

import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}
  @Post()
  async create(@Body() data: TransactionsDto) {
    return this.transactionsService.create(data);
  }

  @Get()
  async findAll() {
    return await this.transactionsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      return this.transactionsService.findById(+id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
