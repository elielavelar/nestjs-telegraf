import { SetMetadata } from '@nestjs/common';
import { DECORATORS } from '../telegraf.constants';

export type TelegrafPhonePhone = string | string[];

export interface PhoneOptions {
  phone: TelegrafPhonePhone;
}

/**
 * Phone number handling.
 *
 * @see https://telegraf.js.org/#/?id=phone
 */
export const Phone = (phone: TelegrafPhonePhone): MethodDecorator => {
  return SetMetadata(DECORATORS.PHONE, { phone });
};

/**
 * Phone number handling.
 *
 * @see https://telegraf.js.org/#/?id=phone
 * @deprecated since v2, use Phone decorator instead.
 */
export const TelegrafPhone = Phone;
