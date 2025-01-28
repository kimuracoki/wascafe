const foodMenuTexts: FoodMenuTexts = {
  bread: {
    title: `パン`,
    copy: `こだわりのルヴァン種を使った自家製生地は、モチモチとした食感と口の中に広がる甘みが特長です。
    イーストフード、乳化剤などの添加物は使用していないので身体に優しく、安心してお召し上がりいただけます。
    ＊テイクアウト可能です`,
    menu: [
      {
        item: `クラシック食パン（山型/角型）`,
        price: `1斤 440円（税込）`,
        description: ``,
      },
      {
        item: `レーズン食パン（角型）`,
        price: `1斤 484円（税込）`,
        description: ``,
      },
      {
        item: `バゲット（S/L）`,
        price: `S:220円（税込）/L:396円（税込）`,
        description: ``,
      },
      {
        item: `くるみパン`,
        price: `242円（税込）`,
        description: ``,
      },
      {
        item: `レーズンロール`,
        price: `242円（税込）`,
        description: ``,
      },
    ],
  },
  sandwich: {
    title: `その場でサンド！
    ワズランチのお惣菜パン・サンドイッチ`,
    copy: `ワズカフェ自慢のパンにお好きなお惣菜をサンドします。
    （11:00～14:00もしくは完売まで）
    
    ＊パンは、クラシック食パン、ベーグル、バゲット、ミニバゲットからお選びいただけます
    ＊お惣菜は日によって異なります
    ＊完売時は14時前に終了する場合がございます
    ＊テイクアウト可能です`,
    menu: [
      {
        item: `ベーグルサンド`,
        price: `550円（税込）〜`,
        description: ``,
      },
      {
        item: `クラシック食パンのBLTサンド`,
        price: `330円（税込）〜`,
        description: ``,
      },
      {
        item: `焼きそばパン`,
        price: `385円（税込）`,
        description: ``,
      },
      {
        item: `ナポリパン`,
        price: `385円（税込）`,
        description: ``,
      },
      {
        item: `ポテサラパン`,
        price: `330円（税込）`,
        description: ``,
      },
      {
        item: `コロッケパン`,
        price: `330円（税込）`,
        description: ``,
      },
    ],
  },
};

type FoodMenuTexts = {
  bread: MenuCategory;
  sandwich: MenuCategory;
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

export default foodMenuTexts;
