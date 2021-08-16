# taiwan_future2021
 
 ### Follow the rules when you git
  1. feat: 新功能 (feature)
  2. fix: 修補bug
  3. doc: 文件 (documentation)
  4. style: 樣式 (不影響程式碼運行之異動)
  5. refactor: 重構 (未新增功能或修補bug之程式碼異動)
  6. test: 增加測試
  7. chore: 構建過程或輔助工具之異動


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run-script build
```
## data format
```
{
    "navList": [
        {
            "name": "選單名稱 (html)",
            "nameEN": "選單名稱英文",
            "class": "定義class (選)",
            "isAnchor": 是否為錨點 (布林),
            "url": "url或錨點",
            "navList": [
                {
                    "name": "次級選單名稱 (html)",
                    "class": "定義class (選)",
                    "url": "url或錨點",
                    "isAnchor": 是否為錨點 (布林)
                }
            ]
        }
    ],
    "about": {
        "title": "標題名稱",
        "titleEN": "標題名稱英文",
        "article": [
            ["文章段落一", "文章段落一折行"],
            ["文章段落二", "文章段落二折行"]
        ]
    },
    "spotlight": {
        "title": "標題名稱",
        "list": [
            {
                "title": "焦點標題",
                "description": ["描述", "描述折行"]
            }
        ]
    },
    "video": {
        "title": "標題名稱",
        "list": ["youtube影片編號", "youtube影片編號2"]
    },
    "issue": {
        "title": "標題名稱",
        "titleEN": "標題名稱英文",
        "list": [
            {
                "title": "趨勢議題標題 (html)",
                "description": "詳細內文"
            }
        ]
    },
    "guest": {
        "title": "標題名稱",
        "titleEN": "標題名稱英文",
        "list": [
            [{
                "type": "分類",
                "image": "圖檔url",
                "position": "抬頭",
                "name": "姓名",
                "experience": [ // 選填
                    {
                        "isDescription": 是否以段落呈現 (布林) // 選填; 預設false,
                        "title": "標題",
                        "subtitle": "小標",
                        "list": ["清單"]
                    }
                ],
                "description": ["描述"] // 選填
            }]
        ]
    },
    "agenda": [
        {
            "tabName": "tab選單標題(日期)",
            "morning": [
                {
                    "time": "時間",
                    "event": "主題",
                    "description": "講者"
                }
            ],
            "afternoon": [
                {
                    "time": "時間",
                    "event": "主題",
                    "description": "講者"
                }
            ]
        }
    ],
    "report": {
        "title": "標題名稱",
        "titleEN": "標題名稱英文",
        "list": [
            {
                "title": "標題",
                "url": "url",
                "image": "圖檔url",
                "isMedia": 是否為影片 (布林)
            }
        ]
    },
    "specialreport": {
        "title": "標題名稱",
        "titleEN": "標題名稱英文",
        "list": [
            {
                "title": "標題",
                "url": "url",
                "image": "圖檔url",
                "isMedia": 是否為影片 (布林)
            }
        ]
    },
    "register": {
        "state": 是否報名開放 (布林),
        "title": "標題名稱",
        "titleEN": "標題名稱英文",
        "tickettype": [
            {
                "type": "席次",
                "value": "價格",
                "description": "席次描述",
                "url": "連結"
            }
        ],
        "alert": [
            "立即購票說明",
            "立即購票說明2"
        ],
        "closeMessage": "未開放報名顯示文案"
    },
    "address": {
        "title": "標題名稱",
        "date": "活動日期",
        "address": "活動地點 (html)"
    },
    "agencies": [
        {
            "title": "贊助分類名稱",
            "list": [
                {
                    "title": "贊助商名稱",
                    "image": "圖檔url",
                    "url": "url"
                }
            ]
        }
    ]
}
```
