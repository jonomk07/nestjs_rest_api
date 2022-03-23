// DTO (Data Transfer Object)
// Im marking it as readonly because we shouldn't 
// be able to directly modify the values of the properties.

export class CreateItemDto {
    readonly name: string;
    readonly description: string;
    readonly qty: number;
  }