Page({
  data: {
    current: 0,
    sum: 80,
    wrong: 0,
    right: 0,
    currentAnswer: [],
    list: [{
      "selectTitle": "题目名称11",
      "selectDesc": "题目详情11",
      "selectId": 1,
      "optionA": "A 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionB": "B 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionC": "C 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionD": "D 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "type": 2,
      "explain": "题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释sdsdsd题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释sdsdsd题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释sdsdsd题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释sdsdsd",
      "answer": ['0'],
      "yourAnswer":[],
      "isAnswer": false,
      "collect": false,
      "note": "题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记",
    }, {
      "selectTitle": "题目名称22",
      "selectDesc": "题目详情22",
      "selectId": 2,
      "optionA": "A 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionB": "B 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionC": "C 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionD": "D 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "type": 3,
      "explain": "题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释",
      "answer": ['1', '2'],
      "yourAnswer":['1', '3'],
      "collect": true,
      "isAnswer": true,
      "note": "",
    }, {
      "selectTitle": "题目名称22",
      "selectDesc": "题目详情22",
      "selectId": 3,
      "optionA": "A 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionB": "B 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionC": "C 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionD": "D 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "type": 3,
      "explain": "题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释",
      "answer": ['2'],
      "yourAnswer":['1'],
      "isAnswer": true,
      "collect": false,
      "note": "题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记",
    }, {
      "selectTitle": "题目名称22",
      "selectDesc": "题目详情22",
      "selectId": 4,
      "optionA": "A 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionB": "B 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionC": "C 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionD": "D 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "type": 4,
      "explain": "题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释",
      "answer": ['3'],
      "yourAnswer":['1'],
      "isAnswer": true,
      "collect": false,
      "note": "题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记",
    }, {
      "selectTitle": "题目名称22",
      "selectDesc": "题目详情22",
      "selectId": 4,
      "optionA": "A 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionB": "B 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionC": "C 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "optionD": "D 第一题题目选项Aoption第一题题目选项AAoptionAoptionAoptionAoptionAoptionA",
      "type": 4,
      "explain": "题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释题目官方解释",
      "answer": ['4'],
      "yourAnswer":[],
      "isAnswer": false,
      "collect": false,
      "note": "题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记题目的笔记",
    }]
  },

  topicChange(event) {
    var c = event.detail.current
    this.setData({
      current: c
    })
  },

  seleceOptionA(event) {
    var c = event.detail.current
  },
  seleceOptionB(event) {

  },
  seleceOptionC(event) {

  },
  seleceOptionD(event) {

  },

  selectOption(e, field) {
    this.onChange('currentAnswer', e)
  },

  onChange(field, e) {
    const { value } = e.detail
    const data = this.data[field]
    
    const index = data.indexOf(value)
    const current = index === -1 ? [...data, value] : data.filter((n) => n !== value)

    const index2 = this.data.current
    
    var updateAnswer = "list[" + index2 + "].yourAnswer";
    var hasAnswer = "list[" + index2 + "].isAnswer";

    this.data.list[index2].yourAnswer = current;
    this.data.list[index2].isAnswer = true;

    this.setData({
      [field]: current,
      list: this.data.list,
    })
    console.log("value:" + JSON.stringify(this.data.list))
    console.log('checkbox发生change事件，携带value值为：', e.detail.value + " index: " + index + " current: " + current)
  },

})