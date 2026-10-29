/* Application fields and sample data. MIT License. */
const SPEC={
  "id": "B01",
  "slug": "solo-capacity",
  "name": "接单工期与收益测算",
  "desc": "结合现有工作量和可用时间，评估新订单的工期与收益。",
  "fields": [
    {
      "key": "project",
      "label": "待接项目",
      "type": "text",
      "value": "宣传图订单"
    },
    {
      "key": "start",
      "label": "开始日期",
      "type": "date",
      "value": "2026-10-28"
    },
    {
      "key": "due",
      "label": "交付日期",
      "type": "date",
      "value": "2026-11-06"
    },
    {
      "key": "daily",
      "label": "每天可投入小时",
      "type": "number",
      "value": 5,
      "min": 0
    },
    {
      "key": "weekend",
      "label": "周末是否工作",
      "type": "select",
      "value": "否",
      "options": [
        "否",
        "是"
      ]
    },
    {
      "key": "committed",
      "label": "期间已有订单工时",
      "type": "number",
      "value": 15,
      "min": 0
    },
    {
      "key": "quote",
      "label": "拟报价（元）",
      "type": "number",
      "value": 4000,
      "min": 0
    },
    {
      "key": "cost",
      "label": "直接成本（元）",
      "type": "number",
      "value": 300,
      "min": 0
    },
    {
      "key": "buffer",
      "label": "工时预留（%）",
      "type": "number",
      "value": 20,
      "min": 0
    }
  ],
  "tables": [
    {
      "key": "items",
      "label": "新订单工作量",
      "columns": [
        {
          "key": "name",
          "label": "工作项",
          "type": "text"
        },
        {
          "key": "hours",
          "label": "估计小时",
          "type": "number"
        }
      ],
      "rows": [
        {
          "name": "设计制作",
          "hours": 12
        },
        {
          "name": "修改与交付",
          "hours": 4
        }
      ]
    }
  ],
  "skill": true,
  "dirname": "solo-capacity",
  "example": {
    "_files": {},
    "project": "宣传图订单",
    "start": "2026-10-28",
    "due": "2026-11-06",
    "daily": 5,
    "weekend": "否",
    "committed": 15,
    "quote": 4000,
    "cost": 300,
    "buffer": 20,
    "items": [
      {
        "name": "设计制作",
        "hours": 12
      },
      {
        "name": "修改与交付",
        "hours": 4
      }
    ]
  },
  "inputTitle": "工期与工作量",
  "outputTitle": "测算结果",
  "action": "评估订单"
};
