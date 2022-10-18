import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
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
  async findById(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.transactionsService.findById(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Put(':id/update')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: TransactionsDto,
  ) {
    try {
      return await this.transactionsService.updata(id, data);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Delete(':id/delete')
  async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.transactionsService.delete(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
