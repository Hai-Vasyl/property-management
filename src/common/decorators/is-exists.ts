import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
class IsExistsConstraint implements ValidatorConstraintInterface {
  public async validate(
    value: number,
    { constraints: Entity }: ValidationArguments,
  ): Promise<boolean> {
    const record = await (Entity as any).findOne({ where: { id: value } });

    return Boolean(record);
  }

  public defaultMessage(): string {
    return `No data found with the specified Id`;
  }
}

export function IsExists(constraints: any, options?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options,
      constraints,
      validator: IsExistsConstraint,
    });
  };
}
