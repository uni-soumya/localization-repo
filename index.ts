import { default as uAnalyzeEn } from './u-analyze/en-US.json';
import { default as uAnalyzeFr } from './u-analyze/fr.json';
import { default as uAnalyzeJa } from './u-analyze/ja.json';
import { default as uAnalyzeEs } from './u-analyze/es-ES.json';
import { default as uAnalyzeIt } from './u-analyze/it-IT.json';

import { default as experiencesEn } from './experiences/en.json';

import { default as policyDashboardEn } from './policy-dashboard/en.json';

import { default as legacyAdminEn } from './legacy-admin/en.json';
import { default as legacyAdminJa } from './legacy-admin/ja.json';

import { default as uCaptureEn } from './u-capture/en.json';

import { default as uSelfServeEn } from './u-selfserve/en.json';
import { default as ussChatAppEn } from './uss-chat-app/en.json';

import { default as measurementEn } from './measurement/en.json';
import { default as measurementFr } from './measurement/fr.json';
import { default as measurementIt } from './measurement/it.json';
import { default as measurementEs } from './measurement/es.json';

import { default as kaasEn } from './kaas/en.json';
import { default as kaasFr } from './kaas/fr.json';
import { default as kaasEs } from './kaas/es.json';
import { default as kaasIt } from './kaas/it.json';

import { default as commonEn } from './common/en-US.json';
import { default as commonEs } from './common/es-ES.json';
import { default as commonIt } from './common/it-IT.json';
import { default as commonFr } from './common/fr.json';

const ordinal = (ctx: { named: (arg0: string) => number }) => {
  const number = ctx.named('count');

  const suffixes: Record<number, string> = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    11: 'th',
    12: 'th',
    13: 'th',
  };
  const suffix = suffixes[number] || suffixes[number % 10] || 'th';

  return `${number}${suffix}`;
};
export const en = {
  ...commonEn,
  ...uAnalyzeEn,
  ...legacyAdminEn,
  ...uCaptureEn,
  ...policyDashboardEn,
  ...experiencesEn,
  ...uSelfServeEn,
  ...measurementEn,
  ...ussChatAppEn,
  ...kaasEn,
  ordinal: ordinal,
};
export const fr = { ...commonFr, ...uAnalyzeFr, ...kaasFr, ...measurementFr };
export const ja = { ...uAnalyzeJa, ...legacyAdminJa };
export const es = { ...commonEs, ...uAnalyzeEs, ...kaasEs, ...measurementEs };
export const it = { ...commonIt, ...uAnalyzeIt, ...kaasIt, ...measurementIt };
export const messages = {
  en,
  es,
  it,
  fr,
};
