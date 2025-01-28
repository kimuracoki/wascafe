const drinkMenuTexts: DrinkMenuTexts = {
  coffee: {
    title: `コーヒー`,
    copy: `ワズカフェのコーヒーはコロンビア産・エチオピア産の豆をベースにした
            オリジナルブレンドをオーダーごとにドリップします。
            淹れたての香りと、酸味・苦味・コクが調和した奥深い味をお楽しみください。`,
    menu: [
      {
        item: `オリジナルブレンドコーヒー（ホット/アイス）`,
        price: `440円（税込）`,
        description: `コロンビア産・エチオピア産・インドネシア産のオリジナルブレンド。
            程よい苦味とコク、のちに爽やかな甘味が広がります。`,
      },
      {
        item: `アメリカンコーヒー（ホット/アイス）`,
        price: `440円（税込）`,
        description: `コロンビア産・エチオピア産のオリジナルブレンド。
        苦味を抑え、しっかりとしたコクと香りが特徴です。`,
      },
      {
        item: `備長炭でローストした炭焼きコーヒー（ホット/アイス）`,
        price: `550円（税込）`,
        description: `コロンビア産の深煎り。インパクトのある苦味と炭焼きの香りが広がります。`,
      },
      {
        item: `カフェ・ラッテ（ホット/アイス）`,
        price: `528円（税込）`,
        description: `コロンビア産を深煎りで淹れた濃いめのエスプレッソと濃厚フォームドミルクを合わせました。`,
      },
      {
        item: `期間限定フルーツフレーバーアイスコーヒー`,
        price: `550円（税込）`,
        description: `ブラジル産をベースにしたオリジナルブレンドにフルーツフレーバーを合わせました。
        程よい苦味のスッキリとした味わいのあとに、
        オレンジやストロベリー、バナナなど旬の果物の甘味と香りが口いっぱいに広がります。
        フレーバーは時期により異なります。詳しくは店員にお声がけください。
        `,
      },
      {
        item: `限定スペシャリティコーヒー`,
        price: `550〜770円（税込）`,
        description: `期間限定の特別ブレンドです。詳しくは店員にお声がけください。`,
      },
    ],
  },
};

type DrinkMenuTexts = {
  coffee: MenuCategory;
};

type MenuCategory = {
  title: string;
  copy: string;
  menu: Menu[];
};

type Menu = {
  item: string;
  price: string;
  description: string;
};

export default drinkMenuTexts;
