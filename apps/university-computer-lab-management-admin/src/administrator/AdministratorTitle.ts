import { Administrator as TAdministrator } from "../api/administrator/Administrator";

export const ADMINISTRATOR_TITLE_FIELD = "username";

export const AdministratorTitle = (record: TAdministrator): string => {
  return record.username?.toString() || String(record.id);
};
