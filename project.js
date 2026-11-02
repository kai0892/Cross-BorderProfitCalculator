/* Application fields and sample data. MIT License. */
const SPEC={
  "id": "A03",
  "slug": "crossborder-margin",
  "name": "跨境单品利润试算器",
  "desc": "按售价、汇率与单件成本，计算利润、保本售价和目标售价。",
  "fields": [
    {
      "key": "price",
      "label": "外币售价",
      "type": "number",
      "value": 29.9,
      "min": 0
    },
    {
      "key": "fx",
      "label": "人民币 / 1单位外币",
      "type": "number",
      "value": 7.1,
      "min": 0.000001
    },
    {
      "key": "purchase",
      "label": "采购成本（元）",
      "type": "number",
      "value": 35,
      "min": 0
    },
    {
      "key": "shipping",
      "label": "物流成本（元）",
      "type": "number",
      "value": 28,
      "min": 0
    },
    {
      "key": "packing",
      "label": "包装及其他成本（元）",
      "type": "number",
      "value": 4,
      "min": 0
    },
    {
      "key": "fee",
      "label": "平台佣金（售价%）",
      "type": "number",
      "value": 15,
      "min": 0
    },
    {
      "key": "ad",
      "label": "广告分摊（元/件）",
      "type": "number",
      "value": 18,
      "min": 0
    },
    {
      "key": "refund",
      "label": "退款预留（售价%）",
      "type": "number",
      "value": 5,
      "min": 0
    },
    {
      "key": "target",
      "label": "目标利润率（%）",
      "type": "number",
      "value": 20,
      "min": 0
    }
  ],
  "tables": [],
  "limits": "佣金和退款预留按售价比例计；不自动获取汇率、税率或平台费率。退款预留为简化预算。",
  "dirname": "crossborder-margin",
  "example": {
    "_files": {},
    "price": 29.9,
    "fx": 7.1,
    "purchase": 35,
    "shipping": 28,
    "packing": 4,
    "fee": 15,
    "ad": 18,
    "refund": 5,
    "target": 20
  },
  "inputTitle": "售价与成本",
  "outputTitle": "利润测算",
  "action": "计算利润"
};
