type UnlinkSocial = {
  providerId: string;
  accountId?: string;
};

type LinkSocial = {
  callbackURL?: string;
};

export type { LinkSocial, UnlinkSocial };
