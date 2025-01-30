const overview: Overview[] = [
  {
    title: `電話番号`,
    description: `000-0000-0000
    予約専用：0120-000-000`,
  },
  {
    title: `営業時間`,
    description: `平日7:00～21:00
    土日祝7:00～23:00`,
  },
  {
    title: `モーニング`,
    description: `7:00～11:00（平日のみ）`,
  },
  {
    title: `ランチ`,
    description: `11:00～14:00（平日のみ）`,
  },
  {
    title: `定休日`,
    description: `毎週火曜日（祝日を除く）`,
  },
  {
    title: `席数`,
    description: `テーブル席 40席
    カウンター 10席`,
  },
];

type Overview = {
  title: string;
  description: string;
};

export default overview;
