import { IsNotEmpty } from "class-validator";

export class CreateCompanyDto {
    @IsNotEmpty({ message: 'Company name is required' })
    name: string;

    @IsNotEmpty({ message: 'Company address is required' })
    address: string;

    @IsNotEmpty()
    description: string;
}
