import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class TransactionsDto {
  id?: number;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsDecimal()
  @IsNotEmpty()
  amount: string;
}
