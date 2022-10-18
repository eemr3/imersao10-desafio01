import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class TransactionsDto {
  id?: number;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsInt()
  @IsNotEmpty()
  amount: number;
}
