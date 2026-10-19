import { IsInt, isNotEmpty, IsNotEmpty, IsString, Max, MaxLength, Min } from 'class-validator';

export class CreateReservationDto {
  // TODO 1: Add the validators required by the examination. Do not convert body numbers.
  @IsString() 
  @IsNotEmpty()
  @MaxLength(80)
  purpose!: string; //Texto obligatorio, diferente de "", con máximo 80 caracteres.


  @IsInt()
  @Min(1)
  @Max(20)
  participants!: number; //Número entero obligatorio entre 1 y 20, incluidos ambos límites

  @IsInt()
  @Min(1)
  roomId!: number; //Número entero obligatorio mayor o igual a 1.

}
